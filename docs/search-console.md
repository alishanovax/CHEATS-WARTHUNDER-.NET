# Search Console workflow (cheatswarthunder.net)

You verify the domain at your DNS provider—no HTML meta tags in the repo.

## Setup (once)

1. Open [Google Search Console](https://search.google.com/search-console) and add the **domain** property for `cheatswarthunder.net` if it is not already there.
2. Under **Sitemaps**, submit the index first (required):
   - `https://cheatswarthunder.net/sitemap.xml`
3. Optional — submit child sitemaps too (same URLs, clearer GSC status per section):
   - `https://cheatswarthunder.net/sitemap-pages.xml`
   - `https://cheatswarthunder.net/sitemap-products.xml`
   - `https://cheatswarthunder.net/sitemap-blog.xml`
   - `https://cheatswarthunder.net/sitemap-forum.xml`
4. Repeat in [Bing Webmaster Tools](https://www.bing.com/webmasters) if you use Bing.

## Monthly tune (15 minutes)

1. Search Console → **Performance** → **Search results**.
2. Sort by **Impressions** (last 28 days).
3. For each query that already maps to a page on your site, open the matching path in [`src/config/pageSeo.ts`](../src/config/pageSeo.ts).
4. Adjust `title` and `description` so the primary query appears naturally in the title (keep under ~60 characters for the title where possible).
5. Deploy. Allow 1–2 weeks before judging click-through changes.

## Path hack sheet

| Common query intent | Edit path in `pageSeo.ts` |
| ------------------- | ------------------------- |
| War Thunder cheats (broad) | `/` |
| lite / pro / elite | `/hacks/compare/`, `/hacks/lite/`, etc. |
| ESP, radar, aim assistance | `/products/war-thunder/pro/`, blog posts (titles set per article) |
| hwid, utilities | `/products/war-thunder/utilities/` |
| purchase / refund | `/terms/`, `/support/` |

Product and blog article pages still use their own titles from content; add entries to `PAGE_SEO` only when you want a fixed override for a specific pathname.

## Legacy URLs (Apex, R6, Borderlands, etc.)

The repo still **builds** HTML for older slugs so external links and bookmarks resolve. In production, **Cloudflare** (`public/_redirects` + Worker) and **Astro `redirects`** in [`astro.config.mjs`](../astro.config.mjs) should return **301** to the matching War Thunder route.

- **Sitemap**: `/go/` and `/404` are excluded from the generated sitemap ([`src/config/sitemap.ts`](../src/config/sitemap.ts)) — only indexable cheatswarthunder.net paths are listed.
- **Robots**: `Disallow: /go/` in `robots.txt` — keep checkout bridges out of focus as primary landing pages.
- **Monitoring**: In GSC, watch **Pages** / **Redirects** for legacy paths. If any stub page is **indexed** with duplicate titles (“Redirecting…”), ensure the host issues a **301** to the WT canonical, or add `noindex` on that stub template if you introduce one.

## Rich results / schema

Product markup uses **WebPage** JSON-LD (not Product/Offer without a verifiable price) on tier pages and `/go/war-thunder/` — see [`src/utils/schema.ts`](../src/utils/schema.ts). After deploy, spot-check URLs in [Rich Results Test](https://search.google.com/test/rich-results) and Lighthouse **SEO**.
