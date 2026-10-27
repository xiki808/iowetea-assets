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
| App Store iPhone screenshots | `app-store/iphone/1-home.png` through `4-security.png` | 1206 × 2622, RGB PNG (Dynamic Island medium) |
| App Store iPad screenshots | `app-store/ipad/1-home.png` through `4-security.png` | 2064 × 2752, RGB PNG (13-inch iPad) |
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

The generator uses the sibling web repo's Playwright installation, system
Chromium (`CHROMIUM_PATH` can override it), and ImageMagick `convert`. It
replaces only files in this `store/` directory. Check the results with
`identify store/google-play/**/*.png store/app-store/**/*.png` before upload.

The separate `web-documents/privacy-policy.html` is still a 2022 template and
needs an accurate product-specific rewrite and owner review before either store
submission. `web-documents/account-deletion.html` is the existing public
deletion page. Store listing text, privacy answers, and review notes must be
completed in each console; they are not image assets.

Requirements checked on 2026-10-25:

- [Google Play preview assets](https://support.google.com/googleplay/android-developer/answer/9866151)
- [App Store screenshot sizes](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications)
