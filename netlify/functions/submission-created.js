/* -------------------------------------------------------------------------
   OPTIONAL BACKEND HOOK — runs automatically after every Netlify Forms
   submission (Netlify calls a function with this exact name).

   It does nothing until you set an environment variable in Netlify:
     SHEETS_WEBHOOK_URL  = the Google Apps Script web-app URL
     SHEETS_TOKEN        = any secret word (same one saved in the script)
   See backend/google-apps-script/Code.gs and README.md.
   No packages needed (uses the built-in fetch of Node 18+).
   ------------------------------------------------------------------------- */
exports.handler = async (event) => {
  const url = process.env.SHEETS_WEBHOOK_URL;
  let payload;
  try { payload = JSON.parse(event.body || "{}").payload; } catch (e) { payload = null; }
  if (!url || !payload) return { statusCode: 200, body: "No backend connected" };

  const data = Object.assign({}, payload.data || {});
  ["ip", "user_agent", "referrer", "company-website"].forEach((k) => delete data[k]);
  const row = Object.assign({ form: payload.form_name, submitted_at: payload.created_at, token: process.env.SHEETS_TOKEN || "" }, data);

  try {
    const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(row) });
    return { statusCode: 200, body: "Forwarded (" + res.status + ")" };
  } catch (err) {
    console.error("Sheets forward failed:", err);
    return { statusCode: 200, body: "Forward failed" };
  }
};
