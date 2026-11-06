import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

function expandFaqAnswer(answer: string, _faqId: string): string {
  if (!answer.includes('{{')) return answer;
  const slots: Record<string, string> = {
    ELITE: link('Elite tier', productPath('elite')),
    LITE: link('Lite (ESP)', productPath('lite')),
    PRO: link('Pro tier', productPath('pro')),
    PRODUCTS_HUB: link('War Thunder products', ROUTES.products),
    HWID: link('HWID spoofer', productPath('hwid-spoofer')),
    UGC: link('UGC', productPath('ugc')),
    SKIN: link('Hangar preview tools', productPath('unlock-all')),
    FAQ_PAGE: link('FAQ', ROUTES.faq),
    BLOG: link('War Thunder blog', ROUTES.blog),
  };
  return Object.entries(slots).reduce(
    (text, [key, html]) => text.replaceAll(`{{${key}}}`, html),
    answer,
  );
}

function withExpandedAnswers(items: SiteFaqItem[]): SiteFaqItem[] {
  return items.map((item) => ({ ...item, a: expandFaqAnswer(item.a, item.id) }));
}

const rawSiteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if War Thunder cheats are online?',
    a: a('The live status banner is on cheatswarthunder.net and in Discord #status. Check after War Thunder client updates.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Checkout on Zadeyo unlocks the portal with the loader and setup guide. Follow the guide before launching War Thunder.'),
  },
  {
    id: 'pricing',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'How much do War Thunder cheats cost?',
    a: a('Plans and prices are shown on the Zadeyo checkout screen. This site does not list a live dollar amount because offers can change.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party tools?',
    a: a('Yes—any modification carries enforcement risk. Read current status and accept the risk before use.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('War Thunder on Windows 10/11 64-bit through the supported PC client. Consoles are not covered here.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on tier and seller policy.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `{{PRODUCTS_HUB}} lists cheat tiers, {{HWID}}, {{UGC}}, and {{SKIN}} with feature summaries. Checkout uses the same Zadeyo link site-wide.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is vehicle ESP?',
    a: `Vehicle ESP shows aircraft and ground threats with distance and marker info. {{LITE}} covers awareness overlays. {{PRO}} and {{ELITE}} add aim assistance when listed.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'esp-vs-scripts',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aim assistance?',
    a: `ESP is informational. Aim assistance adjusts input—available on {{PRO}} and {{ELITE}} when the listing includes it. {{LITE}} stays awareness-only.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Which tier is ESP-only?',
    a: `{{LITE}} is awareness-focused: vehicle ESP, radar-style overlays, and map tools. {{PRO}} adds aim modules.`,
    scopes: ['lite'],
  },
  {
    id: 'which-tier-scripts',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Which tier includes aim assistance?',
    a: `{{PRO}} adds aim assistance on top of Lite. {{ELITE}} includes the full stack when slots and listings allow. {{LITE}} has no aim automation.`,
    scopes: ['pro'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do Lite, Pro, and Elite compare?',
    a: `Map awareness → {{LITE}}. Aim assistance → {{PRO}}. Full module set and extras → {{ELITE}}. Compare cheat pages or {{FAQ_PAGE}}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Why is Elite sometimes limited?',
    a: `Elite may cap users to keep support responsive. Check the status banner and Zadeyo listing before checkout.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can stream software capture my overlay?',
    a: `When stream-proof options exist, test OBS/Game Capture locally before going live. See {{BLOG}} for setup guides.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Are undetected cheats guaranteed?',
    a: a('No. Status is a point-in-time label. Stop when the banner shows updating or offline.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP safer than aim assistance?',
    a: a('ESP can be subtler, but both violate fair play rules when prohibited. Enforcement does not ignore ESP.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When do I need the HWID Spoofer?',
    a: `Use {{HWID}} when new accounts fail on one PC but work elsewhere. Account-only issues may need {{UGC}} instead.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-what',
    topic: 'products',
    icon: 'faqUgcWhat',
    q: 'What is UGC?',
    a: `{{UGC}} helps organize appeals and disputes—not a guaranteed unban.`,
    scopes: ['ugc'],
  },
  {
    id: 'skin-changer',
    topic: 'products',
    icon: 'faqSkinChanger',
    q: 'Do hangar previews change server unlocks?',
    a: `{{SKIN}} previews locally. Opponents see your real account. Included with {{ELITE}} when listed.`,
    scopes: ['unlock-all'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader injected into the game folder?',
    a: `Follow the portal guide—most builds keep files out of the War Thunder directory, but risk still exists. See {{PRODUCTS_HUB}}.`,
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Are Test Drive settings the same as paid cheats?',
    a: a('No. Test Drive is practice only. Online tools come from checkout tiers.'),
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do guides point for purchase?',
    a: `Guides link to tier pages and {{PRODUCTS_HUB}}. Checkout is always the Zadeyo link on buy buttons.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Where can I compare plans?',
    a: `Each tier page has feature tables. {{FAQ_PAGE}} aggregates common answers.`,
  },
  {
    id: 'who-lite',
    topic: 'plans',
    icon: 'faqWhoLite',
    q: 'Who should stay on Lite?',
    a: `Players who want overlays only. If you need aim assistance, buy {{PRO}}.`,
    scopes: ['lite'],
  },
  {
    id: 'who-pro',
    topic: 'plans',
    icon: 'faqWhoPro',
    q: 'Who should buy Pro?',
    a: `Players who want aim assistance with ESP. Confirm modules on Zadeyo.`,
    scopes: ['pro'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy Elite?',
    a: `Players who want every module when slots exist.`,
    scopes: ['elite'],
  },
  {
    id: 'eac-update',
    topic: 'safety',
    icon: 'faqEacUpdate',
    q: 'What should I do after a major patch?',
    a: a('Check cheatswarthunder.net and Discord #status. Reload the portal loader and use conservative settings.'),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a('Join Discord with order email, Windows build, and War Thunder client channel (Steam or standalone).'),
  },
  {
    id: 'zero-build-ranked',
    topic: 'plans',
    icon: 'faqZoomRanked',
    q: 'Do tiers work in Realistic Battles?',
    a: `Yes when the listing includes your mode. Always verify current support before queueing.`,
  },
  {
    id: 'zoom-cheat',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Which tier includes radar overlays?',
    a: `Radar-style tools ship on {{LITE}} and carry up through {{PRO}} and {{ELITE}} when listed.`,
    scopes: ['lite'],
  },
  {
    id: 'auto-farm',
    topic: 'scripts',
    icon: 'faqAutoFarm',
    q: 'Which tier has the most automation?',
    a: `Automation extras such as Triggerbot appear on {{ELITE}} when Zadeyo lists them—not assumed for every season.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What does private mean?',
    a: a('Private builds are maintained with per-user keys—not public downloads from random sites.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `See {{FAQ_PAGE}} for every topic or {{BLOG}} for long guides.`,
  },
];

export const siteFaqs: SiteFaqItem[] = withExpandedAnswers(rawSiteFaqs);

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'War Thunder cheats FAQ',
  subtitle: 'Filter by plans, ESP, aim assistance, products, setup and guides.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = ['all', 'plans', 'esp', 'safety', 'products', 'blog', 'setup'];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'Cheat FAQ',
  title: 'War Thunder questions',
  subtitle: 'Straight answers on ESP, aim assistance, bans and setup.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) => !f.scopes && ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-lite-vs-pro', 'compare-plans', 'undetected', 'eac-update'].includes(f.id),
  );

  const combined =
    kind === 'tier' ? [...scoped, ...tierCompare, ...general.slice(0, 8)] : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Should I reuse Test Drive tricks in ranked play?',
      a: a('Test Drive helps you practice. Online cheats require checkout tiers—keep those separate.'),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which tier matches this guide?',
      a: `Awareness topics → {{LITE}}. Aim topics → {{PRO}}. Full stack → {{ELITE}}.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Check the article date and live status banner. Discord #status has current build notes.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from the customer portal after checkout.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test in Test Drive first?',
      a: a('Yes—verify ESP range and aim smoothing before competitive modes.'),
    },
  ],
  Security: [
    {
      id: 'blog-sec-eac',
      topic: 'blog',
      icon: 'faqBlogSecEac',
      q: 'Does this article guarantee safety?',
      a: a('No article replaces the live banner. Stop if status shows offline or updating.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official documentation?',
    a: `Articles explain workflows and link to tiers. Zadeyo remains authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Open Discord with order email and article slug.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will these settings work next patch?',
    a: a('Re-check status after War Thunder updates. Reload presets instead of copying old files.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('radar')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which tier covers ESP from this article?',
      a: `{{LITE}} includes vehicle ESP overlays. {{PRO}} adds aim assistance.`,
    });
  }
  if (slug.includes('aim') || slug.includes('aimbot')) {
    slugHints.push({
      id: 'blog-slug-scripts',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which tier includes aim assistance?',
      a: `{{PRO}} and {{ELITE}} when listed. {{LITE}} is ESP-only.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('launcher')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this replace HWID or UGC products?',
      a: `Guides complement {{HWID}} and {{UGC}}—read product pages for realistic scope.`,
    });
  }

  return withExpandedAnswers([...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8));
}

export const compareRows = [
  { feature: 'Vehicle ESP & markers', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Threat distance readouts', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Radar-style overlay', icon: 'compareRadarHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Stream-friendly overlay mode', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'Configurable aim assistance', icon: 'compareAutoCombo' as const, lite: false, pro: true, elite: true },
  { feature: 'Smoothing & lead tuning', icon: 'compareSmoothAim' as const, lite: false, pro: true, elite: true },
  { feature: 'Ballistics helpers (if listed)', icon: 'compareTargetSelector' as const, lite: false, pro: true, elite: true },
  { feature: 'Triggerbot (if listed)', icon: 'compareAutoKillSteal' as const, lite: false, pro: false, elite: true },
  { feature: 'Advanced ESP layers (if listed)', icon: 'compareFullMapHack' as const, lite: false, pro: false, elite: true },
  { feature: 'Hangar preview tools (if listed)', icon: 'compareSkinChanger' as const, lite: false, pro: false, elite: true },
  { feature: 'Priority support (if listed)', icon: 'comparePriorityPatch' as const, lite: false, pro: false, elite: true },
  { feature: 'Cloud config backup', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];
