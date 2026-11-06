/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
  /** Optional on-page H1 override (SEO-only routes). */
  h1?: string;
  /** Optional second H1 line (homepage hero accent). */
  h1Accent?: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'War Thunder Cheats — PC aimbot, ESP & setup guides',
    description:
      'Compare War Thunder PC cheat tiers, read setup guides, and check secure options — aimbot, vehicle ESP, radar, and support at cheatswarthunder.net.',
    h1: 'War Thunder Cheats',
  },
  '/products/war-thunder/': {
    title: 'War Thunder PC cheats — Lite, Pro, Elite & utilities',
    description:
      'Shop War Thunder PC cheats: Lite ESP, Pro aimbot, Elite suite, HWID tools and UGC — compare features and checkout at cheatswarthunder.net.',
    h1: 'War Thunder PC cheats — compare tiers and utilities',
  },
  '/products/war-thunder/lite/': {
    title: 'War Thunder Lite Cheats | ESP, Radar & vehicle info',
    description:
      'War Thunder Lite cheats for PC — vehicle ESP, map overlays, and radar-style awareness without aimbot. Stream-proof options and presets on cheatswarthunder.net.',
  },
  '/products/war-thunder/pro/': {
    title: 'War Thunder Pro Cheats | Aimbot, smooth aim & ESP',
    description:
      'War Thunder Pro cheats add aim automation on top of Lite: configurable aim assistance, smoothness, and combat ESP for PC — conservative portal defaults you can tune on cheatswarthunder.net.',
  },
  '/products/war-thunder/elite/': {
    title: 'Elite War Thunder Cheats | Aimbot, ESP & extras',
    description:
      'Elite tier adds advanced combat tools, full ESP layers, and priority update notes for War Thunder on PC — compare modules before checkout.',
  },
  '/products/war-thunder/hwid-spoofer/': {
    title: 'HWID Spoofer for War Thunder PC | hardware tools',
    description:
      'HWID tools for War Thunder on PC — follow the portal guide for hardware identity resets. Read compatibility and risk notes before checkout at cheatswarthunder.net.',
  },
  '/products/war-thunder/ugc/': {
    title: 'UGC tools | War Thunder account appeals & cases',
    description:
      'UGC (Unban & Governance Control) helps organize ban appeals, dispute workflows, and case tracking for War Thunder account issues — not a guaranteed unban.',
  },
  '/products/war-thunder/unlock-all/': {
    title: 'Vehicle & hangar preview tools — local client previews',
    description:
      'Local preview utilities for War Thunder on PC — cosmetic and vehicle previews with your client. Compare scope on the product hub at cheatswarthunder.net.',
  },
  '/products/war-thunder/utilities/': {
    title: 'War Thunder cheat utilities — HWID, UGC & previews',
    description:
      'Utilities hub: HWID tools, appeal workflows (UGC), and local preview helpers for War Thunder PC — compare before checkout.',
    h1: 'Compare War Thunder utilities — HWID, UGC & previews',
  },
  '/blog/': {
    title: 'War Thunder guides — aimbot, ESP, tiers & patch checks',
    description:
      'Guides for War Thunder PC cheats: aim and ESP setup, Lite vs Pro, test drive practice, and what to verify after game updates.',
    h1: 'War Thunder cheat guides — setup, tiers and patches',
  },
  '/forum/': {
    title: 'War Thunder forum — loader, configs & discussion',
    description:
      'Community threads on loader setup, aim configs, product questions and patch-day checks — backed by guides on cheatswarthunder.net.',
    h1: 'Forum — loader help, configs and War Thunder discussion',
  },
  '/faq/': {
    title: 'FAQ — War Thunder tiers, bans, loader & checkout',
    description:
      'FAQ on Lite, Pro and Elite tiers, aimbot, ESP, radar, HWID tools, account appeals, bans and loader setup at cheatswarthunder.net.',
    h1: 'FAQ — War Thunder cheats tiers, bans, loader help and checkout',
  },
  '/terms/': {
    title: 'Terms — licenses, delivery, refunds & account risk',
    description:
      'Terms for buying digital War Thunder software on cheatswarthunder.net: license use, delivery, refunds, and risks when using third-party tools with online games.',
    h1: 'Terms — licenses, delivery, refunds & account risk',
  },
  '/privacy/': {
    title: 'Privacy — analytics, cookies & checkout data',
    description:
      'How cheatswarthunder.net uses analytics, cookies, and contact or checkout-related data for support and referrals. Read the full policy before you buy.',
    h1: 'Privacy — analytics, cookies, checkout and contact data',
  },
  '/about/': {
    title: 'About — War Thunder tier guides, loader help & updates',
    description:
      'Who we are: War Thunder PC cheat tier comparisons, setup guides, and support channels at cheatswarthunder.net — independent of Gaijin and publishers.',
    h1: 'About — War Thunder tier guides, loader help & updates',
  },
  '/support/': {
    title: 'Support — loader, HWID & checkout help | cheatswarthunder',
    description:
      'Get help with the loader, aim and ESP configs, HWID resets, and checkout — Discord and FAQ linked from cheatswarthunder.net.',
    h1: 'Support — loader, HWID, checkout & config help',
  },
  '/war-thunder-cheats/': {
    title: 'War Thunder cheats hub — PC tiers, features & checkout',
    description:
      'Overview of War Thunder PC cheat tiers, core features, and loader-focused notes. Compare options and checkout at cheatswarthunder.net.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}

/** Blog post `<title>` / meta description overrides (exact audit phrases). */
export const BLOG_POST_SEO: Record<string, Partial<PageSeoEntry>> = {
  'wt-radar': {
    title: 'War Thunder radar guide — range, spacing & callouts',
    description:
      'Use radar overlays thoughtfully in War Thunder: range habits, spacing, and squad callouts for Air and Ground — guide at cheatswarthunder.net.',
  },
  'wt-stream-proof': {
    title: 'Stream-safe overlays — hiding ESP from OBS & capture',
    description:
      'Test OBS, Game Bar, and capture-card setups so viewers do not see overlays — checklist for War Thunder creators on cheatswarthunder.net.',
  },
  'wt-aimbot-ranked': {
    title: 'Ranked aim assistance — smoothness, lead & tiers',
  },
  'wt-launcher-troubleshooting': {
    title: 'Launcher issues on War Thunder PC — verify, repair & next steps',
    description:
      'When the War Thunder launcher or game files fail on PC: verify installs, repairs, and conflict checks — guide at cheatswarthunder.net.',
  },
};

/** Optional on-page H1 overrides (blog posts). */
export const BLOG_POST_PAGE_H1: Record<string, string> = {
  'wt-launcher-troubleshooting':
    'Launcher and file verification — War Thunder PC troubleshooting (War Thunder cheats)',
  'wt-stream-proof':
    'Stream-proof overlay setup — hiding ESP from OBS (War Thunder cheats)',
  'wt-test-drive-practice': 'Test Drive practice: tune settings before live matches (War Thunder cheats)',
  'wt-radar': 'War Thunder radar on PC — range habits, spacing and callouts',
};

export function getBlogPostSeo(slug: string, fallback: PageSeoEntry): PageSeoEntry {
  const override = BLOG_POST_SEO[slug];
  if (!override) return fallback;
  return {
    title: override.title ?? fallback.title,
    description: override.description ?? fallback.description,
  };
}

export function blogPostPageH1(slug: string, postTitle: string): string {
  return BLOG_POST_PAGE_H1[slug] ?? postTitle;
}

/** Layout `<title>` for blog posts; ranked override is used verbatim when under 60 chars. */
export function blogPostLayoutTitle(slug: string, postTitle: string, brand = 'War Thunder Cheats'): string {
  const override = BLOG_POST_SEO[slug]?.title;
  if (override && override.length <= 60) return override;
  if (override) return `${override.slice(0, 57).trim()}…`;
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${postTitle}${suffix}`.length <= max) return `${postTitle}${suffix}`;
  const trimmed = postTitle.slice(0, Math.max(20, max - suffix.length - 1)).trim();
  return `${trimmed}${suffix}`;
}
