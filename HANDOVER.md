# Website handover

Live website: https://antivirus-support.pages.dev/
Source repository: https://github.com/sahuveshali8-rgb/antivirus-support
Cloudflare project: antivirus-support
Cloudflare dashboard: https://dash.cloudflare.com/ecb0ab7280261ccb56a06950fac4437e/pages/view/antivirus-support

## Where the website is stored

Cloudflare Dashboard > Compute > Workers & Pages > antivirus-support > Deployments.
Cloudflare hosts uploaded versions of the site. Edit the original files on your computer, then upload a complete new version. The GitHub repository is a separate source backup; GitHub edits do not automatically deploy in this Direct Upload setup.

## Files

- index.html: page text, form fields, navigation, privacy notice and form fallback address.
- style.css: layout, colours, typography and mobile styles.
- result.css: submission confirmation and error styles.
- app.js: form submission endpoint, success/error handling and chat buttons.
- chat-config.js: public tawk.to widget URL.

No build command, npm installation, server or database is needed. Keep all five files together.

## Update the existing website

1. Extract deploy.zip and keep an unchanged backup.
2. Edit the relevant files in a text/code editor. Keep file names unchanged.
3. Select all five website files and compress them into a ZIP. index.html must be directly at the ZIP root, not inside an extra folder. Always upload the complete website, not only the changed file.
4. Sign in to the client-owned Cloudflare account.
5. Open Compute > Workers & Pages > antivirus-support.
6. In Deployments, select Create a new deployment.
7. Select Production to update the customer-facing website, or Preview to test first.
8. Upload the new ZIP, wait until all five files are uploaded, then select Deploy site / Save and Deploy as shown.
9. Wait for success, open https://antivirus-support.pages.dev/ and refresh. Test navigation, mobile layout, chat and a clearly labelled test enquiry.
10. Save the same updated source files in GitHub so the backup matches the live deployment.

Reusing this project preserves the public website address. Do not create a new project for routine changes. A previous deployment can be restored using Cloudflare's rollback controls when available.

## Chat

Sign in at https://dashboard.tawk.to/ and select the Antivirus Support property to answer chats. Widget appearance and agent availability are managed there. Do not put account passwords in site files.

## Form email

Recipient: sahuveshali8@gmail.com. FormSubmit processes name, email, optional phone and issue details. No passwords or activation keys are requested.

The local preview form was activated and its test messages reached Gmail (Spam). The public domain activation email arrived and its Activate Form link was opened, but the resulting activation page was blocked from automated verification. Public-domain delivery remains UNVERIFIED at handover. The owner should finish/check the activation email titled 'Action Required: Activate FormSubmit on https://antivirus-support.pages.dev/', then submit a test from the live site and check Inbox and Spam.

If changing the recipient email, update it in BOTH index.html and app.js, as well as displayed contact/fallback text, and complete verification for the new recipient. An accepted submission does not guarantee arrival in Inbox.

## Deployment archive

deploy.zip contains only the five public website files. This handover document is separate and does not need uploading. The page uses generic independent support branding rather than claiming to be an antivirus publisher's official site.

Official upload instructions: https://developers.cloudflare.com/pages/get-started/direct-upload/
