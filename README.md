# IOweTea assets

This repository contains the static brand files and public web documents used by
IOweTea. GitHub Pages serves the repository contents as-is at
`https://xiki808.github.io/iowetea-assets/`; there is no build or publish
command in this repository.

## Contents

```text
brand/
  dark/                 Dark-theme app and web icons
  light/                Light-theme app and web icons
web-documents/
  privacy-policy.html   Public privacy policy
  account-deletion.html Public account deletion instructions
  support.html          Public support contact and help
store/
  google-play/          Listing icon, feature graphic, phone screenshots
  app-store/            iPhone and iPad screenshots, icon reference
```

Each theme directory contains the same icon set:

- `iowetea_<size>x<size>.png` at 16, 32, 48, 72, 96, 144, 180, 192, 512, and
  1024 pixels.
- `favicon.ico` for browser tabs.
- `manifest.json` for PWA metadata; it references the 192 and 512 pixel icons.
- `staging/iowetea_1024x1024.png`, the staging-specific large logo variant.

## Public paths

Files retain their repository-relative paths when published. For example:

- `https://xiki808.github.io/iowetea-assets/brand/dark/iowetea_512x512.png`
- `https://xiki808.github.io/iowetea-assets/brand/light/manifest.json`
- `https://xiki808.github.io/iowetea-assets/web-documents/privacy-policy.html`

The privacy-policy page is used by the IOweTea app and web interface. The app
opens this page in the system browser, while the web interface links to it from
its menu.

See [store/README.md](store/README.md) for the store artwork inventory,
generation command, final native screenshot check, and console worksheets.

## Working safely

Because these files are publicly served, changes to a filename, directory, or
published document path can break existing app and web links. Keep the themed
asset trees and each manifest's referenced icon files in sync when replacing
brand artwork. Review rendered documents and image dimensions before merging;
there is no local build step to catch broken static links.
