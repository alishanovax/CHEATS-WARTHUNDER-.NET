import { SLUG_REDIRECTS } from '../src/config/slug-redirects.mjs';

/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/war-thunder/'],
  ['/cheats/', '/products/war-thunder/'],
  ['/cheats/lite', '/products/war-thunder/lite/'],
  ['/cheats/lite/', '/products/war-thunder/lite/'],
  ['/cheats/pro', '/products/war-thunder/pro/'],
  ['/cheats/pro/', '/products/war-thunder/pro/'],
  ['/cheats/elite', '/products/war-thunder/elite/'],
  ['/cheats/elite/', '/products/war-thunder/elite/'],
  ['/cheats/compare', '/blog/wt-lite-vs-pro/'],
  ['/cheats/compare/', '/blog/wt-lite-vs-pro/'],
  ['/hacks', '/products/war-thunder/'],
  ['/hacks/', '/products/war-thunder/'],
  ['/hacks/lite', '/products/war-thunder/lite/'],
  ['/hacks/lite/', '/products/war-thunder/lite/'],
  ['/hacks/pro', '/products/war-thunder/pro/'],
  ['/hacks/pro/', '/products/war-thunder/pro/'],
  ['/hacks/elite', '/products/war-thunder/elite/'],
  ['/hacks/elite/', '/products/war-thunder/elite/'],
  ['/hacks/compare', '/blog/wt-lite-vs-pro/'],
  ['/hacks/compare/', '/blog/wt-lite-vs-pro/'],
  ['/products/war-thunder/utilities', '/products/war-thunder/utilities/'],
  ['/products/apex-legends-cheats', '/products/war-thunder/'],
  ['/products/apex-legends-cheats/', '/products/war-thunder/'],
  ['/products/apex-legends-cheats/lite', '/products/war-thunder/lite/'],
  ['/products/apex-legends-cheats/lite/', '/products/war-thunder/lite/'],
  ['/products/apex-legends-cheats/pro', '/products/war-thunder/pro/'],
  ['/products/apex-legends-cheats/pro/', '/products/war-thunder/pro/'],
  ['/products/apex-legends-cheats/elite', '/products/war-thunder/elite/'],
  ['/products/apex-legends-cheats/elite/', '/products/war-thunder/elite/'],
  ['/products/apex-legends-cheats/hwid-spoofer', '/products/war-thunder/hwid-spoofer/'],
  ['/products/apex-legends-cheats/hwid-spoofer/', '/products/war-thunder/hwid-spoofer/'],
  ['/products/apex-legends-cheats/ugc', '/products/war-thunder/ugc/'],
  ['/products/apex-legends-cheats/ugc/', '/products/war-thunder/ugc/'],
  ['/products/apex-legends-cheats/unlock-all', '/products/war-thunder/unlock-all/'],
  ['/products/apex-legends-cheats/unlock-all/', '/products/war-thunder/unlock-all/'],
  ['/products/apex-legends-cheats/utilities', '/products/war-thunder/utilities/'],
  ['/products/apex-legends-cheats/utilities/', '/products/war-thunder/utilities/'],
  ['/products/apex-hacks', '/products/war-thunder/'],
  ['/products/apex-hacks/', '/products/war-thunder/'],
  ['/products/apex-hacks/pro', '/products/war-thunder/pro/'],
  ['/products/apex-hacks/pro/', '/products/war-thunder/pro/'],
  ['/products/apex-hacks/lite', '/products/war-thunder/lite/'],
  ['/products/apex-hacks/lite/', '/products/war-thunder/lite/'],
  ['/products/apex-hacks/elite', '/products/war-thunder/elite/'],
  ['/products/apex-hacks/elite/', '/products/war-thunder/elite/'],
  ['/products/apex/account-recovery', '/products/war-thunder/ugc/'],
  ['/products/apex/account-recovery/', '/products/war-thunder/ugc/'],
  ['/products/dota-2-hacks', '/products/war-thunder/'],
  ['/products/dota-2-hacks/', '/products/war-thunder/'],
  ['/products/dota-2-hacks/elite', '/products/war-thunder/elite/'],
  ['/products/dota-2-hacks/elite/', '/products/war-thunder/elite/'],
  ['/products/dota-2-hacks/utilities', '/products/war-thunder/utilities/'],
  ['/products/dota-2-hacks/utilities/', '/products/war-thunder/utilities/'],
  ...Object.entries(SLUG_REDIRECTS),
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
