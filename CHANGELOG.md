# Changelog

## 1.2.1 - 2026-11-03

- Correct backup retention on public pages (tsk-493): the privacy policy no longer says a new backup replaces the archive kept on the home server. It now says every backup the home owner creates stays on the home server until the owner deletes it or resets the home server, a new backup does not replace earlier ones, and downloaded or copied backups are controlled by whoever holds them. Its "Last updated" date moves to 3 November 2026. The account-deletion page now says an older account copy can remain in a backup "until the home owner deletes that backup or resets the home server" instead of "until that backup is replaced or deleted". No other claim, figure or processor changed. Published by GitHub Pages after merge.

## 1.2.0 - 2026-11-02

- Name IOweTea features instead of the services under them on public pages (tsk-473): the privacy policy no longer names Home Assistant, AdGuard or WireGuard ("device control and VPN access", "IOweTea can use a VPN", "the home server's DNS filtering service", "an encrypted VPN tunnel", "your device-control login and credentials"), and the account-deletion page lists "Your home device-control login and its tokens". No claim about collection, sharing, retention, deletion, figures, outside processors or the "Last updated" date changed; the wording is flagged for owner review. Published by GitHub Pages after merge.
- Store listing descriptions in `store/google-play/CONSOLE.md` and `store/app-store/CONNECT.md` say "encrypted VPN" instead of "encrypted WireGuard VPN"; the owner-only VpnService and export-compliance notes keep WireGuard on purpose, because they must describe the actual implementation. `CONTEXT.md` gains a naming note and lists `account-deletion.html`.
- Explains the reported discrepancy: the live pages matched `main`, which already held the October 2026 policy below; an outdated local checkout had hidden it. Checks: both documents grep clean for the names and diff against `main` as wording-only; the live pages must be re-checked after merge.
- First versioned here (pushed to `main` outside a release on 2026-10-27, already live):
  - Replace the 2022 privacy-policy template with a policy for the Android and
    iOS app, home server, VPN, notifications, map and account deletion.
  - Clarify that an older backup can retain an account copy after account
    deletion, and update both store worksheets.
  - Add 7-inch tablet, 10-inch tablet and Chromebook screenshot sets for Google
    Play, with reproducible large-screen captures.
  - Add App Store product page header and search-result artwork, with a
    reproducible generator and App Store Connect upload notes.
  - Add one iPhone Duo screenshot set at the accepted inner-display size for its
    single App Store Connect upload area.

- Presentation-only, no version change (shipped with tsk-474 by owner approval): `web-documents/account-deletion.html` is now a full HTML document (doctype, `lang="en"`, charset and viewport meta, title, a small readable stylesheet, `<main>` wrapper) and its section headings are `<h2>` under the single `<h1>`. The deletion steps, what is deleted, backup retention and contact wording are unchanged. Already on `main` (c1f3a993) and published by GitHub Pages. To roll back, revert c1f3a993.

## 1.1.0 - 2026-10-25

- Add Google Play listing artwork and App Store iPhone/iPad screenshot sets from
  the disposable IOweTea demo, plus a reproducible capture script.
- Add Google Play and App Store Connect worksheets with listing copy, URLs,
  review instructions, disclosure checkpoints and official references.
- Add a public support contact page for store support URLs.
- The privacy policy remains the old template and needs a product-specific
  rewrite before either store submission.

## 1.0.0 - 2026-10-12

- Add the public account-deletion page `web-documents/account-deletion.html` (`https://xiki808.github.io/iowetea-assets/web-documents/account-deletion.html`), the Google Play account-deletion URL. It explains deleting an account in the app (Dashboard > Users > My Account > Delete Account), what is deleted, and how to request deletion without the app, and links to the privacy policy. Published by GitHub Pages after merge; not linked from the web app.
- First versioned release of this repo: it has no version file, so the version lives only in this heading.
