import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import { PRODUCT_GALLERY_IMAGES, SITE_CHEAT_IMAGES } from '../config/siteImages';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['wt-esp-setup', 'wt-lite-vs-pro', 'wt-radar', 'wt-patch-day'],
  pro: ['wt-aimbot-ranked', 'wt-aimbot-combat', 'wt-lite-vs-pro', 'wt-stream-proof'],
  elite: ['wt-elite-tier', 'wt-cheat-features', 'wt-esp-setup', 'wt-patch-day', 'buy-war-thunder-cheats'],
  'hwid-spoofer': ['wt-hwid-ban', 'wt-launcher-troubleshooting', 'wt-patch-day', 'wt-external-loader'],
  ugc: ['wt-launcher-troubleshooting', 'wt-hwid-ban', 'buy-war-thunder-cheats'],
  'unlock-all': ['wt-loadouts', 'wt-cheat-features', 'wt-stream-proof'],
};

const productBase = '/products/war-thunder/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on cheatswarthunder.net and Discord #status before purchase—especially after a War Thunder client or security update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select the War Thunder cheat tier or utility that matches your goal. Review the feature list on Zadeyo and this catalog before checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, PC platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the customer portal, current loader, and setup guide. Test in Test Drive or a low-stakes mode, load presets, then use online playlists when stable.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'War Thunder receives frequent updates. Confirm module availability on the live status panel at cheatswarthunder.net before you purchase or launch. Overlay behavior may differ in replays and spectator views after patches.';

const sharedLimitations =
  'Third-party software in War Thunder can violate the game terms of service and lead to enforcement action. You use this software at your own risk. Compatibility and availability can change after game, anti-cheat, or Windows updates without notice.';

const wtSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or Windows 11 (64-bit). Confirm any extra requirements on the Zadeyo product page before purchase.' },
  { icon: 'reqEpic', text: 'Current PC client of War Thunder with patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader setup when required by the portal guide.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and loader updates.' },
  { icon: 'reqCpu', text: 'Hardware that meets War Thunder system requirements for your graphics settings.' },
];

type GalleryKey = keyof typeof galleryRaw;

