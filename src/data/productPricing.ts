export type ProductPlanId = 'monthly' | 'lifetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  duration: string;
  priceUsd: number | null;
  priceNote: string;
  popular?: boolean;
}

/** Pricing varies by Zadeyo offer — UI uses neutral copy; checkout shows live price. */
const standardPlans: ProductPlan[] = [
  {
    id: 'monthly',
    label: 'Monthly',
    duration: 'Time-limited access',
    priceUsd: null,
    priceNote: 'See Zadeyo checkout',
    popular: true,
  },
  {
    id: 'lifetime',
    label: 'Extended',
    duration: 'Long-term access',
    priceUsd: null,
    priceNote: 'See Zadeyo checkout',
  },
];

export function getProductPlans(_productSlug?: string): ProductPlan[] {
  return standardPlans;
}

export function getDefaultPlan(productSlug?: string): ProductPlan {
  const plans = getProductPlans(productSlug);
  return plans.find((plan) => plan.popular) ?? plans[0]!;
}

export function formatPlanPrice(usd: number | null): string {
  if (usd === null) return 'See checkout';
  return Number.isInteger(usd) ? `$${usd}` : `$${usd.toFixed(2)}`;
}

/** Checkout uses a single Zadeyo URL; plan selection updates UI only. */
export function checkoutUrlWithPlan(baseUrl: string, _planId: ProductPlanId): string {
  return baseUrl;
}
