export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: 14,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'wt-map-awareness',
    title: 'What does map awareness include in the ESP guide?',
    upvotes: 73,
    excerpt: 'A quick breakdown of vehicle ESP, markers, and map overlays covered in the setup article.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Wall ESP overlay setup for War Thunder',
    sourcePath: '/blog/wt-esp-setup/',
    answer:
      'The guide covers vehicle markers, distance readouts, and ways to reduce HUD clutter. Exact options depend on the tier you purchased.',
    detail: 'It recommends enabling one overlay layer at a time until the screen stays readable in combat.',
    tip: 'Lower overlay range before changing colors—range is usually the main source of clutter.',
  }),
  guideDiscussion({
    slug: 'map-overlay-setup',
    title: 'How should I set up overlays for the first time?',
    upvotes: 58,
    excerpt: 'Start with basics, confirm placement in Test Drive, then adjust one setting at a time.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Wall ESP overlay walkthrough',
    sourcePath: '/blog/wt-esp-setup/',
    answer:
      'Enable the overlay in Test Drive, choose readable colors, and verify they do not cover critical instruments or the lead indicator.',
    detail: 'Fly or drive a short route repeatedly so muscle memory forms before online matches.',
    tip: 'If the HUD feels crowded, remove secondary markers before resizing text.',
  }),
  guideDiscussion({
    slug: 'camera-zoom',
    title: 'What radar range feels comfortable?',
    upvotes: 44,
    excerpt: 'The radar guide focuses on context without blocking the main view.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Radar overlays and spacing',
    sourcePath: '/blog/wt-radar/',
    answer:
      'There is no universal range. Increase distance gradually and stop when callouts become harder instead of easier.',
    detail: 'Keep a quick toggle to reset to defaults so you can compare layouts.',
    tip: 'Change one setting per sortie so you know what improved or worsened readability.',
  }),
  guideDiscussion({
    slug: 'aimbot-delay',
    title: 'How does smoothing affect aim assistance?',
    upvotes: 32,
    excerpt: 'Smoothing trades snap speed for natural movement.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Aim assistance for competitive play',
    sourcePath: '/blog/wt-aimbot-ranked/',
    answer:
      'Higher smoothing slows automation so tracking looks less mechanical in replays—start high, then reduce slowly.',
    detail: 'Document each change; rollback is easier when you know which slider caused twitchy movement.',
    tip: 'Test against AI first, then short PvP sessions before long grinds.',
  }),
  guideDiscussion({
    slug: 'elite-tier-tools',
    title: 'What extras show up on Elite?',
    upvotes: 67,
    excerpt: 'Elite adds modules listed on Zadeyo—compare with Lite and Pro.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'Elite tier guide',
    sourcePath: '/blog/wt-elite-tier/',
    answer:
      'Elite may add advanced ESP layers, Triggerbot, or other utilities when the listing includes them. Slots may be limited.',
    detail: 'Read Zadeyo for the authoritative bullet list before upgrading.',
    tip: 'If Pro already covers your playstyle, Elite might be unnecessary cost.',
  }),
  guideDiscussion({
    slug: 'lite-pro-diff',
    title: 'How do Lite and Pro differ?',
    upvotes: 53,
    excerpt: 'Lite is awareness-only; Pro adds aim assistance when available.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'War Thunder Lite vs Pro',
    sourcePath: '/blog/wt-lite-vs-pro/',
    answer:
      'Lite focuses on ESP and radar overlays. Pro stacks aim assistance modules on top for players who want both.',
    detail: 'Compare feature tables on cheatswarthunder.net before checkout.',
    tip: 'If you refuse automation entirely, stay on Lite.',
  }),
  guideDiscussion({
    slug: 'loadout-tools',
    title: 'What should I know about hangar preview tools?',
    upvotes: 38,
    excerpt: 'Local previews only—server unlocks stay the same.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'Hangar preview & loadout tools',
    sourcePath: '/blog/wt-loadouts/',
    answer:
      'Preview utilities show cosmetics or vehicles on your client. Other players still see your real account state.',
    detail: 'Follow portal steps to reset to defaults when testing completes.',
    tip: 'Treat previews as single-player quality-of-life, not competitive advantage.',
  }),
  guideDiscussion({
    slug: 'launcher-verify',
    title: 'What if the War Thunder launcher fails before I install cheats?',
    upvotes: 24,
    excerpt: 'Repair the base game before loader troubleshooting.',
    category: 'Patch Talk',
    categoryTone: 'orange',
    sourceTitle: 'Launcher and file issues on PC',
    sourcePath: '/blog/wt-launcher-troubleshooting/',
    answer:
      'Launcher errors often come from corrupted files, overlays, or antivirus conflicts—not the cheat loader.',
    detail: 'Verify files, reboot, then retest vanilla gameplay before adding modules.',
    tip: 'Capture exact error text for Discord—it speeds up support.',
  }),
  guideDiscussion({
    slug: 'external-loader',
    title: 'What does “external loader” mean?',
    upvotes: 46,
    excerpt: 'Software that runs beside the game client.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'External loader guide',
    sourcePath: '/blog/wt-external-loader/',
    answer:
      'External loaders typically render overlays without injecting into the War Thunder directory—still subject to enforcement risk.',
    detail: 'Updates ship through the portal; follow instructions there instead of third-party mirrors.',
    tip: 'Recheck compatibility notes after every major patch.',
  }),
  guideDiscussion({
    slug: 'stream-proof-obs',
    title: 'How can I test OBS capture safely?',
    upvotes: 21,
    excerpt: 'Record locally before streaming.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Stream-proof overlay setup',
    sourcePath: '/blog/wt-stream-proof/',
    answer:
      'Record a short clip with the same OBS scene you will stream and review playback for leaked overlays.',
    detail: 'Test game capture vs display capture separately—multi-monitor setups behave differently.',
    tip: 'Keep raw recordings until you are sure overlays stay hidden.',
  }),
  guideDiscussion({
    slug: 'after-hwid-change',
    title: 'What should I check after major hardware changes?',
    upvotes: 33,
    excerpt: 'Match portal instructions when swapping PCs or motherboards.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'HWID spoof vs new account paths',
    sourcePath: '/blog/wt-hwid-ban/',
    answer:
      'Update support with new hardware fingerprints, follow reset instructions, and avoid layering multiple spoof tools.',
    detail: 'Change one variable at a time so support can trace the failure.',
    tip: 'Use official Discord channels for device resets—not random utilities.',
  }),
  guideDiscussion({
    slug: 'before-install',
    title: 'What should I read before installing?',
    upvotes: 18,
    excerpt: 'Start with feature lists and portal requirements.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'War Thunder cheats features overview',
    sourcePath: '/blog/wt-cheat-features/',
    answer:
      'Read the Zadeyo listing, verify Windows and GPU support, then download only from the customer portal after checkout.',
    detail: 'If instructions conflict, trust the portal package dated after your purchase.',
    tip: 'Screenshot your loader version for future tickets.',
  }),
  guideDiscussion({
    slug: 'choose-wt-tier',
    title: 'How do I choose the right tier?',
    upvotes: 48,
    excerpt: 'Match modules to your role—not every feature is mandatory.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'How to buy War Thunder cheats',
    sourcePath: '/blog/buy-war-thunder-cheats/',
    answer:
      'List the features you need (ESP only vs aim assistance). Confirm them on Zadeyo, then follow the purchase workflow.',
    detail: 'Keep order emails for portal recovery and Discord verification.',
    tip: 'Ask billing questions through Support, not public threads.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'test-drive-vs-ranked',
    category: 'General',
    categoryTone: 'purple',
    title: 'Can Test Drive settings carry into Realistic Battles?',
    excerpt: 'Training modes stay separate from paid overlays used online.',
    author: 'guide_team',
    age: '2 hours ago',
    commentsCount: 3,
    upvotes: 128,
    flair: 'Guide Q&A',
    sourceTitle: 'Test Drive practice guide',
    sourcePath: '/blog/wt-test-drive-practice/',
    body: [
      'No. Test Drive and offline rooms help you practice mechanics—they do not unlock paid modules for multiplayer.',
      'Use Test Drive to set ESP range and smoothing, then purchase access through the official checkout link when ready for online play.',
    ],
    comments: [
      {
        author: 'ground_pound',
        age: '1 hour ago',
        score: 24,
        body: 'Treat Test Drive like a lab; live modules still need portal delivery.',
      },
      {
        author: 'cap_cloud',
        age: '48 min ago',
        score: 11,
        body: 'Write down baseline HUD settings before touching overlays—easier to revert.',
      },
      {
        author: 'rotor_rick',
        age: '35 min ago',
        score: 8,
        body: 'Good reminder: practice lobbies never equal enforcement safety.',
      },
    ],
  },
  {
    slug: 'wt-practice-settings-forum',
    category: 'General',
    categoryTone: 'purple',
    title: 'How do I open the War Thunder dev console?',
    excerpt: 'Enable it in launcher/game settings; hosts control cheat-enabled rooms.',
    author: 'guide_team',
    age: '4 hours ago',
    commentsCount: 2,
    upvotes: 86,
    flair: 'Guide Q&A',
    sourceTitle: 'How to use War Thunder cheats safely',
    sourcePath: '/blog/wt-cheat-setup/',
    body: [
      'Enable the console from War Thunder settings if available in your build. Custom rooms must allow cheats for built-in commands.',
      'If commands do nothing, verify room permissions and spelling. Official PvP queues ignore those commands.',
    ],
    comments: [
      {
        author: 'test_pilot',
        age: '3 hours ago',
        score: 17,
        body: 'Binding the console key in settings saves time on non-US keyboards.',
      },
      {
        author: 'sim_editor',
        age: '2 hours ago',
        score: 9,
        body: 'Spectators cannot always issue economy commands—check host options.',
      },
    ],
  },
  {
    slug: 'wt-high-alt',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'What is the safest way to practice energy fights?',
    excerpt: 'Use Test Drive or custom duels before trusting overlays in RB.',
    author: 'guide_team',
    age: '6 hours ago',
    commentsCount: 2,
    upvotes: 64,
    flair: 'Guide Q&A',
    sourceTitle: 'Training tips for aim assistance and ESP',
    sourcePath: '/blog/wt-training-tips/',
    body: [
      'Practice one profile at a time—turn overlays on briefly to read angles, then fight with minimal HUD clutter.',
      'Repeat the same route so callouts become instinct instead of staring at markers mid-merge.',
    ],
    comments: [
      {
        author: 'bf_line',
        age: '5 hours ago',
        score: 13,
        body: 'I toggle ESP off after the first circle to confirm I still know target aspect.',
      },
      {
        author: 'grid_merc',
        age: '4 hours ago',
        score: 6,
        body: 'Recording Test Drive sorties helps spot jerky aim even when it feels fine live.',
      },
    ],
  },
  {
    slug: 'after-wt-patch',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'What should I check after a War Thunder patch?',
    excerpt: 'Follow the patch checklist: status, loader, presets.',
    author: 'guide_team',
    age: '9 hours ago',
    commentsCount: 2,
    upvotes: 42,
    flair: 'Guide Q&A',
    sourceTitle: 'Patch day checklist for War Thunder cheats',
    sourcePath: '/blog/wt-patch-day/',
    body: [
      'Read Discord #status, download the newest portal loader, and run conservative presets in Test Drive before hopping into RB.',
      'If anything misbehaves, stop and capture logs instead of forcing old configs.',
    ],
    comments: [
      {
        author: 'sortie_safe',
        age: '8 hours ago',
        score: 12,
        body: 'Waiting 30 minutes after patch drop saved me from a half-updated loader.',
      },
      {
        author: 'field_ops',
        age: '7 hours ago',
        score: 7,
        body: 'Back up configs before updating—easy rollback if something breaks.',
      },
    ],
  },
  {
    slug: 'lite-vs-pro',
    category: 'Community',
    categoryTone: 'green',
    title: 'Does Pro always include every Lite module?',
    excerpt: 'Yes—Pro builds on Lite, but verify names on Zadeyo.',
    author: 'guide_team',
    age: '12 hours ago',
    commentsCount: 1,
    upvotes: 31,
    flair: 'Guide Q&A',
    sourceTitle: 'War Thunder Lite vs Pro',
    sourcePath: '/blog/wt-lite-vs-pro/',
    body: [
      'Pro should include Lite overlays plus aim assistance. If the listing ever diverges, trust Zadeyo and open a ticket.',
      'Choose Lite if you refuse automation entirely.',
    ],
    comments: [
      {
        author: 'hangar_cat',
        age: '10 hours ago',
        score: 10,
        body: 'Screenshot the feature table before buying—makes support conversations faster.',
      },
    ],
  },
  {
    slug: 'wt-aim-practice',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'How can I practice aim without full RB queues?',
    excerpt: 'Use Test Drive and custom duels with repeatable spawns.',
    author: 'guide_team',
    age: '1 day ago',
    commentsCount: 2,
    upvotes: 27,
    flair: 'Guide Q&A',
    sourceTitle: 'Test Drive practice guide',
    sourcePath: '/blog/wt-test-drive-practice/',
    body: [
      'Spawn the same vehicle class, fire controlled bursts, and reset when heat or ammo runs dry.',
      'Mirror your portal smoothness values so muscle memory matches live settings.',
    ],
    comments: [
      {
        author: 'ace_wren',
        age: '20 hours ago',
        score: 10,
        body: 'Short bursts beat mag dumps—you feel smoothing issues faster.',
      },
      {
        author: 'delta_doc',
        age: '18 hours ago',
        score: 5,
        body: 'Record clips even in Test Drive; replay catches snapping you miss live.',
      },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
