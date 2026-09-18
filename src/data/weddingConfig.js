export const weddingConfig = {
  groom: {
    fullName: "Chamod Pathegama Widanagamage",
    shortName: "Chamod",
    phone: "+94 77 000 0000",
    displayPhone: "077 000 0000"
  },
  bride: {
    fullName: "Kushani Amarasinghe",
    shortName: "Kushani",
    phone: "+94 71 000 0000",
    displayPhone: "071 000 0000"
  },
  monogram: "K & C",
  sealInitials: "K&C",
  eventDate: "Saturday, October 17, 2026",
  eventTime: "6:00 PM Onwards",
  eventTimestamp: "2026-10-17T18:00:00+05:30",
  rsvpDeadline: "October 1, 2026",
  
  venue: {
    name: "Summerfield Hotel",
    subName: "Banquet & Grand Reception Hall",
    address: "Summerfield’s Restaurant & Reception Hall, Sri Lanka",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Summerfield+Hotel",
    navigationQuery: "Summerfield Hotel, Sri Lanka"
  },

  timeline: [
    {
      time: "06:00 PM",
      title: "Welcome & Arrival",
      description: "Welcoming cherished family, friends, and honored guests with festive hospitality.",
      icon: "Sparkles",
      color: "from-palette-crimson to-palette-rose"
    },
    {
      time: "06:30 PM",
      title: "Grand Couple Entry",
      description: "The grand entrance of Kushani & Chamod to begin their magical celebration together.",
      icon: "HeartHandshake",
      color: "from-gold to-palette-coral"
    },
    {
      time: "07:30 PM",
      title: "Bar Open & Toasts",
      description: "Raising a glass of celebratory cheer with fine spirits, cocktails, and heartwarming toasts.",
      icon: "Wine",
      color: "from-palette-coral to-palette-sunset"
    },
    {
      time: "08:00 PM",
      title: "Buffet Open",
      description: "An indulgent culinary journey featuring exquisitely prepared luxury cuisine and desserts.",
      icon: "UtensilsCrossed",
      color: "from-gold to-palette-crimson"
    },
    {
      time: "09:30 PM",
      title: "Dance Floor Open",
      description: "The celebration reaches its crescendo! Step onto the dance floor and dance the night away.",
      icon: "Music",
      color: "from-palette-fuchsia to-palette-rose"
    },
    {
      time: "11:00 PM",
      title: "Surprise for Guests",
      description: "A spectacular midnight surprise and heartfelt farewell thoughtfully curated for everyone.",
      icon: "Gift",
      color: "from-gold to-palette-sunset"
    }
  ],

  colors: [
    {
      name: "Deep Crimson",
      hex: "#85182a",
      role: "Main Theme & Attire Accent",
      description: "Rich, romantic velvet maroon representing royal devotion."
    },
    {
      name: "Coral Orange",
      hex: "#e25f38",
      role: "Warm Sunset Accent",
      description: "Radiant warmth adding energy and vibrancy to the evening."
    },
    {
      name: "Bright Fuchsia",
      hex: "#c71f5c",
      role: "Floral Radiance",
      description: "Lively floral burst complementing the crimson aesthetic."
    },
    {
      name: "Sunset Pink",
      hex: "#e8829c",
      role: "Romantic Blush",
      description: "Soft elegance creating gentle balance and harmony."
    },
    {
      name: "Rose Red",
      hex: "#c82d56",
      role: "Celebration Tint",
      description: "Deep passionate tones celebrating boundless love."
    }
  ],

  photos: {
    hero: "/images/01.jpeg?v=3",
    portrait: "/images/02.jpeg?v=3",
    palette: "/images/color.jpeg"
  },

  audio: {
    src: "/audio/background.mp3",
    title: "Romantic Piano Serenade"
  },

  quotes: {
    hero: "Two lives, two hearts, joined together in friendship, united forever in love.",
    stars: "Written in the Stars • Together Forever",
    thankYou: "We are deeply honored to have you celebrate the beginning of our new chapter."
  },

  // Google Sheets Webhook configuration
  // Auto-logs guest RSVPs directly to Chamod & Kushani Wedding RSVPs spreadsheet
  googleSheetScriptUrl: "https://script.google.com/macros/s/AKfycbwqcUOHe01GjRp-g4fUVqISr3zoL_iQDBrnAY6EtZWdXC2y0jqUyR4Y9j_GD1NZSvh-7w/exec"
};
