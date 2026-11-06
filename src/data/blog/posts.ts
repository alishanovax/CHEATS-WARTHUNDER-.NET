import type { BlogPostFull } from './types';
import { cheatImageForSlug } from '../../config/siteImages';

const CHECKOUT_HREF = 'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fwar-thunder';

const blogPostsData: BlogPostFull[] = [
  {
    tag: 'Guides',
    title: 'Test Drive practice: tune ESP before online matches',
    slug: 'wt-test-drive-practice',
    image: cheatImageForSlug('wt-test-drive-practice'),
    desc: 'Use Test Drive and custom rooms to set ESP range and overlay clutter before PvP.',
    date: 'Oct 24, 2026',
    readTime: '8 min read',
    body: [
      {
        type: 'p',
        text: `Test Drive and single-player rooms are the safest place to adjust overlays and aim smoothing. They do not replace live anti-cheat risk—private modules for online play come through checkout at ${CHECKOUT_HREF}.`,
      },
      { type: 'h2', text: 'Test Drive vs online play' },
      {
        type: 'p',
        text: `Test Drive lets you test guns and flight models without queue pressure. Online Air RB and Ground RB need modules updated after patches. Compare tiers on [War Thunder products](/products/war-thunder/) when your settings feel stable.`,
      },
      { type: 'h2', text: 'ESP tuning workflow' },
      {
        type: 'p',
        text: `Start with short ESP range, thick outlines off, and one threat type at a time. Raise distance only after you can read the minimap without staring at boxes. See [wall ESP setup](/blog/wt-esp-setup/) and [radar guide](/blog/wt-radar/).`,
      },
      { type: 'h2', text: 'Practice checklist' },
      {
        type: 'table',
        headers: ['Drill', 'Module', 'Goal'],
        rows: [
          ['Ground engagement', 'ESP + distance', 'Identify target class before firing'],
          ['Air merge', 'Radar overlay', 'Keep crosshair near bore-sight'],
          ['SPAA practice', 'Aircraft ESP', 'Track altitude without tunnel vision'],
          ['Third-party check', 'Threat list', 'Call inbound before they enter HUD'],
        ],
      },
      {
        type: 'cta',
        title: 'Ready for online tools?',
        text: 'Test Drive validates settings; checkout unlocks modules for live playlists.',
        href: CHECKOUT_HREF,
      },
      {
        type: 'p',
        text: 'War Thunder Cheats at cheatswarthunder.net links to War Thunder tooling for Windows PC. Check status after every patch.',
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'Training tips for aim assistance and ESP',
    slug: 'wt-training-tips',
    image: cheatImageForSlug('wt-training-tips'),
    desc: 'Repeatable drills for smooth aim and readable ESP in Air and Ground battles.',
    date: 'Oct 10, 2026',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: `Training rooms teach mechanics; ranked online play needs updated loaders from ${CHECKOUT_HREF}. Keep those workflows separate.`,
      },
      { type: 'h2', text: 'Smooth aim drills' },
      {
        type: 'ul',
        items: [
          'Load a conservative smoothness preset from the portal.',
          'Spend five minutes on ground targets before touching air.',
          'Only tighten aim aggression after replays look natural.',
          'Save a training profile separate from your RB preset.',
        ],
      },
      { type: 'h2', text: 'ESP readability' },
      {
        type: 'ul',
        items: [
          'Cap ESP distance below where the map becomes noise.',
          'Use team colors that contrast with terrain.',
          'Pair with [wall ESP guide](/blog/wt-esp-setup/).',
        ],
      },
      {
        type: 'cta',
        title: 'Compare Pro tier',
        text: 'Pro adds aim assistance on top of Lite ESP—checkout on Zadeyo.',
        href: CHECKOUT_HREF,
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'How to use War Thunder cheats safely',
    slug: 'wt-cheat-setup',
    image: cheatImageForSlug('wt-cheat-setup'),
    desc: 'Test Drive vs live PvP: validate overlays before using paid tools online.',
    date: 'Sep 25, 2026',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: `New players sometimes confuse Test Drive with paid overlays. Training modes do not grant online modules—see [products](/products/war-thunder/) and checkout at ${CHECKOUT_HREF}.`,
      },
      { type: 'h2', text: 'Risk checklist' },
      {
        type: 'ul',
        items: [
          'Read the homepage status banner.',
          'Launch only the portal loader—never random binaries from DMs.',
          'Keep drivers and OS updated to match portal notes.',
        ],
      },
      {
        type: 'cta',
        title: 'Secure checkout',
        text: 'One Zadeyo link for every buy button on this site.',
        href: CHECKOUT_HREF,
      },
    ],
  },
  {
    tag: 'Features',
    title: 'War Thunder cheats features overview',
    slug: 'wt-cheat-features',
    image: cheatImageForSlug('wt-cheat-features'),
    desc: 'How tiers differ and where to verify the live module list on Zadeyo.',
    date: 'Sep 8, 2026',
    readTime: '10 min read',
    body: [
      {
        type: 'p',
        text: `Lite focuses on ESP and radar-style overlays. Pro adds aim assistance. Elite bundles whatever extras appear on Zadeyo when slots exist—verify names like Triggerbot or advanced ESP there, not from forum rumors.`,
      },
      { type: 'h2', text: 'Where truth lives' },
      {
        type: 'p',
        text: `The Zadeyo /products/war-thunder page lists what you pay for. This blog explains workflow; it does not override the listing.`,
      },
      {
        type: 'cta',
        title: 'Open checkout listing',
        text: 'Confirm modules and price on Zadeyo before buying.',
        href: CHECKOUT_HREF,
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'Practice settings vs ranked tools',
    slug: 'wt-practice-settings',
    image: cheatImageForSlug('wt-practice-settings'),
    desc: 'What Test Drive can teach—and what requires the external loader from checkout.',
    date: 'Aug 22, 2026',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: `Practice modes teach lead and energy management. External overlays for multiplayer ship through ${CHECKOUT_HREF} and the customer portal.`,
      },
      { type: 'h2', text: 'When to switch' },
      {
        type: 'p',
        text: `Move online only after stable FPS, readable ESP, and portal confirmation that the build matches your client version.`,
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'War Thunder Lite vs Pro',
    slug: 'wt-lite-vs-pro',
    image: cheatImageForSlug('wt-lite-vs-pro'),
    desc: 'Awareness-only vs aim assistance—compare tiers before you pay.',
    date: 'Aug 5, 2026',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: `Lite keeps you informed with ESP and radar-style tools. Pro adds aim assistance. Pick Lite if you refuse automation; pick Pro if you want both stacks.`,
      },
      {
        type: 'p',
        text: `Neither tier removes enforcement risk—read cheatswarthunder.net status and use conservative settings.`,
      },
      {
        type: 'cta',
        title: 'Choose a tier',
        text: 'Checkout lists current module bundles.',
        href: CHECKOUT_HREF,
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'Elite tier: when to upgrade',
    slug: 'wt-elite-tier',
    image: cheatImageForSlug('wt-elite-tier'),
    desc: 'Who Elite fits and how slots affect support.',
    date: 'Jul 19, 2026',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: `Elite is for players who want the full module list in one license when Zadeyo shows availability. Slots may be capped—check Discord before paying.`,
      },
      { type: 'h2', text: 'Discipline' },
      {
        type: 'p',
        text: `Extra power needs slower tuning curves. Test in Test Drive, then short RB sessions, then longer sessions.`,
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'Aim assistance for competitive play',
    slug: 'wt-aimbot-ranked',
    image: cheatImageForSlug('wt-aimbot-ranked'),
    desc: 'Smoothness, lead, and visibility checks for RB playlists.',
    date: 'Jun 30, 2026',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: `RB fights reward smooth tracking over twitch snapping. [Pro tier](/products/war-thunder/pro/) ships aim tools on top of Lite—confirm exact sliders on the portal.`,
      },
      {
        type: 'cta',
        title: 'Unlock Pro access',
        text: 'Purchase through the single Zadeyo checkout link.',
        href: CHECKOUT_HREF,
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'Wall ESP and overlay setup',
    slug: 'wt-esp-setup',
    image: cheatImageForSlug('wt-esp-setup'),
    desc: 'Readable ESP for air and ground targets without cluttering the HUD.',
    date: 'Jun 12, 2026',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: `ESP on [Lite](/products/war-thunder/lite/) should answer one question: “Is that target a threat now?” If overlays spam text, reduce filters before raising range.`,
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'Radar overlays and spacing',
    slug: 'wt-radar',
    image: cheatImageForSlug('wt-radar'),
    desc: 'Mini-radar habits, spacing, and callouts for squads.',
    date: 'May 24, 2026',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: `Radar overlays help you see merges earlier—cap range so friends can still read the screen. Works with Lite and higher tiers when listed.`,
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'Hangar preview & loadout tools',
    slug: 'wt-loadouts',
    image: cheatImageForSlug('wt-loadouts'),
    desc: 'Local previews only—what you and others see in battle.',
    date: 'May 6, 2026',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: `Preview utilities change what you see locally—opponents still see your real unlocks. Bundled with Elite when the listing says so; also sold standalone.`,
      },
    ],
  },
  {
    tag: 'Updates',
    title: 'Patch day checklist for War Thunder cheats',
    slug: 'wt-patch-day',
    image: cheatImageForSlug('wt-patch-day'),
    desc: 'Status banner, loader refresh, and conservative profiles after updates.',
    date: 'Apr 18, 2026',
    readTime: '5 min read',
    body: [
      {
        type: 'ul',
        items: [
          'Read Discord #status before launching overlays.',
          'Download the latest portal loader.',
          'Disable aggressive settings until confirmation posts land.',
          'Test in Test Drive or low-tier AB before RB.',
        ],
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'HWID spoof vs new account paths',
    slug: 'wt-hwid-ban',
    image: cheatImageForSlug('wt-hwid-ban'),
    desc: 'When hardware tools help—and when appeals or new accounts make more sense.',
    date: 'Mar 29, 2026',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: `Pair [HWID spoofer](/products/war-thunder/hwid-spoofer/) with portal diagnostics when hardware flags are likely. Use [UGC](/products/war-thunder/ugc/) for structured appeals—not instant unbans.`,
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'How to buy War Thunder cheats',
    slug: 'buy-war-thunder-cheats',
    image: cheatImageForSlug('buy-war-thunder-cheats'),
    desc: 'Step-by-step purchase walkthrough for Lite, Pro, and Elite via Zadeyo.',
    date: 'Mar 8, 2026',
    readTime: '5 min read',
    body: [
      { type: 'h2', text: 'Steps' },
      {
        type: 'ol',
        items: [
          'Compare tiers on cheatswarthunder.net.',
          `Continue to checkout at ${CHECKOUT_HREF}.`,
          'Save your order email for portal access.',
          'Download the loader and follow the PDF/video guide.',
        ],
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'Per-vehicle aim profiles',
    slug: 'wt-aimbot-combat',
    image: cheatImageForSlug('wt-aimbot-combat'),
    desc: 'Tuning aim assistance across fighters, attackers, and ground lineups.',
    date: 'Feb 17, 2026',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: `Cannons and machine guns need different smoothing. Build one profile per vehicle class when the portal supports it.`,
      },
    ],
  },
  {
    tag: 'Troubleshooting',
    title: 'Launcher and file issues on PC',
    slug: 'wt-launcher-troubleshooting',
    image: cheatImageForSlug('wt-launcher-troubleshooting'),
    desc: 'Verify installs, repair files, and rule out conflicts before blaming the loader.',
    date: 'Jan 26, 2026',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: `Repair the War Thunder client, reboot, then retest before opening loader tickets. False positives waste time when overlays were never the problem.`,
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'External loader guide',
    slug: 'wt-external-loader',
    image: cheatImageForSlug('wt-external-loader'),
    desc: 'Why external tools use overlays and how updates reach your PC.',
    date: 'Dec 14, 2025',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: `External loaders render overlays outside the game process in many setups. Risk remains—follow status and Terms.`,
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'Stream-proof overlay setup',
    slug: 'wt-stream-proof',
    image: cheatImageForSlug('wt-stream-proof'),
    desc: 'Test OBS and capture settings so overlays stay off-stream when needed.',
    date: 'Nov 19, 2025',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: `Record locally before going live. If overlays appear in OBS, toggle stream-proof options from the portal when available or switch capture sources.`,
      },
    ],
  },
];

export const blogPosts: BlogPostFull[] = blogPostsData;
