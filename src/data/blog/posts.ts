import type { BlogPostFull } from './types';
import { cheatImageForSlug } from '../../config/siteImages';
import { ROUTES } from '../../utils/path';

/** Internal checkout bridge — raw zadeyo.com URLs belong on /go/war-thunder/ only, not in prose. */
const BLOG_CHECKOUT_PATH = ROUTES.goWarThunder;

const blogPostsData: BlogPostFull[] = [
  {
    tag: 'Guides',
    title: 'Test Drive practice: tune ESP before online matches',
    slug: 'wt-test-drive-practice',
    image: cheatImageForSlug('wt-test-drive-practice'),
    desc: 'Use Test Drive and custom rooms to set ESP range and overlay clutter before PvP.',
    date: 'Oct 24, 2026',
    dateModified: '2026-11-07',
    readTime: '8 min read',
    body: [
      {
        type: 'p',
        text: `Test Drive and single-player rooms are the safest place to adjust overlays and aim smoothing. They do not replace live anti-cheat risk—private modules for online play come through [checkout](${BLOG_CHECKOUT_PATH}) and the customer portal.`,
      },
      {
        type: 'p',
        text: `This guide stays focused on practice workflow: how to iterate settings without flooding your HUD, how to sanity-check FPS, and when to stop tuning and read the [status tools](/products/war-thunder/) notes instead.`,
      },
      { type: 'h2', text: 'Test Drive vs online play' },
      {
        type: 'p',
        text: `Test Drive lets you test guns and flight models without queue pressure. Online Air RB and Ground RB need modules updated after patches. Compare tiers on [War Thunder products](/products/war-thunder/) when your settings feel stable.`,
      },
      {
        type: 'p',
        text: `Treat Test Drive as a lab: one variable at a time. Change ESP distance or overlay density—not both in the same session—or you will not know which knob fixed the clutter.`,
      },
      { type: 'h2', text: 'ESP tuning workflow' },
      {
        type: 'p',
        text: `Start with short ESP range, thick outlines off, and one threat type at a time. Raise distance only after you can read the minimap without staring at boxes. See [wall ESP setup](/blog/wt-esp-setup/) and [radar guide](/blog/wt-radar/).`,
      },
      { type: 'h3', text: 'Iteration loop' },
      {
        type: 'ol',
        items: [
          'Set a baseline profile with conservative distance and low opacity.',
          'Run one engagement type (e.g. SPAA vs air) for 10 minutes.',
          'Note: CPU/GPU frametime, eye strain, and whether callouts match what you see.',
          'Adjust one slider, repeat. Save the profile when stable.',
        ],
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
      { type: 'h2', text: 'When you are ready for multiplayer' },
      {
        type: 'p',
        text: `Move online only after: stable FPS, readable overlays, and confirmation from the portal that your build matches the live client. Follow [patch day steps](/blog/wt-patch-day/) after game updates.`,
      },
      {
        type: 'cta',
        title: 'Ready for online tools?',
        text: 'Test Drive validates settings; checkout unlocks modules for live playlists.',
        href: BLOG_CHECKOUT_PATH,
      },
      {
        type: 'p',
        text: 'War Thunder Cheats at cheatswarthunder.net links to War Thunder tooling for Windows PC. We are not affiliated with Gaijin Entertainment. Check status after every patch.',
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
    dateModified: '2026-11-07',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: `Training rooms teach mechanics; ranked online play needs updated loaders from [checkout](${BLOG_CHECKOUT_PATH}). Keep those workflows separate so you never mistake “offline practice” for “live-safe.”`,
      },
      { type: 'h2', text: 'Session structure (30 minutes)' },
      {
        type: 'ol',
        items: [
          'Minutes 0–5: warm up with stock ESP + no aim assist—relearn threat priority.',
          'Minutes 5–15: ground or air only (pick one roster for the week).',
          'Minutes 15–25: raise difficulty—smaller targets, longer ranges, or night maps.',
          'Minutes 25–30: log notes: jittery aim? Unreadable boxes? Portal build number?',
        ],
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
      { type: 'h2', text: 'Ground vs air habits' },
      {
        type: 'p',
        text: `Ground RB rewards patience: scan lanes, hold angles, avoid tunneling on one ESP box. Air RB rewards energy: use radar-style cues to time turns, not to chase every dot. If you bounce between modes daily, duplicate profiles per mode so sliders stay honest.`,
      },
      {
        type: 'h2',
        text: 'Common mistakes',
      },
      {
        type: 'ul',
        items: [
          'Cranking smoothness to hide bad lead—fix lead first in Test Drive.',
          'Matching streamer FOV and sens without matching their vehicle roster.',
          'Skipping portal release notes after a minor launcher patch.',
        ],
      },
      {
        type: 'cta',
        title: 'Compare Pro tier',
        text: 'Pro adds aim assistance on top of Lite ESP—checkout on Zadeyo.',
        href: BLOG_CHECKOUT_PATH,
      },
      {
        type: 'p',
        text: `For ranked-specific habits, read [aim assistance for competitive play](/blog/wt-aimbot-ranked/) after you finish baseline drills.`,
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
    dateModified: '2026-11-07',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: `New players sometimes confuse Test Drive with paid overlays. Training modes do not grant online modules—see [products](/products/war-thunder/) and use [checkout](${BLOG_CHECKOUT_PATH}) for live access.`,
      },
      {
        type: 'p',
        text: `“Safely” here means operational discipline: verify sources, reduce attack surface on your PC, and assume enforcement risk any time third-party tools touch a live client.`,
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
      { type: 'h2', text: 'Before first launch' },
      {
        type: 'ul',
        items: [
          'Close overlay-heavy apps (FPS monitors, RGB suites) if the portal warns about conflicts.',
          'Run a single display resolution and scaling for your first session—change one thing at a time.',
          'Export a vanilla War Thunder graphics preset you can restore.',
        ],
      },
      { type: 'h2', text: 'Account and machine hygiene' },
      {
        type: 'p',
        text: `Use a unique password for your order email, enable two-factor wherever the vendor supports it, and keep proof of purchase. If you ever need [launcher troubleshooting](/blog/wt-launcher-troubleshooting/), support will ask for client version and logs—prepare those calmly, not in the middle of a match.`,
      },
      { type: 'h2', text: 'After patches' },
      {
        type: 'p',
        text: `Follow [patch day checklist](/blog/wt-patch-day/): wait for “safe build” notes, reinstall the loader, and retest in Test Drive before long RB sessions.`,
      },
      {
        type: 'cta',
        title: 'Secure checkout',
        text: 'One Zadeyo link for every buy button on this site.',
        href: BLOG_CHECKOUT_PATH,
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
    dateModified: '2026-11-07',
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
      { type: 'h2', text: 'How to compare tiers on this site' },
      {
        type: 'ul',
        items: [
          '[Product hub](/products/war-thunder/) — roadmap of tiers and utilities.',
          '[Lite vs Pro](/blog/wt-lite-vs-pro/) — awareness vs automation.',
          '[Elite tier](/blog/wt-elite-tier/) — when bundles and slots matter.',
        ],
      },
      {
        type: 'h2',
        text: 'Feature categories (conceptual)',
      },
      {
        type: 'table',
        headers: ['Category', 'Typical Lite role', 'Typical Pro add-on'],
        rows: [
          ['Awareness', 'ESP boxes, class hints, distance', 'Finer filters tied to combat presets'],
          ['Radar / mini cues', 'Merge timing, spacing', 'Optional sync with combat profile'],
          ['Aim stack', 'Usually off by design', 'Smoothing, lead helpers—per portal naming'],
          ['Quality-of-life', 'Minimal', 'May include stream-proof toggles when listed'],
        ],
      },
      { type: 'h2', text: 'What we do not promise' },
      {
        type: 'p',
        text: `No blog post guarantees a module survives the next War Thunder build. Naming, defaults, and availability change. If a friend quotes a feature, verify on Zadeyo the same day you pay.`,
      },
      {
        type: 'cta',
        title: 'Open checkout listing',
        text: 'Confirm modules and price on Zadeyo before buying.',
        href: BLOG_CHECKOUT_PATH,
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
    dateModified: '2026-11-07',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: `Practice modes teach lead and energy management. External overlays for multiplayer ship through [checkout](${BLOG_CHECKOUT_PATH}) and the customer portal.`,
      },
      { type: 'h2', text: 'What practice can do' },
      {
        type: 'ul',
        items: [
          'Rebuild muscle memory for cannons vs machine guns.',
          'Learn when overlays add signal vs noise on each map.',
          'Validate FPS headroom before you touch live lobbies.',
        ],
      },
      { type: 'h2', text: 'What practice cannot do' },
      {
        type: 'p',
        text: `Offline rooms do not replicate queue stress, packet jitter, or the full anti-cheat surface. Ranked habits—limiting tunnel vision, comms with squads, spawn discipline—come from real matches, not infinite respawns.`,
      },
      { type: 'h2', text: 'When to switch' },
      {
        type: 'p',
        text: `Move online only after stable FPS, readable ESP, and portal confirmation that the build matches your client version.`,
      },
      { type: 'h2', text: 'Profile hygiene' },
      {
        type: 'p',
        text: `Name files clearly: \`practice-air-rb.json\` vs \`live-air-rb.json\`. If the portal exports presets, back them up before patches. Pair this guide with [Test Drive tuning](/blog/wt-test-drive-practice/) for overlay-specific drills.`,
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
    dateModified: '2026-11-07',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: `Lite keeps you informed with ESP and radar-style tools. Pro adds aim assistance. Pick Lite if you refuse automation; pick Pro if you want both stacks.`,
      },
      {
        type: 'h2',
        text: 'Who should pick Lite',
      },
      {
        type: 'ul',
        items: [
          'You want minimap clarity without touching aim automation.',
          'You are fine leading shots manually once you see the target.',
          'You prefer fewer moving parts when patching breaks loaders.',
        ],
      },
      {
        type: 'h2',
        text: 'Who should pick Pro',
      },
      {
        type: 'ul',
        items: [
          'You already cap ESP sensibly and want smoother gun solutions.',
          'You play vehicles with mixed shell velocities and need repeatable presets.',
          'You accept more tuning surface area (more sliders, more failure modes).',
        ],
      },
      {
        type: 'p',
        text: `Neither tier removes enforcement risk—read cheatswarthunder.net status and use conservative settings.`,
      },
      {
        type: 'h2',
        text: 'Decision worksheet',
      },
      {
        type: 'table',
        headers: ['Question', 'Lean Lite', 'Lean Pro'],
        rows: [
          ['Do you distrust any aim automation?', 'Yes', 'No'],
          ['Is your bottleneck awareness or gun solution?', 'Awareness', 'Gun solution'],
          ['Do you stream or record?', 'Often simpler overlay stack', 'May need stream-proof + profile discipline'],
        ],
      },
      {
        type: 'cta',
        title: 'Choose a tier',
        text: 'Checkout lists current module bundles.',
        href: BLOG_CHECKOUT_PATH,
      },
      {
        type: 'p',
        text: `Still unsure? Read [training tips](/blog/wt-training-tips/) first—if you cannot hold a stable training profile offline, tier shopping is premature.`,
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
    dateModified: '2026-11-07',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: `Elite is for players who want the full module list in one license when Zadeyo shows availability. Slots may be capped—check Discord before paying.`,
      },
      { type: 'h2', text: 'Signals you are ready' },
      {
        type: 'ul',
        items: [
          'You already exhaust Lite/Pro presets and need listed extras.',
          'You maintain backups and can roll back after patches quickly.',
          'You read patch notes instead of blaming “random bans.”',
        ],
      },
      { type: 'h2', text: 'Discipline' },
      {
        type: 'p',
        text: `Extra power needs slower tuning curves. Test in Test Drive, then short RB sessions, then longer sessions.`,
      },
      { type: 'h2', text: 'Support and slots' },
      {
        type: 'p',
        text: `When inventory is limited, vendors prioritize existing customers with clean tickets. Include order email, Windows build, and game branch (Steam vs standalone) when you ask about availability.`,
      },
      {
        type: 'h2',
        text: 'Related utilities',
      },
      {
        type: 'p',
        text: `Elite sometimes overlaps with [utilities](/products/war-thunder/utilities/) such as preview tools—always match what you need this month to what Zadeyo lists today, not what a forum thread promised last year.`,
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
    dateModified: '2026-11-07',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: `RB fights reward smooth tracking over twitch snapping. [Pro tier](/products/war-thunder/pro/) ships aim tools on top of Lite—confirm exact sliders on the portal.`,
      },
      { type: 'h2', text: 'Smoothness first' },
      {
        type: 'p',
        text: `High smoothness hides bad habits for one match, then punish you when lead windows shrink. Start at the portal’s conservative defaults and increase in small steps (about 5% at a time) while watching replay camera, not kill feed.`,
      },
      { type: 'h2', text: 'Lead and ballistics' },
      {
        type: 'ul',
        items: [
          'Separate presets for cannons vs MGs when the portal allows.',
          'Track closure rate: merge fights need gentler corrections than head-ons.',
          'Ground RB: respect shell drop—aim solutions are not a substitute for positioning.',
        ],
      },
      { type: 'h2', text: 'Visibility and comms' },
      {
        type: 'p',
        text: `Ranked squads win on callouts. If ESP says one thing and voice says another, trust voice first—overlay lag and occlusion happen. Cross-link [radar habits](/blog/wt-radar/) for spacing language your squad can repeat.`,
      },
      { type: 'h2', text: 'After a bad streak' },
      {
        type: 'p',
        text: `If sessions feel “off,” revert to Lite-only awareness for a night. Fatigue and ping spikes mimic bad aim settings. Log client build numbers—patch mismatches feel like “broken aim” when they are really version skew.`,
      },
      {
        type: 'cta',
        title: 'Unlock Pro access',
        text: 'Purchase through the single Zadeyo checkout link.',
        href: BLOG_CHECKOUT_PATH,
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
    dateModified: '2026-11-07',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: `ESP on [Lite](/products/war-thunder/lite/) should answer one question: “Is that target a threat now?” If overlays spam text, reduce filters before raising range.`,
      },
      { type: 'h2', text: 'Start with constraints' },
      {
        type: 'ol',
        items: [
          'Set max distance 20–30% lower than you think you need.',
          'Disable duplicate labels—one line per target beats three.',
          'Tune color against worst-case terrain (snow, desert haze, night).',
        ],
      },
      { type: 'h2', text: 'Air battles' },
      {
        type: 'p',
        text: `Altitude bands matter more than horizontal distance. If boxes stack vertically, narrow aircraft classes shown in overlay filters. Pair with [radar guide](/blog/wt-radar/) so radar cues and ESP agree.`,
      },
      { type: 'h2', text: 'Ground battles' },
      {
        type: 'p',
        text: `Cull non-threat classes during pushes—SPAA sessions need different filters than tank brawls. Save a “city map” profile with shorter draw distances to reduce building overlap.`,
      },
      { type: 'h2', text: 'Debug checklist' },
      {
        type: 'ul',
        items: [
          'If frames dip, lower overlay refresh or opacity before lowering game graphics.',
          'If teammates look like enemies, fix team color first—do not touch combat sliders.',
          'If targets pop in late, verify game LOD and network—not always ESP fault.',
        ],
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
    dateModified: '2026-11-07',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: `Radar overlays help you see merges earlier—cap range so friends can still read the screen. Works with Lite and higher tiers when listed.`,
      },
      { type: 'h2', text: 'Range discipline' },
      {
        type: 'p',
        text: `Long range feels powerful until every dot looks the same. Set a ring that matches your weapon effective band plus one closure step—not the entire map.`,
      },
      { type: 'h2', text: 'Spacing language for squads' },
      {
        type: 'table',
        headers: ['Callout', 'Meaning'],
        rows: [
          ['“Two low, north cliff”', 'Angle + altitude band, not vague “behind”'],
          ['“Merge in four”', 'Time-to-intercept estimate from radar closure'],
          ['“Spam SPAA”', 'Threat priority—everyone snapshots the same target class'],
        ],
      },
      { type: 'h2', text: 'Combining radar + ESP' },
      {
        type: 'p',
        text: `When both show the same target, trust radar for closure timing and ESP for line-of-sight. If they disagree, you may be desynced or looking at a decoy spawn—slow down, reposition.`,
      },
      {
        type: 'p',
        text: `Related: [ESP setup](/blog/wt-esp-setup/) for clutter control and [ranked aim habits](/blog/wt-aimbot-ranked/) when dots turn into gun solutions.`,
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
    dateModified: '2026-11-07',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: `Preview utilities change what you see locally—opponents still see your real unlocks. Bundled with Elite when the listing says so; also sold standalone.`,
      },
      { type: 'h2', text: 'What “local preview” means' },
      {
        type: 'ul',
        items: [
          'You may rotate camos or models in hangar without server trust.',
          'Battle servers still enforce owned vehicles and modifications.',
          'Screenshots for thumbnails are fine; claiming shop items you do not own is not.',
        ],
      },
      { type: 'h2', text: 'Workflow tips' },
      {
        type: 'ol',
        items: [
          'Screenshot reference layouts before you tweak.',
          'Keep separate folders per season so you can roll back art direction.',
          'If previews glitch after patches, repair game files before opening tickets.',
        ],
      },
      {
        type: 'h2',
        text: 'Where to verify bundling',
      },
      {
        type: 'p',
        text: `Check [utilities hub](/products/war-thunder/utilities/) and Zadeyo for whether preview tools ship with Elite or standalone. Availability changes—do not rely on old forum screenshots.`,
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
    dateModified: '2026-11-07',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: `Major War Thunder drops change file hashes, shaders, and sometimes anti-cheat behavior. Treat every patch like a mini launch day.`,
      },
      {
        type: 'ul',
        items: [
          'Read Discord #status before launching overlays.',
          'Download the latest portal loader.',
          'Disable aggressive settings until confirmation posts land.',
          'Test in Test Drive or low-tier AB before RB.',
        ],
      },
      { type: 'h2', text: 'Order of operations' },
      {
        type: 'ol',
        items: [
          'Update the game client fully—no partial downloads.',
          'Verify files if the launcher offers repair.',
          'Install the loader build pinned in #status.',
          'Load vanilla graphics once, then reapply overlay presets.',
        ],
      },
      { type: 'h2', text: 'Signs you should stop playing' },
      {
        type: 'ul',
        items: [
          'Loader inject fails twice with the same error code.',
          'ESP offsets clearly wrong (floating boxes, wrong nation colors).',
          'Portal says “investigating”—trust that over hopium Reddit threads.',
        ],
      },
      {
        type: 'p',
        text: `If problems persist, walk through [launcher troubleshooting](/blog/wt-launcher-troubleshooting/) before attributing everything to overlays.`,
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
    dateModified: '2026-11-07',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: `Pair [HWID spoofer](/products/war-thunder/hwid-spoofer/) with portal diagnostics when hardware flags are likely. Use [UGC](/products/war-thunder/ugc/) for structured appeals—not instant unbans.`,
      },
      { type: 'h2', text: 'Understand the problem class' },
      {
        type: 'p',
        text: `HWID tools address identity mismatches when the vendor documents them. They do not erase ToS violations or magically clean ban waves.`,
      },
      { type: 'h2', text: 'When appeals beat spoofing' },
      {
        type: 'ul',
        items: [
          'False positive after hardware upgrade—document receipts and driver versions.',
          'Shared PC environments—prove account separation.',
          'Vacation bans triggered by payment fraud flags—different support path.',
        ],
      },
      { type: 'h2', text: 'Ticket quality' },
      {
        type: 'p',
        text: `Good tickets include: account email, approximate ban time, Windows build, antivirus list, and whether other cheats were ever installed on the OS. Rage paragraphs get slower replies than timelines.`,
      },
      {
        type: 'p',
        text: `This site does not provide legal advice. Follow publisher rules and your regional consumer laws when disputing digital goods.`,
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
    dateModified: '2026-11-07',
    readTime: '5 min read',
    body: [
      { type: 'h2', text: 'Before you pay' },
      {
        type: 'ul',
        items: [
          'Read [Lite vs Pro](/blog/wt-lite-vs-pro/) so you buy the right stack.',
          'Skim [safe setup](/blog/wt-cheat-setup/) for hygiene expectations.',
          'Confirm your Windows version matches portal docs.',
        ],
      },
      { type: 'h2', text: 'Steps' },
      {
        type: 'ol',
        items: [
          'Compare tiers on cheatswarthunder.net.',
          `Continue with [checkout](${BLOG_CHECKOUT_PATH}).`,
          'Save your order email for portal access.',
          'Download the loader and follow the PDF/video guide.',
        ],
      },
      { type: 'h2', text: 'After purchase' },
      {
        type: 'ul',
        items: [
          'Whitelist the loader folder in AV only if the portal instructs you.',
          'Back up license keys and preset exports off-disk.',
          'Join the vendor Discord from the receipt—never third-party invites.',
        ],
      },
      {
        type: 'h2',
        text: 'Refund and expectations',
      },
      {
        type: 'p',
        text: `Digital license policies live on Zadeyo and your receipt. This site summarizes navigation only—see [terms](/terms/) for how we describe referrals.`,
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
    dateModified: '2026-11-07',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: `Cannons and machine guns need different smoothing. Build one profile per vehicle class when the portal supports it.`,
      },
      { type: 'h2', text: 'Why split profiles' },
      {
        type: 'p',
        text: `A 20mm burst window is not a 7.62 spray window. Sharing one profile across jets and SPAA causes visible over-correction or sluggish turret moves.`,
      },
      { type: 'h2', text: 'Naming convention' },
      {
        type: 'ul',
        items: [
          '`air-turnfighter-cannon`',
          '`air-bomber-defensive-mg`',
          '`ground-mbt-heat`',
          '`spaa-osprey-track`',
        ],
      },
      { type: 'h2', text: 'Tuning loop' },
      {
        type: 'ol',
        items: [
          'Pick one stock vehicle you play weekly.',
          'Run three offline duels, log overshoot vs undershoot trends.',
          'Adjust smoothness until replays stop “rubber-banding.”',
          'Clone the profile for sibling vehicles, tweak 5% at a time.',
        ],
      },
      {
        type: 'p',
        text: `Tie this workflow to [training tips](/blog/wt-training-tips/) so you do not stack aim fixes on top of unreadable ESP.`,
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
    dateModified: '2026-11-07',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: `Repair the War Thunder client, reboot, then retest before opening loader tickets. False positives waste time when overlays were never the problem.`,
      },
      { type: 'h2', text: 'Baseline triage' },
      {
        type: 'ol',
        items: [
          'Confirm free disk space (game + cache + shadow copies).',
          'Run the launcher “Check files” / repair.',
          'Disable optional overlays (Discord, Afterburner) for one boot.',
          'Launch vanilla, join a Test Drive session, exit cleanly.',
        ],
      },
      { type: 'h2', text: 'When to involve cheat support' },
      {
        type: 'ul',
        items: [
          'Loader logs show inject denied after a clean repair.',
          'Identical error on two different Windows user accounts.',
          'Game starts but overlay never hooks—include DX/Vulkan mode info.',
        ],
      },
      {
        type: 'h2',
        text: 'Capture evidence',
      },
      {
        type: 'p',
        text: `Screenshots of launcher version, game branch (Steam vs standalone), and loader build hash speed up fixes. Mention whether Secure Boot or HVCI settings changed recently.`,
      },
      {
        type: 'p',
        text: `After fixes, revisit [patch day checklist](/blog/wt-patch-day/)—updates often masquerade as “random” loader failures.`,
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
    dateModified: '2026-11-07',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: `External loaders render overlays outside the game process in many setups. Risk remains—follow status and Terms.`,
      },
      { type: 'h2', text: 'What “external” implies' },
      {
        type: 'ul',
        items: [
          'Often draws ESP via overlay instead of internal hooks—still detectable.',
          'Requires elevate or exclusion steps when AV flags unsigned binaries.',
          'Depends on timely updates when the game updates shaders or protections.',
        ],
      },
      { type: 'h2', text: 'Update pipeline' },
      {
        type: 'p',
        text: `Expect: game patch → vendor validation → new loader hash → Discord announcement. Do not sideload “hotfix” builds from DMs; they bypass the chain of trust.`,
      },
      { type: 'h2', text: 'Security habits' },
      {
        type: 'ol',
        items: [
          'Download only from the customer portal linked in your receipt.',
          'Keep installers in a versioned folder (v2025-12-14).',
          'Compare checksums when the portal publishes them.',
        ],
      },
      {
        type: 'p',
        text: `Pair with [safe setup](/blog/wt-cheat-setup/) before you wire any auto-start tasks.`,
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
    dateModified: '2026-11-07',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: `Record locally before going live. If overlays appear in OBS, toggle stream-proof options from the portal when available or switch capture sources.`,
      },
      { type: 'h2', text: 'OBS capture modes' },
      {
        type: 'table',
        headers: ['Method', 'Risk'],
        rows: [
          ['Game Capture + “capture third-party overlays” off', 'Lower leak risk'],
          ['Display Capture', 'Highest leak risk—avoid for competitive setups'],
          ['Window Capture of game only', 'Middle risk—test with a 60s recording'],
        ],
      },
      { type: 'h2', text: 'Verification ritual' },
      {
        type: 'ol',
        items: [
          'Record 2 minutes of Test Drive with overlays on.',
          'Pause, zoom the timeline—are faint ESP lines visible?',
          'Repeat with stream-proof toggle flipped.',
          'Only then test Twitch/YouTube output with a private stream key.',
        ],
      },
      {
        type: 'p',
        text: `Platform ToS still apply: “stream-proof” is a technical label, not permission to violate broadcaster rules. When in doubt, disable overlays entirely for the broadcast.`,
      },
      {
        type: 'p',
        text: `Related: [ESP readability](/blog/wt-esp-setup/) and [training routines](/blog/wt-training-tips/).`,
      },
    ],
  },
];

export const blogPosts: BlogPostFull[] = blogPostsData;
