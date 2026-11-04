/* -------------------------------------------------------------------------
   SAFE ARMOR — save website form submissions into a Google Sheet
   (for later; the website works without this)

   1. Create a Google Sheet (e.g. "Safe Armor — Website Enquiries").
   2. Extensions → Apps Script → paste this file → Save.
   3. Project Settings → Script properties → add  TOKEN = <a secret word>.
   4. Deploy → New deployment → Web app
        Execute as: Me   ·   Who has access: Anyone
      Copy the web-app URL.
   5. Netlify → Site configuration → Environment variables:
        SHEETS_WEBHOOK_URL = <web-app URL>
        SHEETS_TOKEN       = <the same secret word>
      Then redeploy. Quote requests and enquiries now arrive as rows,
      in two tabs: "Quote requests" and "Enquiries".
   ------------------------------------------------------------------------- */
function doPost(e) {
  var data = JSON.parse(e.postData.contents || "{}");
  var expected = PropertiesService.getScriptProperties().getProperty("TOKEN");
  if (expected && data.token !== expected) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: "unauthorised" })).setMimeType(ContentService.MimeType.JSON);
  }
  delete data.token;

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var tab = data.form === "quote-request" ? "Quote requests" : "Enquiries";
    var sheet = ss.getSheetByName(tab) || ss.insertSheet(tab);
    var headers = sheet.getLastColumn() ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : [];
    Object.keys(data).forEach(function (key) {
      if (headers.indexOf(key) === -1) { headers.push(key); sheet.getRange(1, headers.length).setValue(key).setFontWeight("bold"); }
    });
    sheet.appendRow(headers.map(function (h) { return data[h] !== undefined ? data[h] : ""; }));
  } finally {
    lock.releaseLock();
  }
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
