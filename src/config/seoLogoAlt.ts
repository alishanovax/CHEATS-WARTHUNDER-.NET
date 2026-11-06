import { normalizeSeoPath } from './pageSeo';

/** Footer logo alt text matched to each route’s audit keyword (exact phrases). */
const LOGO_ALT_BY_PATH: Record<string, string> = {
  '/products/war-thunder/': 'War Thunder – War Thunder Cheats shop logo',
  '/about/': 'War Thunder cheats – logo',
  '/blog/': 'War Thunder guides – logo',
  '/faq/': 'FAQ – logo',
  '/forum/': 'Forum – logo',
  '/privacy/': 'Privacy – logo',
  '/support/': 'Support – logo',
  '/terms/': 'Terms – logo',
  '/products/war-thunder/utilities/': 'Utilities – War Thunder Cheats logo',
  '/war-thunder-cheats/': 'War Thunder Cheats logo',
};

export function footerLogoAltForPath(pathname: string): string {
  const path = normalizeSeoPath(pathname);
  return LOGO_ALT_BY_PATH[path] ?? 'War Thunder Cheats logo';
}
