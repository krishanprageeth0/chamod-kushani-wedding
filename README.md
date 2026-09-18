# 💍 Chamod & Kushani — Luxury Digital Wedding Invitation

A digital wedding invitation web application featuring a deep crimson/maroon & gold aesthetic, interactive 3D wax seal envelope animation, romantic background audio, real-time countdown, celebration timeline, couple gallery, attire color palette, Google Maps directions, smart RSVP portal, and free Google Sheets integration.

---

## 🌟 Key Features

1. **Interactive Wax Seal Envelope Screen**:
   - 3D SVG Envelope in deep velvet maroon with an authentic golden wax seal monogram (**C & K**).
   - "Tap Envelope to Open" animation: Seal breaks and flap opens fluidly.
   - Sparkling gold particles and swaying botanical corner leaves.
   - Personalized guest invitations: Pass `?guest=Guest+Name` in the URL to show their name directly on the envelope and invitation!

2. **Ambient Romantic Music**:
   - Plays a romantic piano serenade (`public/audio/background.mp3`) with floating play/pause/mute audio controller.

3. **Hero & Ceremonial Announcement**:
   - Couple: **Chamod Pathegama Widanagamage & Kushani Amarasinghe**
   - Elegant cursive calligraphy (`Mea Culpa`), serif (`Cinzel Decorative`, `Cormorant Garamond`), and clean modern typography (`Montserrat`).
   - 1-Click "Add to Calendar" button (Google Calendar & iCal).

4. **Live Real-Time Countdown**:
   - Live Days, Hours, Minutes, Seconds countdown to **October 17, 2026, 6:00 PM**.

5. **Celebration Sequence (Order of the Evening)**:
   - 06:00 PM — Welcome & Arrival
   - 06:30 PM — Grand Couple Entry
   - 07:30 PM — Bar Open & Toasts
   - 08:00 PM — Buffet Open
   - 09:30 PM — Dance Floor Open
   - 11:00 PM — Surprise for Guests

6. **Couple Photo Gallery**:
   - Romantic portraits in luxury gold filigree frames with interactive lightbox zoom modal.

7. **Wedding Theme & Attire Guide**:
   - Live color palette swatches extracted from `color.jpeg`:
     - **Deep Crimson / Maroon** (`#85182a`) — Main Theme
     - **Coral Orange** (`#e25f38`)
     - **Bright Fuchsia** (`#c71f5c`)
     - **Sunset Pink** (`#e8829c`)
     - **Rose Red** (`#c82d56`)

8. **Venue & Directions**:
   - Summerfield Hotel details with 1-click Google Maps navigation and direct phone dial buttons.

9. **Smart RSVP Portal + Free Google Sheets Integration**:
   - Full Name, Phone, Attendance Status, Guests Count, Meal Preferences, and Warm Wishes.
   - Confetti burst on submission + "RSVP Confirmed / Seat Secured!" modal.
   - Direct real-time recording to your personal Google Sheet (see `GOOGLE_SHEETS_SETUP.md`).

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## ☁️ How to Deploy to Vercel (100% Free)

### Option 1: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Via GitHub & Vercel Dashboard (Easiest)
1. Push this project folder to a new GitHub repository.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** > **"Import"** your GitHub repository.
4. Framework Preset: **Vite** (detected automatically).
5. Click **"Deploy"**! Your wedding invitation will be live worldwide in less than 60 seconds with a free `.vercel.app` URL and free SSL!
