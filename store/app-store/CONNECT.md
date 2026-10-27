# App Store Connect worksheet — IOweTea

Prepared 2026-10-25 for a **new** iOS app, bundle ID
`app.iowetea.iowetea`. This is a copy-and-check worksheet, not a record of
values already entered in App Store Connect. The production Flutter flavor
uses this bundle ID.

## New app record and product page

| App Store Connect field | Value to enter |
| --- | --- |
| Name (30 characters max) | `IOweTea`, subject to availability alongside the old listing |
| Bundle ID | `app.iowetea.iowetea` |
| SKU | `app.iowetea.iowetea` (internal choice; cannot be changed after creation) |
| Primary language | English (UK), if selected for this record |
| Subtitle (30 characters max) | `Your home, in reach` |
| Primary category | Lifestyle (suggested; confirm the best available category) |
| Privacy Policy URL | `https://xiki808.github.io/iowetea-assets/web-documents/privacy-policy.html` |
| Support URL | `https://xiki808.github.io/iowetea-assets/web-documents/support.html` |
| Marketing URL | Leave blank unless a current public product page is available |
| Privacy Choices URL (optional) | `https://xiki808.github.io/iowetea-assets/web-documents/account-deletion.html` |
| Keywords (100 bytes max) | `smart home,home automation,device control,security,cameras,remote control,VPN` |
| Version | Use the final signed build's `CFBundleShortVersionString` |
| Copyright | Enter the actual rights holder and first rights year; do not use `IOweTea` as a legal entity without confirmation |

Description (plain text; under 4,000 characters):

```text
IOweTea brings your home controls together on your iPhone or iPad. Connect the app to an IOweTea home server to control compatible devices, view cameras, use configured remotes and manage home security.

The dashboard includes account and system settings. Available features depend on the devices and services configured in your home.

When away from home Wi-Fi, IOweTea can connect securely to your own home server using an encrypted WireGuard VPN. You can choose on-demand or always-on VPN behavior.

You can explore a sample home before connecting a server. Select Try the demo on the setup screen to see sample devices, cameras, remotes and security controls. Demo changes reset when you leave it.

A compatible IOweTea home server is required to connect and manage a real home.
```

Promotional text is optional; it can be left blank. For a new app, “What's New”
is not required. Upload `store/app-store/iphone/1-home.png` through
`4-security.png` and `store/app-store/ipad/1-home.png` through `4-security.png`.
The 1024px store icon is embedded in the signed app; `store/app-store/icon-1024.png`
is a reference copy. Check the browser-rendered demo screenshots against the
signed iOS app before upload.

For **iPhone Duo**, App Store Connect has **one screenshot drop area** that
accepts either outer or inner display sizes. Upload the four screenshots in
`store/app-store/iphone-duo/` (`1-home.png` through `4-security.png`,
2007 × 2853 portrait). This is one cohesive inner-display set for that area.

These are demo WebView renders at Apple's accepted output sizes. Compare the
chosen images with the signed app on iPhone Duo, including native safe areas and
the open layout, before uploading. Apple adds an iPhone Duo optimization
badge when Duo screenshots are submitted. Its current guidance makes Duo
screenshots mandatory for submissions using the iOS 27.1 SDK or later starting
in April 2027.

## Header and Search Results

These optional creative assets are separate from the required screenshots. In
**Product Page Information → Header and Search Results**, upload:

| Placement | File | Size |
| --- | --- | --- |
| Product page header | `store/app-store/creative/header.png` | 3840 × 1646, 21:9 |
| Search results | `store/app-store/creative/search-results.png` | 3840 × 2560, 3:2 |

Both are opaque PNGs built from IOweTea brand artwork and the disposable demo
UI. Use **Preview** in App Store Connect to inspect iPhone and iPad layouts,
orientations and languages before submission. These placements appear on
iOS/iPadOS 27 and later; older versions use the regular screenshots.

## App Review information

