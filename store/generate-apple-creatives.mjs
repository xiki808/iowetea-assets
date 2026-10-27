// Rebuild the optional App Store header and search-result images from the
// existing IOweTea brand artwork and demo screenshots. No web server needed.
import { createRequire } from 'node:module'
import { execFileSync } from 'node:child_process'
import { mkdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const web = path.resolve(root, '../../web')
const require = createRequire(path.join(web, 'package.json'))
const { chromium } = require('playwright')

const outputDir = path.join(root, 'app-store/creative')
const assets = {
  home: (await readFile(path.join(root, 'app-store/iphone/1-home.png'))).toString('base64'),
  camera: (await readFile(path.join(root, 'app-store/iphone/2-camera.png'))).toString('base64'),
  icon: (await readFile(path.join(root, 'app-store/icon-1024.png'))).toString('base64')
}

const sharedStyle = `
  * { box-sizing: border-box; }
  html, body { width: 100%; height: 100%; margin: 0; overflow: hidden; }
  body {
    position: relative;
    color: #f8f9ed;
    font-family: Arial, Helvetica, sans-serif;
    background:
      radial-gradient(circle at 16% 18%, #89a549 0, #658d45 23%, transparent 49%),
      linear-gradient(112deg, #4e7c43 0%, #285f3c 48%, #092c25 100%);
  }
  .ring {
    position: absolute; width: 1100px; height: 1100px; left: -340px; top: -400px;
    border: 2px solid #ffffff44; border-radius: 50%;
    box-shadow: 0 0 0 160px #ffffff0a, 0 0 0 330px #ffffff09;
  }
  .brand {
    position: absolute; z-index: 3; display: flex; align-items: center;
    gap: 22px; font-size: 42px; font-weight: 700; letter-spacing: -1px;
  }
  .brand img { width: 84px; height: 84px; border-radius: 20px; }
  .copy { position: absolute; z-index: 3; }
  h1 { margin: 0; font-weight: 750; letter-spacing: -5px; line-height: 1.02; }
  p { margin: 30px 0 0; color: #f1f5df; line-height: 1.25; }
  .phone {
    position: absolute; z-index: 2; overflow: hidden;
    padding: 10px; background: #0b1d15; border: 4px solid #c0d58f;
    border-radius: 46px; box-shadow: 0 36px 90px #08241daa;
  }
  .phone img { display: block; width: 100%; height: 100%; object-fit: cover; border-radius: 34px; }
  .phone.home { transform: rotate(-7deg); }
  .phone.camera { transform: rotate(7deg); }
`

const designs = [
  {
    name: 'header',
    width: 1920,
    height: 823,
    css: `
      .brand { left: 150px; top: 78px; }
      .copy { left: 150px; top: 245px; width: 875px; }
      h1 { font-size: 124px; }
      p { font-size: 36px; max-width: 750px; }
      .phone { width: 370px; height: 805px; }
      .phone.home { left: 1150px; top: 145px; }
      .phone.camera { left: 1480px; top: 75px; }
    `,
    copy: '<h1>Your home,<br>in reach.</h1><p>Control devices, view cameras and manage security from one app.</p>'
  },
  {
    name: 'search-results',
    width: 1920,
    height: 1280,
    css: `
      .ring { top: -190px; }
      .brand { left: 145px; top: 115px; }
      .copy { left: 145px; top: 370px; width: 830px; }
      h1 { font-size: 116px; }
      p { font-size: 39px; max-width: 700px; }
      .phone { width: 475px; height: 1060px; }
      .phone.home { left: 1035px; top: 250px; }
      .phone.camera { left: 1390px; top: 175px; }
    `,
    copy: '<h1>Control your<br>home.</h1><p>Devices, cameras and security in one place.</p>'
  }
]

const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium-browser',
  args: ['--no-sandbox']
})

try {
  await mkdir(outputDir, { recursive: true })
  for (const design of designs) {
    const context = await browser.newContext({
      viewport: { width: design.width, height: design.height },
      deviceScaleFactor: 2
    })
    try {
      const page = await context.newPage()
      await page.setContent(`<!doctype html><html lang="en"><head><meta charset="utf-8">
        <style>${sharedStyle}${design.css}</style></head><body>
        <div class="ring"></div>
        <div class="brand"><img src="data:image/png;base64,${assets.icon}" alt="">IOweTea</div>
        <div class="copy">${design.copy}</div>
        <div class="phone home"><img src="data:image/png;base64,${assets.home}" alt=""></div>
        <div class="phone camera"><img src="data:image/png;base64,${assets.camera}" alt=""></div>
        </body></html>`, { waitUntil: 'load' })
      const output = path.join(outputDir, `${design.name}.png`)
      const temporary = `${output}.tmp.png`
      await page.screenshot({ path: temporary })
      execFileSync('convert', [temporary, '-strip', '-alpha', 'off', `PNG24:${output}`])
      execFileSync('rm', [temporary])
      process.stdout.write(`${output}\n`)
    } finally {
      await context.close()
    }
  }
} finally {
  await browser.close()
}
