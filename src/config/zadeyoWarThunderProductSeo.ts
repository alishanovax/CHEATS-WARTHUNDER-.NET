/**
 * SSR copy for /go/war-thunder/ — mirror for Zadeyo /products/war-thunder listing.
 */
export const ZADEYO_WAR_THUNDER_CHECKOUT_URL =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fwar-thunder';

export const ZADEYO_WAR_THUNDER_PRODUCT_SEO = {
  title: 'War Thunder Cheats — PC access via Zadeyo checkout',
  description:
    'War Thunder PC cheats with configurable combat assistance and map overlays. Compare tiers on cheatswarthunder.net, then continue to Zadeyo when the status banner shows online.',
  h1: 'War Thunder Cheats — overlays, aim assistance & presets',
  h2ProductDetails: 'Product details',
  h2Features: 'Features',
  h2SystemRequirements: 'System requirements',
  h2Checkout: 'Checkout and delivery',
  h2Plans: 'Plans and billing',
  h2Loader: 'Loader, configs, and updates',
  h2Safety: 'Status checks before you play',
  logoAlt: 'War Thunder cheats — Zadeyo checkout',
  intro:
    'PC tools with map overlays and configurable aim assistance. Compare tiers on cheatswarthunder.net, then continue to Zadeyo when the status banner shows online.',
  sections: [
    {
      heading: 'Combat assistance',
      level: 'h3' as const,
      paragraphs: [
        'Configurable aim assistance with smoothness and visibility checks — align settings with the live module list on the Zadeyo product page before you buy.',
      ],
    },
    {
      heading: 'ESP and battlefield awareness',
      level: 'h3' as const,
      paragraphs: [
        'Vehicle and player overlays, distance readouts, and radar-style tools described on the product listing — presets ship in the customer portal.',
      ],
    },
  ],
  bodySections: [
    {
      id: 'checkout',
      headingKey: 'h2Checkout' as const,
      paragraphs: [
        'Payment and license delivery run on Zadeyo after you choose access. You receive digital loader access and setup guidance—no physical shipment.',
        'Use cheatswarthunder.net for tier tables, patch-day notes, and pre-purchase FAQ before you launch War Thunder on PC.',
      ],
    },
    {
      id: 'plans',
      headingKey: 'h2Plans' as const,
      paragraphs: [
        'Billing cycles and prices are shown on the Zadeyo checkout screen at purchase time. Confirm the current offer there before you pay.',
      ],
    },
    {
      id: 'loader',
      headingKey: 'h2Loader' as const,
      paragraphs: [
        'The customer portal hosts the current Windows loader, default configs, and save/load profiles.',
        'After a War Thunder or anti-cheat related update, reload the loader from the portal and read the homepage status banner before online play.',
      ],
    },
    {
      id: 'safety',
      headingKey: 'h2Safety' as const,
      paragraphs: [
        'Third-party tools carry ban risk. Start with conservative ranges and limited overlay clutter until sessions feel stable.',
        'Check Discord #status and the cheatswarthunder.net banner on patch days. Do not queue competitive modes while modules show offline or misaligned.',
      ],
    },
  ],
  screenshotAlts: [
    'War Thunder overlay screenshot 1',
    'War Thunder combat view screenshot 2',
    'War Thunder interface screenshot 3',
  ],
} as const;
