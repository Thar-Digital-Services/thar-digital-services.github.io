/**
 * Google Apps Script — contact form mailer for thardigital.in
 *
 * Setup:
 *   1. Open https://script.google.com → New project
 *   2. Paste this file in as Code.gs
 *   3. Update RECIPIENT below if needed
 *   4. Deploy → New deployment → Type: Web app
 *        Execute as: Me (your-account@thardigital.in)
 *        Who has access: Anyone
 *   5. Copy the Web app URL — paste it into .env.local as
 *      NEXT_PUBLIC_CONTACT_FORM_URL=<url>
 *
 * Re-deploy after edits: Deploy → Manage deployments → pencil icon → New version.
 */

const RECIPIENT = 'tech@thardigital.in';
const CC = 'sunnysinghtanwar2@gmail.com';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (data.website) {
      return json({ success: true });
    }

    const required = ['name', 'email', 'company', 'message'];
    for (const f of required) {
      if (!data[f] || String(data[f]).trim().length === 0) {
        return json({ success: false, error: `Missing field: ${f}` }, 400);
      }
    }

    const subject = `New enquiry from ${data.name} (${data.company})`;
    const body =
      `New contact form submission from thardigital.in:\n\n` +
      `Name:    ${data.name}\n` +
      `Email:   ${data.email}\n` +
      `Company: ${data.company}\n\n` +
      `Message:\n${data.message}\n`;

    MailApp.sendEmail({
      to: RECIPIENT,
      cc: CC,
      subject,
      body,
      replyTo: data.email,
      name: 'Thar Digital Website',
    });

    return json({ success: true });
  } catch (err) {
    return json({ success: false, error: String(err) }, 500);
  }
}

function doGet() {
  return json({ success: false, error: 'POST only' }, 405);
}

function json(payload, _status) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
