// Rebuild the store artwork from the sibling web repo's disposable demo.
// Run `npm run serve:demo -- --host 127.0.0.1 --port 5187` in ../web first.
import { createRequire } from 'node:module'
import { execFileSync } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const web = path.resolve(root, '../../web')
const require = createRequire(path.join(web, 'package.json'))
const { chromium } = require('playwright')
const base = process.argv[2] || 'http://127.0.0.1:5187/'

const sets = [
  { dir: 'google-play/phone', width: 360, height: 640, scale: 3, scenes: ['home', 'camera', 'remote', 'security'] },
  { dir: 'app-store/iphone', width: 402, height: 874, scale: 3, scenes: ['home', 'camera', 'remote', 'security'] },
  { dir: 'app-store/ipad', width: 1032, height: 1376, scale: 2, scenes: ['home', 'camera', 'remote', 'security'] }
]

const saveRgb = (input, output) => {
  execFileSync('convert', [input, '-strip', '-alpha', 'off', `PNG24:${output}`])
}

const waitForDemo = async (page) => {
  await page.goto(base, { waitUntil: 'domcontentloaded', timeout: 30000 })
  await page.waitForSelector('#menu .menu-items > *', { timeout: 30000 })
  await page.waitForTimeout(1800)
}

const scene = async (page, name) => {
  if (name === 'home') {
    await page.locator('#menu .menu-item').nth(0).click()
    await page.waitForTimeout(650)
    await page.locator('#home .room').first().click()
  } else {
    const menuIndex = { camera: 1, remote: 2, security: 3 }[name]
    await page.locator('#menu .menu-item').nth(menuIndex).click()
    await page.waitForTimeout(650)
    if (name === 'remote') await page.locator('#remote .remote').first().click()
  }
  await page.waitForTimeout(900)
}

const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium-browser',
  args: ['--no-sandbox']
})

try {
  for (const set of sets) {
    const outputDir = path.join(root, set.dir)
    await mkdir(outputDir, { recursive: true })
    for (const [index, name] of set.scenes.entries()) {
      const context = await browser.newContext({
        viewport: { width: set.width, height: set.height },
        deviceScaleFactor: set.scale,
        locale: 'en-GB',
        colorScheme: 'dark'
      })
      await context.route(/fonts\.(googleapis|gstatic)\.com/, (route) => route.abort())
      const page = await context.newPage()
      await page.clock.install({ time: new Date('2026-10-15T13:00:00Z') })
      await waitForDemo(page)
      await scene(page, name)
      const output = path.join(outputDir, `${index + 1}-${name}.png`)
      const temporary = `${output}.tmp.png`
      await page.screenshot({ path: temporary, animations: 'disabled' })
      saveRgb(temporary, output)
      execFileSync('rm', [temporary])
      await context.close()
      process.stdout.write(`${output}\n`)
    }
  }

  // The listing icon is a separate upload from the Android launcher icon.
  // The brand source is opaque RGBA, which satisfies Play's 32-bit PNG rule.
  const icon = await readFile(path.join(root, '../brand/dark/iowetea_512x512.png'))
  await writeFile(path.join(root, 'google-play/icon-512.png'), icon)

  // App Store artwork is carried by the signed app; keep an opaque 1024px
  // reference copy here for reviewing the store package alongside Play.
  saveRgb(
    path.join(root, '../brand/dark/iowetea_1024x1024.png'),
    path.join(root, 'app-store/icon-1024.png')
  )

  const camera = await readFile(path.join(root, 'google-play/phone/2-camera.png'))
  const home = await readFile(path.join(root, 'google-play/phone/1-home.png'))
  const featureContext = await browser.newContext({ viewport: { width: 1024, height: 500 }, deviceScaleFactor: 1 })
  const feature = await featureContext.newPage()
  await feature.setContent(`<!doctype html><html><head><style>
    * { box-sizing: border-box; } html,body { margin:0; width:1024px; height:500px; overflow:hidden; }
    body { font-family: Arial, sans-serif; color:#f9fbf3; background:linear-gradient(115deg,#748d3e 0%,#3c7540 42%,#153d31 100%); }
    .halo { position:absolute; width:660px; height:660px; left:-180px; top:-150px; border:1px solid #ffffff44; border-radius:50%; box-shadow:0 0 0 90px #ffffff0b,0 0 0 185px #ffffff0a; }
    .copy { position:absolute; z-index:2; left:92px; top:133px; width:460px; }
    h1 { font-size:63px; letter-spacing:-3px; line-height:1.04; margin:0 0 24px; font-weight:750; text-wrap:balance; }
    p { font-size:24px; line-height:1.35; max-width:410px; margin:0; color:#eff5dd; }
    .phone { position:absolute; top:43px; width:220px; height:415px; padding:7px; background:#101e18; border:3px solid #b8cc89; border-radius:27px; box-shadow:0 20px 55px #09261f88; overflow:hidden; }
    .phone img { width:100%; height:100%; object-fit:cover; object-position:top; border-radius:17px; }
    .phone.first { left:595px; transform:rotate(-8deg); }
    .phone.second { left:774px; top:75px; transform:rotate(7deg); }
  </style></head><body><div class="halo"></div><div class="copy"><h1>Your home,<br>in reach.</h1><p>Control devices, view cameras and manage your home from one app.</p></div><div class="phone first"><img src="data:image/png;base64,${home.toString('base64')}"></div><div class="phone second"><img src="data:image/png;base64,${camera.toString('base64')}"></div></body></html>`, { waitUntil: 'load' })
  const graphic = path.join(root, 'google-play/feature-graphic.png')
  await feature.screenshot({ path: `${graphic}.tmp.png` })
  saveRgb(`${graphic}.tmp.png`, graphic)
  execFileSync('rm', [`${graphic}.tmp.png`])
  await featureContext.close()
  process.stdout.write(`${graphic}\n`)
} finally {
  await browser.close()
}
