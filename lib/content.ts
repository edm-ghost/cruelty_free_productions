// All placeholder text and data for the EDM Ghost Production website

export const site = {
  name: "SPECTRA",
  tagline: "Ghost Production",
  email: "bookings@spectrabeats.com",
  phone: "+1 (555) 000-0000",
  location: "Los Angeles, CA",
  socials: {
    instagram: "#",
    twitter: "#",
    soundcloud: "#",
    youtube: "#",
  },
};

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

export const hero = {
  eyebrow: "Premium EDM Ghost Production",
  headline: "Your Sound.\nOur Production.",
  subtext:
    "Studio-quality EDM tracks delivered in 14 days — fully exclusive, royalty-free, ready to release under your name. From future bass to techno, we handle every layer.",
  cta_primary: "Get a Free Quote",
  cta_secondary: "Hear the Work",
  stats: [
    { value: "500+", label: "Tracks Delivered" },
    { value: "200+", label: "Artists Served" },
    { value: "50+", label: "Chart Placements" },
    { value: "100%", label: "Exclusive Rights" },
  ],
};

export const services = [
  {
    icon: "Music2",
    title: "Ghost Production",
    description:
      "Full original tracks from concept to master — melody, arrangement, sound design, mix, and master. Delivered in stems + mixdown. You own 100% of the rights.",
    features: ["Stems + project file", "2 revisions included", "Genre-matched sound design", "14-day delivery"],
  },
  {
    icon: "Sliders",
    title: "Mixing & Mastering",
    description:
      "Get your existing session sounding polished and commercial-ready. We mix in the style of your reference tracks and master for streaming platforms.",
    features: ["Streaming-ready loudness", "Reference track matching", "48hr turnaround", "Unlimited minor revisions"],
  },
  {
    icon: "Package",
    title: "Sample Packs",
    description:
      "Custom sample packs built around your brand. Signature loops, one-shots, FX, and MIDI — crafted to match your style for consistent releases.",
    features: ["100% royalty-free", "Custom genre-matching", "WAV + MIDI included", "Exclusive or non-exclusive"],
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Send Your Brief",
    description:
      "Fill out our intake form with your genre, reference tracks, BPM range, vibe, and any notes. The more detail, the better the result.",
  },
  {
    step: "02",
    title: "We Produce",
    description:
      "Our producers get to work crafting your track from scratch. You'll receive a preview within 7 days for feedback before the final delivery.",
  },
  {
    step: "03",
    title: "Receive & Release",
    description:
      "Get your stems, mixdown, and project file. Full ownership transfers to you — release it, sell it, or perform it as your own.",
  },
];

export const portfolio = [
  {
    title: "Neon Cascade",
    genre: "Future Bass",
    bpm: 140,
    key: "F# Minor",
    description: "Lush supersaws, emotional chord progressions, and a euphoric drop. Delivered for a Spotify-signed artist.",
    soundcloudUrl: null, // placeholder
    plays: "82K",
  },
  {
    title: "Void Protocol",
    genre: "Dark Techno",
    bpm: 138,
    key: "A Minor",
    description: "Industrial percussion, hypnotic bassline, and a driving acid sequence. Built for an underground Berlin label.",
    soundcloudUrl: null,
    plays: "61K",
  },
  {
    title: "Solar Rush",
    genre: "Progressive House",
    bpm: 126,
    key: "G Major",
    description: "Mainstage-ready progressive house with sweeping pads, punchy drums, and a peak-time build.",
    soundcloudUrl: null,
    plays: "114K",
  },
];

export const pricing = [
  {
    tier: "Starter",
    price: "$350",
    per: "per track",
    description: "Perfect for artists just getting started with ghost production.",
    features: [
      "Full original track (3–5 min)",
      "Mixdown + master",
      "Stereo WAV delivery",
      "1 revision round",
      "21-day delivery",
      "Full exclusive rights",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    tier: "Pro",
    price: "$650",
    per: "per track",
    description: "Our most popular package — everything you need for a professional release.",
    features: [
      "Full original track (3–6 min)",
      "Mixdown + master",
      "Stems + project file",
      "2 revision rounds",
      "14-day delivery",
      "Full exclusive rights",
      "Cover art brief (add-on)",
    ],
    cta: "Book Pro",
    highlighted: true,
  },
  {
    tier: "Elite",
    price: "$1,200",
    per: "per track",
    description: "For serious artists who demand label-level quality and fast turnaround.",
    features: [
      "Full original track (3–8 min)",
      "Mixdown + master",
      "Stems + project file",
      "Unlimited revisions",
      "7-day delivery",
      "Full exclusive rights",
      "VIP producer access",
      "Priority support",
    ],
    cta: "Go Elite",
    highlighted: false,
  },
];

export const faq = [
  {
    question: "Who owns the track after I purchase?",
    answer:
      "You do — 100%. Upon delivery and full payment, all rights transfer to you. You can release it under your name, sell it, license it, or perform it live without any royalties or credits owed to us.",
  },
  {
    question: "What genres do you produce?",
    answer:
      "We specialize in Future Bass, Progressive House, Melodic Techno/House, Dark Techno, Drum & Bass, Dubstep, and Trance. If your genre isn't listed, reach out — we'll let you know if we can accommodate it.",
  },
  {
    question: "How do I provide references and direction?",
    answer:
      "After booking, you'll fill out a detailed brief form where you provide reference tracks, BPM range, key, vibe, and any specific sounds you want. The more information, the better the outcome.",
  },
  {
    question: "What if I don't like the track?",
    answer:
      "Revision rounds are included in every package. If after revisions you're still not satisfied, we offer a partial refund or credit toward a future project — we want you to be genuinely happy with the result.",
  },
  {
    question: "Do you offer bundles or monthly packages?",
    answer:
      "Yes. If you need consistent output (e.g., 2–4 tracks/month), we offer retainer pricing with better rates and priority slots. Contact us directly to discuss a custom deal.",
  },
  {
    question: "What format will I receive my files in?",
    answer:
      "Standard delivery includes a 24-bit WAV mixdown and master. Pro and Elite tiers include stems (grouped and individual) and the original project file in your DAW of choice (Ableton, FL Studio, Logic, or Bitwig).",
  },
];

export const contact = {
  heading: "Let's Build Something",
  subtext: "Ready to elevate your sound? Send us your brief and we'll get back to you within 24 hours.",
  info: [
    { icon: "Mail", label: "Email", value: "bookings@spectrabeats.com" },
    { icon: "Clock", label: "Response Time", value: "Within 24 hours" },
    { icon: "MapPin", label: "Based In", value: "Los Angeles, CA" },
  ],
  genres: ["Future Bass", "Progressive House", "Techno", "Drum & Bass", "Trance", "Dubstep", "Melodic House", "Other"],
};
