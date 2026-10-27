# Google Play Console worksheet — IOweTea

Prepared 2026-10-25 for a **new** Android app, package `app.iowetea.iowetea`.
This is a copy-and-check worksheet, not a record of values already entered in
Play Console. The production Flutter flavor uses this package ID.

## Main store listing

| Play Console field | Value to enter |
| --- | --- |
| App name (30 characters max) | `IOweTea` |
| Short description (80 characters max) | `Control your IOweTea home server, cameras, remotes and security.` |
| Primary language | English (United Kingdom), if this is the language selected for the new listing |
| App type | App |
| Category | House & Home |
| Tags | Home automation; Remote control |
| Contact email | `info.iowetea@gmail.com` |
| Website / support URL | `https://xiki808.github.io/iowetea-assets/web-documents/support.html` |
| Privacy policy URL | `https://xiki808.github.io/iowetea-assets/web-documents/privacy-policy.html` |
| Account-deletion URL | `https://xiki808.github.io/iowetea-assets/web-documents/account-deletion.html` |

Full description (plain text; under 4,000 characters):

```text
IOweTea is the companion app for an IOweTea home server. It brings the controls for your home together on your phone.

Set up a connection to your home server, then control compatible devices, check cameras, use configured remotes and manage your home security from the app. The dashboard also provides access to account and system settings. Available features depend on the devices and services configured in your home.

When you are away from your home Wi-Fi, IOweTea can use an encrypted WireGuard VPN connection to reach your own home server. You choose whether the app uses on-demand or always-on VPN behavior.

No IOweTea server yet? Open Try the demo from the setup screen to explore a sample home with devices, cameras, remotes and security controls. The demo uses sample data and resets when you leave it.

A compatible IOweTea home server is needed to connect and manage a real home. Device and camera availability depends on your home setup.
```

Upload these files from this repo:

- Listing icon: `store/google-play/icon-512.png`
- Feature graphic: `store/google-play/feature-graphic.png`
- Phone screenshots, in order: `store/google-play/phone/1-home.png`,
  `2-camera.png`, `3-remote.png`, `4-security.png`
- 7-inch tablet screenshots, in the same order:
  `store/google-play/tablet-7/1-home.png` through `4-security.png`
- 10-inch tablet screenshots, in the same order:
  `store/google-play/tablet-10/1-home.png` through `4-security.png`
- Chromebook screenshots, in the same order:
  `store/google-play/chromebook/1-home.png` through `4-security.png`

The screenshot images are demo WebView renders. The tablet and Chromebook sets
show the landscape responsive layout. Check every set against a signed Android
build on the matching device class and replace any image whose native status
bar, safe area or layout differs.

Set the category and tags under **Grow users → Store presence → Store settings →
App category**. Choose these two tags from **Manage tags**. They describe the
app's home controls and configured remotes. Google allows up to five tags; check
the exact labels shown in the console before saving.

## App content and review access

For **Is any part of your app restricted?**, select **Yes / All or some
functionality is restricted**. The built-in demo needs no credentials, but
production home controls require a home server and sign-in. Name the access
instructions **Try a Demo**; leave username and password empty for this route
and put the steps in the instructions field.

In **App content → Sign-in details**, explain that the sample home is available
without credentials. Use these instructions, then verify them on the uploaded
build:

```text
On first launch, the Setup IOweTea screen appears. Tap “Try the demo” to open a sample home. No server, account, password or QR code is needed. Use the bottom navigation to view Home, Camera, Remote, Security and Dashboard. The demo security PIN is 1234, shown on the Dashboard's Demo board. Demo changes reset when leaving the demo. The production setup and VPN require a physical IOweTea home server; contact info.iowetea@gmail.com if the review team needs a hardware walkthrough or additional access.
```

The demo does not exercise real server pairing or VPN. If Play requests access
to those restricted functions, supply a reusable review server/account or a
hardware walkthrough and video in the console; do not describe the demo as
full coverage of those functions.

Complete the current App content questionnaires using the final signed build:

- **Data safety:** audit precise location used during setup, Wi-Fi details,
  username/account data, FCM registration token and device identifier, camera
  or backup files, and data sent through the app's WebView. Indicate purpose,
  sharing, encryption, retention and deletion from actual behavior. Do not
  submit a blanket “no data collected” answer without that audit.
- **Data deletion:** select account creation and supply the URL above; verify
  in-app Dashboard → Users → My Account → Delete Account.
- **VpnService:** declare secure remote access to the user's own home server;
  describe WireGuard encryption, traffic routing, any data handling, and the
  app's consent/disclosure screen. The VPN is part of core remote access.
- **Foreground service:** describe the app's `systemExempted` VPN coordinator
  and provide the requested demonstration. Check the merged manifest for any
  plugin-declared service types before filling the form.
- **Permissions:** explain camera use for Wi-Fi QR scanning, location for home
  address and home Wi-Fi recognition, notification permission for home alerts,
  and VPN consent for remote access. Match declarations to the final manifest.
- **Content rating / target audience:** answer the questionnaires from the
  real app and intended audience. The current project plan targets adults;
  confirm that choice in the console.
- **Ads and monetization:** answer from the actual release and business model.
  No advertising or payment SDK is declared in this Flutter app's pubspec,
  but the final web/server flows must also be checked.

## Before entering the URLs

`web-documents/privacy-policy.html` was rewritten on 2026-10-27 for the
current app, home server and linked services. Check it against the final signed
build and the answers in both stores' privacy questionnaires before submission.
`support.html` is new in this change and must be published before its URL is
entered. Verify all three links in a private browser window after publishing.

## Official references

- [Create app and listing fields](https://support.google.com/googleplay/android-developer/answer/9859152)
- [Choose a category and tags](https://support.google.com/googleplay/android-developer/answer/9859673)
- [Listing graphics](https://support.google.com/googleplay/android-developer/answer/9866151)
- [Sign-in details for review](https://support.google.com/googleplay/android-developer/answer/9859455)
- [Data safety definitions](https://support.google.com/googleplay/android-developer/answer/10787469)
- [VPN policy](https://support.google.com/googleplay/android-developer/answer/12564964)
- [Foreground service declaration](https://support.google.com/googleplay/android-developer/answer/13392821)
- [Account deletion](https://support.google.com/googleplay/android-developer/answer/13327111)
