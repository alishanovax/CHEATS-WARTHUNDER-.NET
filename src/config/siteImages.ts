/** Approved War Thunder media — only these assets are used site-wide. */
export interface SiteCheatImage {
  src: string;
  alt: string;
}

const WAR_THUNDER_MEDIA = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/war-thunder/89ffd662-f17a-4470-ab15-e8c789401030/1793838600654-bb9oes-screenshot-2026-11-04-162755.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/war-thunder/89ffd662-f17a-4470-ab15-e8c789401030/1793838690297-ds2arz-screenshot-2026-11-04-162743.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/war-thunder/89ffd662-f17a-4470-ab15-e8c789401030/1793838698210-uxadh3-screenshot-2026-11-04-162822.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/war-thunder/89ffd662-f17a-4470-ab15-e8c789401030/1793838594963-vh0wlq-screenshot-2026-11-04-162734.webp',
] as const;

export const SITE_CHEAT_IMAGES: SiteCheatImage[] = [
  {
    src: WAR_THUNDER_MEDIA[0],
    alt: 'War Thunder PC match view with overlay UI — War Thunder cheats product context',
  },
  {
    src: WAR_THUNDER_MEDIA[1],
    alt: 'War Thunder vehicle combat scene on PC — software overlay reference screenshot',
  },
  {
    src: WAR_THUNDER_MEDIA[2],
    alt: 'War Thunder in-game interface on PC — gameplay visibility reference',
  },
  {
    src: WAR_THUNDER_MEDIA[3],
    alt: 'War Thunder battle environment on PC — product media from approved library',
  },
];

/** Product detail screenshot carousel (three slides). */
export const PRODUCT_GALLERY_IMAGES: SiteCheatImage[] = [
  SITE_CHEAT_IMAGES[0]!,
  SITE_CHEAT_IMAGES[1]!,
  SITE_CHEAT_IMAGES[2]!,
];

export const PRIMARY_CHEAT_IMAGE = SITE_CHEAT_IMAGES[0].src;

export function cheatImageForSlug(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash + slug.charCodeAt(i) * (i + 1)) % SITE_CHEAT_IMAGES.length;
  }
  return SITE_CHEAT_IMAGES[hash]!.src;
}

export function cheatImageAltForSrc(src: string): string {
  return SITE_CHEAT_IMAGES.find((img) => img.src === src)?.alt ?? SITE_CHEAT_IMAGES[0]!.alt;
}
