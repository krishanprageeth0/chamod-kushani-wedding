# 📋 Free Google Sheets Setup for Wedding RSVP

Follow these 4 simple steps to save guests' RSVP submissions directly to your own Google Sheet for **100% FREE** with no server costs:

---

### Step 1: Create a Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it: **"Chamod & Kushani Wedding RSVPs"**.
3. In row 1, add these column headers:
   - **A1**: `Timestamp`
   - **B1**: `Full Name`
   - **C1**: `Phone`
   - **D1**: `Attendance`
   - **E1**: `Guests Count`
   - **F1**: `Dietary Preference`
   - **G1**: `Warm Wishes / Message`

---

### Step 2: Add the Google Apps Script
1. In the Google Sheet, click **Extensions** > **Apps Script**.
2. Delete any code inside `Code.gs` and paste this code:

```javascript
function doGet(e) {
  return ContentService
    .createTextOutput("Wedding RSVP Service is Active!")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create styled headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "දිනය හා වේලාව (Timestamp)",
        "නම (Full Name)",
        "දුරකථන අංකය (Phone)",
        "සහභාගී වීම (Attendance)",
        "පැමිණෙන ගණන (Guests Count)",
        "ආහාර කැමැත්ත (Dietary)",
        "සුබ පැතුම් / පණිවිඩය (Message)"
      ]);
      sheet.getRange(1, 1, 1, 7).setBackground("#85182a").setFontColor("#fdfbf7").setFontWeight("bold");
    }
    
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" }),
      data.fullName || "",
      data.phone || "",
      data.attendance || "Attending",
      data.guestsCount || "1",
      data.dietary || "None",
      data.message || ""
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

### Step 3: Deploy as Web App
1. Click the blue **Deploy** button at top right > **New deployment**.
2. Click the gear icon next to "Select type" > choose **Web app**.
3. Set the fields:
   - **Description**: `Wedding RSVP Webhook`
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone` *(Crucial so guests can submit without login)*
4. Click **Deploy** and authorize access if prompted.
5. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/AKfycbx.../exec`).

---

### Step 4: Add URL to your Wedding Project
1. Open `src/data/weddingConfig.js` in your project.
2. Paste the URL into `googleSheetScriptUrl`:

```javascript
googleSheetScriptUrl: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
```

3. Save the file! That's it! Every time someone submits an RSVP, it will instantly appear in your Google Sheet row by row!