const galleryRaw = {
  gpAimbotEsp: {
    src: SITE_CHEAT_IMAGES[0].src,
    alt: SITE_CHEAT_IMAGES[0].alt,
    caption: 'Overlays & ESP',
    captionDesc: 'War Thunder PC overlays tuned for Air and Ground battles.',
  },
  gpEspWallhack: {
    src: SITE_CHEAT_IMAGES[1].src,
    alt: SITE_CHEAT_IMAGES[1].alt,
    caption: 'Vehicle ESP',
    captionDesc: 'Vehicle and threat information aligned with the live module list.',
  },
  gpGameplay: {
    src: SITE_CHEAT_IMAGES[2].src,
    alt: SITE_CHEAT_IMAGES[2].alt,
    caption: 'Battlefield view',
    captionDesc: 'PC match context with trainer-friendly overlays.',
  },
  gpEspIndoor: {
    src: SITE_CHEAT_IMAGES[3].src,
    alt: SITE_CHEAT_IMAGES[3].alt,
    caption: 'Combat HUD',
    captionDesc: 'In-match War Thunder HUD reference from approved media.',
  },
  gpCourtyard: {
    src: SITE_CHEAT_IMAGES[0]!.src,
    alt: SITE_CHEAT_IMAGES[0]!.alt,
    caption: 'Air & ground',
    captionDesc: 'Mixed RB/AB reference — confirm mode support on the product page.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

const productDetailGalleryCaptions = [
  { caption: 'Updates & status', captionDesc: 'Stay aligned with War Thunder patch and product status news.' },
  { caption: 'Multiplayer gameplay', captionDesc: 'In-match view on PC with full HUD context.' },
  { caption: 'Ground or air perspective', captionDesc: 'First- or third-person combat with minimap and feed.' },
] as const;

function productDetailGallery(): ProductSlide[] {
  return PRODUCT_GALLERY_IMAGES.map((img, i) => {
    const meta = productDetailGalleryCaptions[i] ?? productDetailGalleryCaptions[0]!;
    return {
      src: img.src,
      alt: img.alt,
      caption: meta.caption,
      captionDesc: meta.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'war-thunder';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'War Thunder Lite is built for situational awareness first. Strong map reads win more engagements than raw aim—Lite focuses on ESP, radar-style tools, and vehicle information without aim automation.',
    },
    { type: 'h2', text: 'Awareness-first defaults' },
    {
      type: 'p',
      text: 'Lite skips aim automation modules. Tune overlay range and colors in the portal; use stream-proof options if you record gameplay. Exact modules match the Zadeyo listing at purchase time.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'War Thunder Pro adds configurable aim assistance on top of Lite. Use smoothness and lead settings that stay readable in replays—start from portal presets, not max values.',
    },
    { type: 'h2', text: 'Aim assistance + awareness' },
    {
      type: 'p',
      text: 'Pro inherits Lite overlays and adds aim tools described on the product page. Verify each module against the live listing before you rely on it in PvP.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'War Thunder Elite bundles the broadest module set and priority support when slots are open. Limited slots keep update cycles manageable—check the status banner before checkout.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Test in Test Drive or custom rooms first; scale settings over multiple sessions. Discord staff can help tune profiles before competitive queues.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Typical Lite scope includes vehicle and threat ESP, distance readouts, radar-style overlays, and config presets—confirm the exact list on Zadeyo before purchase. Stream-proof modes may be available for recordings.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade through the portal when offered. Compare tiers on the main product page before checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Aim assistance' },
    {
      type: 'p',
      text: 'Pro adds aim-related modules on top of Lite. Follow the portal guide for smoothness, FOV or lead settings, and per-vehicle profiles if supported.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pair Pro with our aim and ESP guides in the blog before your first online session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full module set' },
    {
      type: 'p',
      text: 'Elite includes Lite and Pro capabilities plus additional utilities listed on Zadeyo when slots are available. Read the listing for Triggerbot, advanced ESP layers, or other extras.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite may show as limited on the status banner. Open a Discord ticket if checkout is gated.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when new accounts fail on one PC but work elsewhere—possible hardware enforcement. For account-only restrictions, review [UGC](/products/war-thunder/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Create a restore point, follow the portal spoof guide, cold reboot, verify identifiers, then use a conservative cheat profile. Details ship in the portal and HWID blog guide.',
    },
  ],
  ugc: [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for account restrictions—custom workflows and tracking, not a guaranteed unban.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some enforcement actions cannot be reversed. UGC helps organize evidence for review. Pair with [HWID Spoofer](/products/war-thunder/hwid-spoofer/) when hardware flags are involved.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Preview utilities show content on your client for testing. Other players see your real progression and inventory.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Bundled with Elite when listed on the product page. Buy standalone if you want previews without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: productDetailGallery(),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: wtSystemRequirements,
    fullFeatures: [
      'Vehicle ESP & threat markers',
      'Distance and name readouts',
      'Radar-style overlay',
      'Configurable overlay colors',
      'Stream-proof overlay option (if listed)',
      'Map awareness presets',
      'Cloud config backup',
      'Patch-day status checks',
    ],
    overview: {
      title: 'War Thunder Lite: ESP and radar',
      paragraphs: [
        'Lite focuses on ESP, vehicle information, and radar-style overlays without aim automation. Configure range and clutter before online play.',
        'Best if you want awareness in Air RB, Ground RB, AB, or Simulator playlists—confirm mode coverage on the Zadeyo listing.',
      ],
    },
  },
  pro: {
    images: productDetailGallery(),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: wtSystemRequirements,
    fullFeatures: [
      'All Lite awareness modules',
      'Configurable aim assistance',
      'Smoothness / lead tuning',
      'Visibility checks (as listed)',
      'Per-vehicle profiles (if supported)',
      'Portal conservative presets (verify mode rules)',
      'Test profile for Test Drive',
      'Cloud config backup',
      'Loader update prompts',
    ],
    overview: {
      title: 'War Thunder Pro: aim assistance plus ESP',
      paragraphs: [
        'Pro adds aim tools on top of Lite. Start from portal defaults and adjust over multiple sessions.',
        'Popular for players who already read the map and want combat assistance—verify modules on the live product page.',
      ],
    },
  },
  elite: {
    images: productDetailGallery(),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: wtSystemRequirements,
    fullFeatures: [
      'Lite + Pro modules',
      'Advanced ESP layers (as listed)',
      'Triggerbot (if listed)',
      'Recoil or ballistics helpers (if listed)',
      'Priority patch queue (when slots open)',
      'Direct Discord support (when offered)',
      'Preview / utility bundles (if listed)',
      'Private slot access (when gated)',
    ],
    overview: {
      title: 'Elite: full suite',
      paragraphs: [
        'Elite includes the broadest module set described on Zadeyo. Check the status banner on cheatswarthunder.net before purchase.',
        'Limited slots may apply—confirm on the listing or with Discord before paying.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpEspIndoor', 'gpEspWallhack', 'gpGameplay'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers after a cold reboot before launching War Thunder.',
    limitations:
      'Spoofing does not fix pure account-only cases. Never stack two spoof tools. Shared PCs may not be suitable. You accept risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching War Thunder after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'HWID Spoofer for War Thunder PC',
      paragraphs: [
        'Hardware-focused tools when identifiers appear flagged. Includes scans, restore guidance, and verification steps from the portal.',
        'Not a substitute for legitimate account recovery—pair with UGC workflows when restrictions are account-based.',
      ],
    },
  },
  ugc: {
    images: slide('gpEspWallhack', 'gpAimbotEsp', 'gpEspIndoor').map((img, index) =>
      index === 0 ? { ...img, alt: `UGC – ${img.alt}` } : img,
    ),
    goodToKnow:
      'Gather order email, platform details, and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass publisher review.',
    limitations:
      'UGC does not guarantee account restoration. Outcomes vary by case type.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout.' },
      { icon: 'reqShieldAccount', text: 'Account details and restriction notices if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord and the case dashboard.' },
    ],
    fullFeatures: [
      'Appeal workflow templates',
      'Case documentation structure',
      'Status tracking dashboard',
      'Evidence upload guide',
      'Timeline tracker',
      'Follow-up templates',
    ],
    overview: {
      title: 'UGC account appeal tools',
      paragraphs: [
        'UGC helps organize appeals and disputes for War Thunder account issues. It is not a guaranteed unban service.',
        'Use when you have documentation ready; pair with HWID tools only for hardware-related flags.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpGameplay', 'gpEspWallhack', 'gpAimbotEsp'),
    goodToKnow:
      'Previews display locally on your client. Others see your real progression. Bundled with Elite when the listing says so.',
    limitations:
      'Local preview only—does not grant marketplace purchases or server-side unlocks.',
    systemRequirements: wtSystemRequirements,
    fullFeatures: [
      'Vehicle preview',
      'Skin / camo preview (if listed)',
      'Hangar preview tools',
      'Loadout export (if listed)',
      'Favorites list',
    ],
    overview: {
      title: 'Hangar & vehicle preview tools',
      paragraphs: [
        'Preview vehicles and cosmetics locally. Does not change server-side unlocks or purchases.',
        'Included with Elite when listed, or available standalone for preview-only workflows.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName =
      cheat.name === 'Lite' ? 'War Thunder Lite' : cheat.name === 'Pro' ? 'War Thunder Pro' : 'War Thunder Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = slide('gpAimbotEsp', 'gpEspWallhack', 'gpGameplay', 'gpEspIndoor', 'gpCourtyard');

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'War Thunder cheats with ESP and aim options, plus HWID, UGC, and preview tools for PC.',
  buyUrl: checkoutPath('warThunder'),
};
