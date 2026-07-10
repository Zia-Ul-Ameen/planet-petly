// ─────────────────────────────────────────────────────────────────────────────
// src/lib/config.ts
//
// Single source of truth for all brand constants, external URLs, and config
// values. All values are driven by .env.local so they can be updated without
// touching component code.
// ─────────────────────────────────────────────────────────────────────────────

export const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME ?? "Planet Petly";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://planetpetly.com";

// ─── Contact ─────────────────────────────────────────────────────────────────
export const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@planetpetly.com";

// ─── External Links ──────────────────────────────────────────────────────────
export const KICKSTARTER_URL =
  process.env.NEXT_PUBLIC_KICKSTARTER_URL ??
  "https://www.kickstarter.com/projects/planetpetlyofficial/planetpetly-wall-mounted-multi-roll-poop-bag-dispenser-0?ref=3mibxs";

export const YOUTUBE_URL =
  process.env.NEXT_PUBLIC_YOUTUBE_URL ??
  "https://youtu.be/9ZxLcM9XxwY?si=4I6eOJx3h8gUCGZ1";

export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/planetpetly";

export const FACEBOOK_URL =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ??
  "https://www.facebook.com/profile.php?id=61583994294451";

export const TIKTOK_URL =
  process.env.NEXT_PUBLIC_TIKTOK_URL ??
  "https://www.tiktok.com/@planetpetly.com?_r=1&_t=ZS-94UFqTFHEAS";

// ─── Social links array (consumed by Footer & JsonLd) ────────────────────────
export const SOCIAL_LINKS = [
  { label: "Instagram", href: INSTAGRAM_URL },
  { label: "Facebook", href: FACEBOOK_URL },
  { label: "TikTok", href: TIKTOK_URL },
] as const;

// ─── Contact form API ────────────────────────────────────────────────────────
export const FORM_API_URL =
  process.env.NEXT_PUBLIC_FORM_API_URL ??
  "https://planetpetly.com/api/submit-form.php";

// ─── Analytics ───────────────────────────────────────────────────────────────
export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "887782824304159";
