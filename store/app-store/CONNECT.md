# App Store Connect worksheet — IOweTea

Prepared 2026-10-25 for a **new** iOS app, bundle ID
`app.iowetea.iowetea`. This is a copy-and-check worksheet, not a record of
values already entered in App Store Connect. The app source still uses the old
bundle ID until it is migrated.

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

## App Review information

Enter a real contact's **first name, last name, email and international-format
phone number**. The public support email is `info.iowetea@gmail.com`; confirm
who will monitor it during review. No personal phone number belongs in this
repository.

Suggested Notes for Review, after checking the submitted build:

```text
IOweTea is a companion for a user-owned home server. To review without hardware, launch the app and tap “Try the demo” on the Setup IOweTea screen. No account or QR code is required. Use the navigation to visit Home, Camera, Remote, Security and Dashboard. The demo Security PIN is 1234; it is also displayed on the Dashboard Demo board. Demo data resets when the reviewer leaves the demo.

The production setup, physical device integrations and VPN connection require an IOweTea home server. The VPN provides encrypted remote access to that user's own server; it is not a public VPN endpoint. The demo cannot exercise that connection. Contact info.iowetea@gmail.com for a hardware walkthrough or additional access if required.
```

Apple may require a working review account, hardware access or a video that
shows physical pairing and interaction. Supply those with the submission if
the built-in demo does not expose enough of the advertised features. Do not
mark “Sign-in required” for the demo path; if a separate review server/account
is provided, enter its credentials in the designated fields.

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

`web-documents/privacy-policy.html` is still a 2022 template. Rewrite and
review it for current data handling before using the URL for submission.
`support.html` is new in this change and must be published before its URL is
entered. Verify the links in a private browser window after publishing.

## Official references

- [App information and name limits](https://developer.apple.com/help/app-store-connect/reference/app-information/app-information)
- [Description, keywords, URLs and review information](https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information)
- [Privacy answers](https://developer.apple.com/app-store/app-privacy-details/)
- [App Review guidelines, including VPN apps](https://developer.apple.com/app-store/review/guidelines/)
- [Complete review information](https://developer.apple.com/help/app-review/before-submitting-for-review/complete-review/)
- [Export compliance](https://developer.apple.com/documentation/Security/complying-with-encryption-export-regulations)
