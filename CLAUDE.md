# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo Overview

A static asset repository for the IOweTea project. It holds brand assets (logo in multiple sizes and themes) and web documents (such as the privacy policy) that need to be publicly accessible. The repository is deployed via **GitHub Pages**, making all files available at:

```
https://xiki808.github.io/iowetea-assets/
```

There is no build step — files are served as-is.

## Directory Structure

```
brand/
├── dark/                       # Dark theme logo variants
│   ├── iowetea_*.png           # Logo at standard sizes (16, 32, 48, 72, 96, 144, 180, 192, 512, 1024)
│   ├── favicon.ico             # Browser favicon
│   ├── manifest.json           # PWA web app manifest
│   └── staging/
│       └── iowetea_1024x1024.png  # Staging variant of the logo
└── light/                      # Light theme logo variants (same structure as dark/)
    ├── iowetea_*.png
    ├── favicon.ico
    ├── manifest.json
    └── staging/
        └── iowetea_1024x1024.png
web-documents/
└── privacy-policy.html         # Required by Google Play and Apple App Store for app approval
```

## Web Documents

### privacy-policy.html

The privacy policy is a required document for app store submissions. It is referenced by both the Flutter app and the Vue web app, pointing to the GitHub Pages URL:

```
https://xiki808.github.io/iowetea-assets/web-documents/privacy-policy.html
```

**Consumers:**

- **app** (`app/lib/helpers/configs.dart`) — defines `privacyPolicyURL` constant; the WebView intercepts navigation to this URL and opens it in the system browser
- **web** (`src/components/common/ThreeDotMenuComponent.vue`) — links to it from the three-dot menu

## Brand Assets

Logo images are provided in two themes (`dark` / `light`) to suit different UI contexts. Each theme includes:

- **PNG sizes**: 16×16, 32×32, 48×48, 72×72, 96×96, 144×144, 180×180, 192×192, 512×512, 1024×1024
- **favicon.ico**: Multi-resolution icon for browser tabs
- **manifest.json**: PWA manifest referencing the 192×192 and 512×512 PNGs
- **staging/**: A staging-specific 1024×1024 variant (used to distinguish staging builds visually)

## Related Repos

- **app** - Repository Path: `@../app`
  Loads the privacy policy URL via system browser when the user taps the link inside the WebView.
- **web** - Repository Path: `@../web`
  Links to the privacy policy from the three-dot menu in `ThreeDotMenuComponent.vue`.
