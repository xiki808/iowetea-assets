# Store artwork

Artwork for the new IOweTea listings. These files are local source artifacts;
the assets repository's root is publicly served by GitHub Pages after it is
published.

The console worksheets contain copy-ready listing text, URLs and review notes:
[Google Play](google-play/CONSOLE.md) and [App Store Connect](app-store/CONNECT.md).

| Destination | File | Size and format |
| --- | --- | --- |
| Google Play listing icon | `google-play/icon-512.png` | 512 × 512, RGBA PNG, under 1 MB |
| Google Play feature graphic | `google-play/feature-graphic.png` | 1024 × 500, RGB PNG |
| Google Play phone screenshots | `google-play/phone/1-home.png` through `4-security.png` | 1080 × 1920, RGB PNG |
| Google Play 7-inch tablet screenshots | `google-play/tablet-7/1-home.png` through `4-security.png` | 1920 × 1080, RGB PNG |
| Google Play 10-inch tablet screenshots | `google-play/tablet-10/1-home.png` through `4-security.png` | 2560 × 1440, RGB PNG |
| Google Play Chromebook screenshots | `google-play/chromebook/1-home.png` through `4-security.png` | 3200 × 1800, RGB PNG |
| App Store iPhone screenshots | `app-store/iphone/1-home.png` through `4-security.png` | 1206 × 2622, RGB PNG (Dynamic Island medium) |
| App Store iPhone Duo screenshots | `app-store/iphone-duo/1-home.png` through `4-security.png` | 2007 × 2853, RGB PNG |
| App Store iPad screenshots | `app-store/ipad/1-home.png` through `4-security.png` | 2064 × 2752, RGB PNG (13-inch iPad) |
| App Store product page header | `app-store/creative/header.png` | 3840 × 1646, RGB PNG |
| App Store search results | `app-store/creative/search-results.png` | 3840 × 2560, RGB PNG |
| App Store icon reference | `app-store/icon-1024.png` | 1024 × 1024, RGB PNG; the submitted icon comes from the signed app build |

All screenshots show the **actual demo web UI** from the sibling `web` repo's
`serve:demo` mode. The demo runs on disposable sample data and the capture fixes
the clock to 13:00 UTC. They are browser renders of the app's WebView content,
so check each platform's native safe areas, status bar, and the final app build
before uploading. Replace a screenshot with a device capture if the native
render differs. The featured cameras are bundled demo stills, not live feeds.

To regenerate on this machine, start the demo from `../web`:

```bash
npm run serve:demo -- --host 127.0.0.1 --port 5187
```

Then, from this repository:

```bash
node store/generate.mjs
```

To regenerate only the Google Play large-screen sets:

```bash
node store/generate.mjs --only=google-play/tablet-7,google-play/tablet-10,google-play/chromebook
```

To regenerate only the iPhone Duo set while the demo server is running:

```bash
node store/generate.mjs --only=app-store/iphone-duo
```

The optional App Store creative assets use the iPhone demo screenshots and
icon already in this repo. To regenerate them without running the demo:

```bash
node store/generate-apple-creatives.mjs
```

The generator uses the sibling web repo's Playwright installation, system
Chromium (`CHROMIUM_PATH` can override it), and ImageMagick `convert`. It
replaces only files in this `store/` directory. Check the results with
`identify store/google-play/**/*.png store/app-store/**/*.png` before upload.

The separate `web-documents/privacy-policy.html` was rewritten on 2026-10-27
for the app, home server and linked services. Check it against the final builds
and both stores' privacy answers before submission.
`web-documents/account-deletion.html` is the public deletion page. Store
listing text, privacy answers, and review notes must be completed in each
console; they are not image assets.

Requirements checked on 2026-10-27:

- [Google Play preview assets](https://support.google.com/googleplay/android-developer/answer/9866151)
- [App Store screenshot sizes](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications)
- [iPhone Duo submission guidance](https://developer.apple.com/news/?id=kkphp5qo)
