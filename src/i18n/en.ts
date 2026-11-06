import type { Translations } from './types';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';
import { cheatImageForSlug } from '../config/siteImages';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'War Thunder Cheats',
    domain: 'cheatswarthunder.net',
    title: 'War Thunder Cheats',
    description:
      'War Thunder cheats for PC — map overlays, vehicle ESP, aim assistance options, and setup guides. Pricing and access are confirmed at Zadeyo checkout via cheatswarthunder.net.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'War Thunder · PC',
    eyebrow: 'War Thunder cheats for PC',
    h1: 'War Thunder Cheats',
    h1Accent: '',
    subtitle:
      'War Thunder PC cheats for Air and Ground battles — vehicle ESP, radar-style overlays, configurable aim assistance, and save/load config profiles. Always confirm modules on the Zadeyo listing before purchase.',
    ctaPrimary: 'Buy now',
    ctaDiscord: 'Join Discord',
    modesLabel: 'Game modes',
    modes: ['Air RB', 'Ground RB', 'Arcade', 'Simulator'],
    metrics: [
      { label: 'Stream-friendly', strong: 'Options' },
      { label: 'Loader updates', strong: 'Portal' },
      { label: 'Checkout', strong: 'Zadeyo' },
      { label: 'Support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Product features',
    title: 'War Thunder cheat modules',
    subtitle:
      'Overlays and combat tools described on the Zadeyo War Thunder listing — for realistic and arcade playlists when the status banner shows online.',
    items: [
      {
        title: 'Aim assistance',
        subtitle: 'Smoothing, lead, visibility',
        desc: 'Configurable aim assistance with smoothness and lead-style tuning for Air and Ground combat—match settings to the live product page.',
        bullets: [
          'Tune smoothness before raising aggression',
          'Use visibility checks when listed',
          'Per-vehicle profiles when supported',
          'Start from portal presets',
        ],
        tags: ['War Thunder aimbot', 'aim assist', 'PC'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Vehicle ESP',
        subtitle: 'Threat awareness',
        desc: 'Vehicle and threat ESP with distance, markers, and readable overlay styles for busy airspace and ground maps.',
        bullets: [
          'Distance and team filters',
          'Threat markers for vehicles',
          'Readable colors at range',
          'Reduce clutter in dense matches',
        ],
        tags: ['War Thunder ESP', 'vehicle ESP', 'radar'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Radar & map overlays',
        subtitle: 'Situational picture',
        desc: 'Radar-style overlays and map awareness tools—pair with conservative ranges in RB and Simulator.',
        bullets: ['Mini-radar style overlays', 'Range caps', 'Rotation callouts', 'Works with ESP tiers'],
        tags: ['War Thunder radar', 'map overlay', 'ESP'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Configs',
        subtitle: 'Save and load',
        desc: 'Save and load profiles for Air, Ground, and Arcade presets so settings stay consistent between sessions.',
        bullets: ['Save config to disk', 'Load on launch', 'Separate profiles per mode', 'Cloud backup when offered'],
        tags: ['War Thunder cheat config', 'profiles', 'setup'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Ballistics & recoil helpers',
        subtitle: 'When listed',
        desc: 'Some tiers list ballistics or recoil helpers—verify names and limits on Zadeyo before enabling in PvP.',
        bullets: ['Confirm in product listing', 'Test in Test Drive', 'Tune before ranked queues', 'Pair with ESP readouts'],
        tags: ['ballistics', 'combat', 'PC'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Compatibility',
        subtitle: 'Windows PC',
        desc: 'Built for War Thunder on Windows 10 and 11. Confirm CPU, GPU, and client requirements on the checkout page.',
        bullets: ['Windows 10 or 11 (64-bit)', 'Current War Thunder PC client', 'Portal loader delivery', 'Check status after patches'],
        tags: ['War Thunder compatibility', 'PC', 'Windows'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Playlists',
        subtitle: 'Where people use tools',
        desc: 'Designed for War Thunder multiplayer—Air RB, Ground RB, Arcade, and Simulator. Confirm mode support on the listing.',
        bullets: ['Air and Ground PvP', 'Arcade rotations', 'Simulator discipline', 'Test Drive for tuning'],
        tags: ['War Thunder multiplayer', 'RB', 'AB'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Pricing',
        subtitle: 'Zadeyo checkout',
        desc: 'Plans and prices are shown at checkout on Zadeyo. This site uses one consistent purchase link site-wide.',
        bullets: ['See live price on Zadeyo', 'Instant digital delivery path', 'Same checkout URL everywhere'],
        tags: ['War Thunder cheats price', 'buy War Thunder cheats', 'access'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why our shop',
    title: 'War Thunder cheats built for maintenance',
    subtitle:
      'Private tools need fast loader updates and clear status. We publish tier guides, keep CTAs on one checkout link, and stay available on Discord for setup questions.',
    usLabel: 'War Thunder Cheats',
    otherLabel: 'Typical shop',
    rows: [
      {
        title: 'Loader updates after patches',
        desc: 'Reload from the portal after major War Thunder updates. Check Discord #status before online play.',
      },
      {
        title: 'Conservative defaults',
        desc: 'Portal presets lean toward subtle settings first—you can tune upward after stable sessions.',
      },
      {
        title: 'Discord support',
        desc: 'Staff help with loader steps, configs, and checkout questions.',
      },
      {
        title: 'External loader workflow',
        desc: 'Follow the portal architecture described in guides—no manual game folder edits from random links.',
      },
      {
        title: 'Cloud configs',
        desc: 'Save Air and Ground profiles when the portal offers sync.',
      },
      {
        title: 'HWID resets',
        desc: 'Hardware moves go through Discord with order email—limits depend on tier and policy.',
      },
    ],
    metrics: [
      {
        value: 'Portal',
        title: 'Delivery',
        desc: 'Digital loader access after checkout on Zadeyo.',
      },
      {
        value: '24/7',
        title: 'Support',
        desc: 'Discord coverage for setup and billing questions.',
      },
      {
        value: '1 link',
        title: 'Checkout',
        desc: 'Same Zadeyo URL on every buy button.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup',
    titleLead: 'Buy access. Tune in',
    titleHighlight: 'three steps',
    intro:
      'Buy War Thunder cheat access, download the loader from the portal, load a preset, then launch War Thunder. Discord help is there if you get stuck.',
    ctaPrimary: 'Buy now',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Buy and download',
        desc: 'Finish checkout on Zadeyo, open the portal, and download the latest Windows loader.',
      },
      {
        step: 'Step 2',
        title: 'Load presets',
        desc: 'Run the loader, load a War Thunder preset, and tune ESP range and aim smoothness.',
      },
      {
        step: 'Step 3',
        title: 'Check status and play',
        desc: 'Confirm the status banner is online, launch War Thunder from the official client, and use your saved config.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform',
    title: 'Windows PC',
    subtitle: 'Check the status banner after War Thunder updates before you launch.',
    items: [
      'Windows 10 & 11',
      'Official War Thunder PC client',
      'Portal auto updates',
      'Config cloud sync',
      'Discord support',
      'HWID reset',
      'External loader',
    ],
  },
  cheats: {
    eyebrow: 'Tiers',
    title: 'War Thunder Elite cheats',
    subtitle:
      'Full War Thunder cheat suite — aim assistance, vehicle ESP, advanced overlays, hangar previews, and priority updates when listed.',
    viewAll: 'View Elite details',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        tier: 'Starter',
        name: 'Lite',
        title: 'War Thunder Lite — vehicle ESP, radar & awareness',
        desc: 'Lite includes vehicle ESP, map overlays, and radar-style tools without aim automation—stream-friendly options when listed.',
        features: ['Vehicle ESP', 'Radar-style overlay', 'Distance readouts', 'Awareness presets'],
        more: 8,
        href: `${productBase}lite/`,
        variant: 'essential',
      },
      {
        badge: 'Popular',
        tier: 'Core',
        name: 'Pro',
        title: 'War Thunder Pro — aim assistance & ESP',
        desc: 'Everything in Lite plus configurable aim assistance and combat-oriented modules from the Zadeyo listing.',
        features: ['All Lite modules', 'Aim assistance', 'Smoothing & lead', 'Combat presets'],
        more: 9,
        href: `${productBase}pro/`,
        variant: 'popular',
      },
      {
        badge: 'Limited slots',
        tier: 'Full',
        name: 'Elite',
        title: 'War Thunder Elite — full module set',
        desc: 'Broadest feature set when slots are open—confirm modules, Triggerbot, and extras on the product page.',
        features: ['Lite + Pro', 'Advanced ESP', 'Priority support', 'Extras per listing'],
        more: 10,
        href: `${productBase}elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Shop',
    title: 'War Thunder — PC cheats shop',
    subtitle:
      'Cheat tiers plus HWID spoofer, UGC appeals, and hangar preview utilities—pick what you need and checkout in minutes.',
    viewAll: 'View all products',
    get: 'Buy',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer — hardware tools',
        subtitle: 'Fresh identifiers workflow',
        desc: 'Hardware-focused tools with portal scans and reboot checks—follow the guide before launching cheats again.',
        features: ['Spoofer & cleanup', 'Serial rotation', 'Compatibility scan', 'Post-spoof checks'],
        more: 8,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'UGC — ban appeals & cases',
        subtitle: 'Appeal workspace',
        desc: 'Structured workflows for restrictions and disputes—not a guaranteed unban. Pair with documentation from your case.',
        features: ['Appeal templates', 'Case tracking', 'Evidence structure', 'Follow-up guides'],
        more: 5,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'Available',
        category: 'Preview',
        title: 'Hangar preview / loadout tools',
        subtitle: 'Local client previews',
        desc: 'Local vehicle and cosmetic previews for your client—others see your real account state.',
        features: ['Vehicle preview', 'Cosmetic preview', 'Favorites export', 'Portal presets'],
        more: 6,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Guides',
    title: 'War Thunder cheat blogs',
    subtitle: 'Aim setup, ESP tuning, Test Drive practice, and patch-day checks.',
    latestTitle: 'Latest War Thunder cheat guides',
    latestSubtitle: 'Filter by topic or sort to find setup, tiers, and patch checks.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Guides',
        title: 'Test Drive practice: tune ESP before online matches',
        slug: 'wt-test-drive-practice',
        image: cheatImageForSlug('wt-test-drive-practice'),
        desc: 'Use Test Drive and custom rooms to tune ESP distance and overlay clutter before PvP.',
        date: 'Oct 24, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Guides',
        title: 'Training tips for aim assistance and ESP',
        slug: 'wt-training-tips',
        image: cheatImageForSlug('wt-training-tips'),
        desc: 'Repeatable drills for smooth aim and readable ESP in Air and Ground battles.',
        date: 'Oct 10, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'How to use War Thunder cheats safely',
        slug: 'wt-cheat-setup',
        image: cheatImageForSlug('wt-cheat-setup'),
        desc: 'Test Drive vs live PvP: how to validate overlays before using paid tools online.',
        date: 'Sep 25, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Features',
        title: 'War Thunder cheats features overview',
        slug: 'wt-cheat-features',
        image: cheatImageForSlug('wt-cheat-features'),
        desc: 'How tiers differ and where to verify the live module list on Zadeyo.',
        date: 'Sep 8, 2026',
        readTime: '10 min read',
      },
      {
        tag: 'Guides',
        title: 'Practice settings vs ranked tools',
        slug: 'wt-practice-settings',
        image: cheatImageForSlug('wt-practice-settings'),
        desc: 'What Test Drive can teach—and what requires the external loader from checkout.',
        date: 'Aug 22, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'War Thunder Lite vs Pro',
        slug: 'wt-lite-vs-pro',
        image: cheatImageForSlug('wt-lite-vs-pro'),
        desc: 'Awareness-only vs aim assistance—compare tiers before you pay.',
        date: 'Aug 5, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Elite tier: when to upgrade',
        slug: 'wt-elite-tier',
        image: cheatImageForSlug('wt-elite-tier'),
        desc: 'Who Elite fits and how slots affect support—read the listing before upgrading.',
        date: 'Jul 19, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'Aim assistance for competitive play',
        slug: 'wt-aimbot-ranked',
        image: cheatImageForSlug('wt-aimbot-ranked'),
        desc: 'Smoothness, lead, and visibility checks for RB playlists.',
        date: 'Jun 30, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'Wall ESP and overlay setup',
        slug: 'wt-esp-setup',
        image: cheatImageForSlug('wt-esp-setup'),
        desc: 'Readable ESP for air and ground targets without cluttering the HUD.',
        date: 'Jun 12, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Radar overlays and spacing',
        slug: 'wt-radar',
        image: cheatImageForSlug('wt-radar'),
        desc: 'Mini-radar habits, spacing, and callouts for squads.',
        date: 'May 24, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Hangar preview & loadout tools',
        slug: 'wt-loadouts',
        image: cheatImageForSlug('wt-loadouts'),
        desc: 'Local previews only—what you and others see in battle.',
        date: 'May 6, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Updates',
        title: 'Patch day checklist for War Thunder cheats',
        slug: 'wt-patch-day',
        image: cheatImageForSlug('wt-patch-day'),
        desc: 'Status banner, loader refresh, and conservative profiles after updates.',
        date: 'Apr 18, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'HWID spoof vs new account paths',
        slug: 'wt-hwid-ban',
        image: cheatImageForSlug('wt-hwid-ban'),
        desc: 'When hardware tools help—and when appeals or new accounts make more sense.',
        date: 'Mar 29, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'How to buy War Thunder cheats',
        slug: 'buy-war-thunder-cheats',
        image: cheatImageForSlug('buy-war-thunder-cheats'),
        desc: 'Step-by-step purchase walkthrough for Lite, Pro, and Elite via Zadeyo.',
        date: 'Mar 8, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Per-vehicle aim profiles',
        slug: 'wt-aimbot-combat',
        image: cheatImageForSlug('wt-aimbot-combat'),
        desc: 'Tuning aim assistance across fighters, attackers, and ground lineups.',
        date: 'Feb 17, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Troubleshooting',
        title: 'Launcher and file issues on PC',
        slug: 'wt-launcher-troubleshooting',
        image: cheatImageForSlug('wt-launcher-troubleshooting'),
        desc: 'Verify installs, repair files, and rule out conflicts before blaming the loader.',
        date: 'Jan 26, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'External loader guide',
        slug: 'wt-external-loader',
        image: cheatImageForSlug('wt-external-loader'),
        desc: 'Why external tools use overlays and how updates reach your PC.',
        date: 'Dec 14, 2025',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Stream-proof overlay setup',
        slug: 'wt-stream-proof',
        image: cheatImageForSlug('wt-stream-proof'),
        desc: 'Test OBS and capture settings so overlays stay off-stream when needed.',
        date: 'Nov 19, 2025',
        readTime: '5 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Modules',
    title: 'Cheat menu, organized',
    subtitle: 'Modules are grouped so you can tune ESP and aim between spawns without digging through chaos.',
    items: [
      { num: '01', label: 'Aim', title: 'Assistance that matches your lineup', desc: 'Smoothing, lead, and visibility toggles in one place.' },
      { num: '02', label: 'ESP', title: 'Vehicle awareness', desc: 'Markers, distance, and filters for busy maps.' },
      { num: '03', label: 'Radar', title: 'Map picture', desc: 'Compact radar-style overlays with range caps.' },
      { num: '04', label: 'Vehicles', title: 'Profiles per line', desc: 'Save air and ground presets separately.' },
      { num: '05', label: 'Modes', title: 'RB / AB / SIM', desc: 'Swap presets when you change playlists.' },
      { num: '06', label: 'Profiles', title: 'Configs', desc: 'Cloud backup when the portal supports it.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 steps',
    titleBefore: 'From buy to',
    titleHighlight: 'first sortie.',
    subtitle: 'Checkout on Zadeyo, download the loader, enable modules, save configs for the next session.',
    ctaLabel: 'Buy now',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check status',
        desc: 'Read the live banner on cheatswarthunder.net before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Pick a tier',
        desc: 'Choose Lite, Pro, or Elite based on the module list on Zadeyo.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch and set up',
        desc: 'Download from the portal, enable modules, and test in Test Drive.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your config',
        desc: 'Save Air and Ground presets to the cloud when available.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Notes',
    title: 'Quick tips',
    items: [
      { num: '01', title: 'After patches', desc: 'Check Discord and the portal status before competitive queues.' },
      { num: '02', title: 'Start slow', desc: 'Use default ESP range and aim smoothness first—raise later if needed.' },
      { num: '03', title: 'Discord help', desc: 'Stuck on the loader? Ask with order email and Windows version.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Loader, HWID, checkout & configs',
    subtitle: 'Direct help for setup and billing.',
    channels: [
      {
        icon: 'users',
        title: 'Before you buy',
        desc: 'Ask about tiers and what each listing includes.',
        linkLabel: 'View products',
        href: productBase,
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Compatibility, bans, and setup answers.',
        linkLabel: 'View FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Discord',
        desc: 'Support online 24/7.',
        linkLabel: 'Join Discord',
        href: DISCORD_URL,
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'From Zadeyo or the portal invitation.' },
      { title: 'Platform', desc: 'Windows 10 or 11 and War Thunder client channel (Steam, standalone, etc.).' },
      { title: 'Error detail', desc: 'Screenshot or exact text from the loader or launcher.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'War Thunder cheats FAQ',
    subtitle: 'Tiers, bans, loader, and checkout—before you buy.',
    items: [
      {
        num: '01',
        q: 'Where do I check if War Thunder cheats are online?',
        a: 'The live status banner is on cheatswarthunder.net and in Discord #status. Check after War Thunder or launcher updates.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Checkout on Zadeyo unlocks portal access with the loader and setup guide. Follow the guide before launching the game.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party tools?',
        a: 'Yes—any modification carries enforcement risk. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'War Thunder on Windows 10/11 64-bit through the supported PC client. Other platforms are not covered here.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Use HWID reset in the portal or open a Discord ticket. Limits depend on tier and policy.',
      },
      {
        num: '06',
        q: 'Where are tiers and utilities listed?',
        a: 'Lite, Pro, Elite, HWID, UGC, and previews live at cheatswarthunder.net/products/war-thunder with checkout via Zadeyo.',
      },
    ],
  },
  footer: {
    tagline: 'War Thunder cheats for PC: overlays, aim assistance, and utilities.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/war-thunder/elite/', label: 'Elite tier', ariaLabel: 'Elite cheats' },
      { href: '/products/war-thunder/', label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About War Thunder Cheats — tiers, guides & support',
      description:
        'Tier comparisons and loader support for War Thunder on PC — who we are and how cheatswarthunder.net stays updated.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'War Thunder Cheats is a PC-focused site for overlay tools, aim assistance tiers, and utilities for War Thunder. We publish setup guides and status notes when the game or product builds change.',
            'Game and product names are for identification only; we are not affiliated with Gaijin Entertainment.',
            'Checkout and license delivery run through Zadeyo; support runs through this site and Discord.',
          ],
        },
        {
          heading: 'What we sell',
          paragraphs: [
            'Lite, Pro, and Elite tiers plus HWID utilities, UGC appeal tools, and local preview packs when listed. Coverage follows the module list on Zadeyo at purchase time.',
            'The blog covers configs and patch checks—confirm the homepage banner before each session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Use Discord or email for loader errors, preset tuning, and checkout questions. Include order email and Windows version.',
            'We do not guarantee rank outcomes or ban immunity. Third-party tools carry risk—read the FAQ and Terms before purchase.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy | cheatswarthunder.net',
      description:
        'How cheatswarthunder.net handles analytics, cookies, checkout referrals and contact data.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect basic analytics when enabled. Checkout runs on Zadeyo—we do not store payment card data on cheatswarthunder.net.',
            'When you contact us through Support or Discord, we keep the email and message until the issue is closed.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us see which guides need updates. We do not sell personal data.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Basic analytics cookies may be used. You can block them in your browser.',
          ],
        },
        {
          heading: 'Third-party checkout',
          paragraphs: [
            'Purchases complete on Zadeyo. Their policy governs payment data.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Privacy questions go through the Support page. Refund rules are in Terms.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms | War Thunder Cheats — license, delivery & risk',
      description:
        'Terms for buying digital War Thunder-related software on cheatswarthunder.net.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'By using cheatswarthunder.net or buying a product listed here, you agree to these Terms and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'Digital access to loader tooling as described on Zadeyo. Features can change when War Thunder or security updates ship.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment runs on Zadeyo. After purchase, use the customer portal for the loader and guide.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are personal. Do not share loader files, portal logins, or keys.',
          ],
        },
        {
          heading: 'Refunds',
          paragraphs: [
            'Refund rules follow Zadeyo and seller policy. Contact support with order email if a product fails on a supported setup.',
          ],
        },
        {
          heading: 'Risk',
          paragraphs: [
            'Third-party tools may conflict with game rules. You accept enforcement risk.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. Continued use means you accept revisions.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Use the Support page for billing and loader questions.',
          ],
        },
      ],
    },
    support: {
      title: 'Support | Loader, HWID & checkout',
      description:
        'War Thunder cheats support for loader setup, HWID, and checkout help at cheatswarthunder.net.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Buy now',
    browseCheatsMobile: 'Buy now',
    homeAria: 'War Thunder Cheats home',
    checkoutAria: 'Buy War Thunder cheats',
    discordAria: 'Join War Thunder Cheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