Enter a real contact's **first name, last name, email and international-format
phone number**. The public support email is `info.iowetea@gmail.com`; confirm
who will monitor it during review. No personal phone number belongs in this
repository.

For the built-in demo review route, leave **Sign-in required** unchecked: the
reviewer can reach this route without a username or password. Put the steps in
**Notes for Review**, after checking them against the submitted build:

```text
On first launch, the Setup IOweTea screen appears. Tap “Try the demo” to open a sample home. No server, account, password or QR code is needed. Use the bottom navigation to view Home, Camera, Remote, Security and Dashboard. The demo Security PIN is 1234, shown on the Dashboard's Demo board. Demo changes reset when you leave the demo.

Production setup, physical device integrations and VPN access require an IOweTea home server and cannot be exercised in the demo. The VPN connects only to the user's own server. Contact info.iowetea@gmail.com if you need a hardware walkthrough or additional access.
```

Apple guideline 2.1 says a built-in demo may replace a review account **with
prior approval** when an account cannot be supplied for legal or security
reasons, and that the demo must show the app's full features. This demo uses
sample data and does not exercise pairing, physical integrations or VPN. A
note alone does not guarantee Apple will accept it as full review access. Seek
App Review's approval for this route before submission; if Apple requires
more, provide a dedicated, Internet-reachable review home and a working test
account. Then select **Sign-in required**, enter its username and password,
and put the server address, setup QR code and pairing steps in Notes. Keep the
review home and credentials working throughout review. Do not enter placeholder
credentials or give reviewers a private LAN address or personal home account.
For required hardware, Apple also asks for a video showing the app on a
physical Apple device pairing and interacting with the hardware.

## App information and compliance

- **App Privacy:** answer from actual transmissions and retention, including
  the user's home server and Firebase. Audit precise location during setup,
  account and device identifiers, FCM tokens, Wi-Fi credentials, camera or
  backup files, and the app-controlled WebView. Apple defines “collected” by
  transmission and access/retention, so on-device-only processing may differ
  from data stored on the home server. Do not assume a “Data Not Collected”
  label from the demo alone.
- **Account deletion:** verify Dashboard → Users → My Account → Delete Account
  in the production build; link the public deletion page in Privacy Choices if
  useful. The privacy policy must describe deletion and retention accurately.
- **VPN:** publish from an Apple Developer **organization** account. Check
  Network Extension entitlement and in-app disclosure/consent. State clearly
  what VPN data is handled and how in the app and privacy policy.
- **Export compliance:** answer the encryption questions for the bundled
  WireGuard implementation. Set `ITSAppUsesNonExemptEncryption` in the app only
  after the correct classification is established; do not guess its value.
- **Age rating, content rights, pricing, territory availability and EU trader
  status:** answer for the actual rights holder and planned distribution.
  These are console/account decisions, not inferable from source code.

## Before entering the URLs

`web-documents/privacy-policy.html` was rewritten on 2026-10-27 for the
current app, home server and linked services. Check it against the final signed
build and the App Privacy answers before submission.
`support.html` is new in this change and must be published before its URL is
entered. Verify the links in a private browser window after publishing.

## Official references

- [App information and name limits](https://developer.apple.com/help/app-store-connect/reference/app-information/app-information)
- [iPhone Duo submission guidance](https://developer.apple.com/news/?id=kkphp5qo)
- [Screenshot specifications](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications)
- [Manage creative assets](https://developer.apple.com/help/app-store-connect/manage-app-information/manage-your-app-store-assets)
- [Creative asset specifications](https://developer.apple.com/help/app-store-connect/reference/app-information/creative-assets-specifications)
- [Description, keywords, URLs and review information](https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information)
- [Privacy answers](https://developer.apple.com/app-store/app-privacy-details/)
- [App Review guidelines, including VPN apps](https://developer.apple.com/app-store/review/guidelines/)
- [Complete review information](https://developer.apple.com/help/app-review/before-submitting-for-review/complete-review/)
- [Export compliance](https://developer.apple.com/documentation/Security/complying-with-encryption-export-regulations)
