export type SkinType = 'dry' | 'oily' | 'sensitive' | 'combination' | 'all';
export type SkinConcern = 'acne' | 'pigmentation' | 'hydration' | 'anti-aging' | 'all';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'cleanser' | 'serum' | 'moisturizer' | 'sunscreen' | 'treatment';
  skinTypes: SkinType[];
  concerns: SkinConcern[];
  ingredients: string[];
  usage: string;
  featured?: boolean;
  bestFor?: string;
  doNotMix?: string[];
  whenToApply?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Hydrating Hyaluronic Serum',
    description: 'Deep hydration serum with multiple molecular weights of hyaluronic acid',
    price: 38,
    image: 'https://images.unsplash.com/photo-1643379850623-7eb6442cd262?w=500',
    category: 'serum',
    skinTypes: ['dry', 'combination', 'sensitive', 'all'],
    concerns: ['hydration', 'anti-aging'],
    ingredients: ['Hyaluronic Acid', 'Vitamin B5', 'Glycerin'],
    usage: 'Apply 2-3 drops to damp skin morning and evening',
    featured: true,
    bestFor: 'Dehydrated skin and fine lines',
    whenToApply: 'Morning and evening after cleansing',
    doNotMix: ['Strong acids', 'Pure vitamin C']
  },
  {
    id: '2',
    name: 'Vitamin C Brightening Serum',
    description: 'Powerful antioxidant serum for radiant, even-toned skin',
    price: 45,
    image: 'https://images.unsplash.com/photo-1686831758227-1802d0ba5eda?w=500',
    category: 'serum',
    skinTypes: ['all'],
    concerns: ['pigmentation', 'anti-aging'],
    ingredients: ['L-Ascorbic Acid 15%', 'Ferulic Acid', 'Vitamin E'],
    usage: 'Apply in the morning before sunscreen',
    featured: true,
    bestFor: 'Dull skin and dark spots',
    whenToApply: 'Morning only',
    doNotMix: ['Retinol', 'Niacinamide', 'AHAs/BHAs']
  },
  {
    id: '3',
    name: 'Gentle Foaming Cleanser',
    description: 'pH-balanced cleanser that removes impurities without stripping',
    price: 24,
    image: 'https://images.unsplash.com/photo-1556228994-efb7c88fa0f9?w=500',
    category: 'cleanser',
    skinTypes: ['all'],
    concerns: ['all'],
    ingredients: ['Ceramides', 'Amino Acids', 'Glycerin'],
    usage: 'Use morning and evening with lukewarm water',
    bestFor: 'Daily cleansing for all skin types',
    whenToApply: 'Morning and evening'
  },
  {
    id: '4',
    name: 'Niacinamide Clear Serum',
    description: 'Minimizes pores and reduces blemishes with 10% niacinamide',
    price: 32,
    image: 'https://images.unsplash.com/photo-1643379850623-7eb6442cd262?w=500',
    category: 'serum',
    skinTypes: ['oily', 'combination'],
    concerns: ['acne', 'pigmentation'],
    ingredients: ['Niacinamide 10%', 'Zinc PCA', 'Tapioca Starch'],
    usage: 'Apply 2-3 drops morning and evening',
    featured: true,
    bestFor: 'Oily skin and enlarged pores',
    whenToApply: 'Morning and evening',
    doNotMix: ['Pure vitamin C']
  },
  {
    id: '5',
    name: 'Rich Barrier Cream',
    description: 'Intensive moisturizer that strengthens the skin barrier',
    price: 42,
    image: 'https://images.unsplash.com/photo-1686831758227-1802d0ba5eda?w=500',
    category: 'treatment',
    skinTypes: ['dry', 'sensitive'],
    concerns: ['hydration'],
    ingredients: ['Ceramide Complex', 'Squalane', 'Peptides'],
    usage: 'Apply as the last step in your routine',
    bestFor: 'Dry and sensitive skin',
    whenToApply: 'Morning and evening'
  },
  {
    id: '6',
    name: 'Mineral Sunscreen SPF 50',
    description: 'Broad-spectrum protection with invisible finish',
    price: 36,
    image: 'https://images.unsplash.com/photo-1731577178431-a40f8afac843?w=500',
    category: 'sunscreen',
    skinTypes: ['all'],
    concerns: ['all'],
    ingredients: ['Zinc Oxide 15%', 'Titanium Dioxide 5%', 'Niacinamide'],
    usage: 'Apply as the last step every morning. Reapply every 2 hours',
    bestFor: 'Daily sun protection',
    whenToApply: 'Morning only, reapply throughout day'
  },
  {
    id: '7',
    name: 'Retinol Night Treatment',
    description: 'Gentle retinol formula for smooth, youthful skin',
    price: 52,
    image: 'https://images.unsplash.com/photo-1643379850623-7eb6442cd262?w=500',
    category: 'serum' ,
    skinTypes: ['all'],
    concerns: ['anti-aging', 'acne' ],
    ingredients: ['Retinol 0.5%', 'Hyaluronic Acid', 'Peptides'],
    usage: 'Apply at night, start 2x per week',
    featured: true,
    bestFor: 'Anti-aging and texture improvement',
    whenToApply: 'Evening only',
    doNotMix: ['Vitamin C', 'AHAs/BHAs', 'Benzoyl Peroxide']
  },
  {
    id: '8',
    name: 'Exfoliating AHA/BHA Toner',
    description: 'Dual-action exfoliant for smooth, clear skin',
    price: 28,
    image: 'https://images.unsplash.com/photo-1686831758227-1802d0ba5eda?w=500',
    category: 'treatment',
    skinTypes: ['oily', 'combination'],
    concerns: ['acne', 'pigmentation'],
    ingredients: ['Glycolic Acid 7%', 'Salicylic Acid 2%', 'Aloe Vera'],
    usage: 'Use 2-3 times per week in the evening',
    bestFor: 'Textured and congested skin',
    whenToApply: 'Evening, 2-3x per week',
    doNotMix: ['Retinol', 'Vitamin C']
  },
{
  id: '9',
  name: 'SKIN1004 Madagascar Centella Light Cleansing Oil',
  description: 'A lightweight cleansing oil that gently dissolves makeup, sunscreen, excess oils, and impurities while calming and hydrating the skin.',
  price: 27,
  image: 'https://m.media-amazon.com/images/I/61ZG5xWuA+L._AC_SL1500_.jpg',
  category: 'cleanser',
  skinTypes: ['all'],
  concerns: ['acne', 'hydration'],
  ingredients: [
    'Centella Asiatica Extract',
    'Sunflower Seed Oil',
    'Jojoba Seed Oil'
  ],
  usage: 'Apply to dry skin, massage, emulsify with water, rinse. Follow with water-based cleanser.',
  featured: true,
  bestFor: 'Makeup removal and calming acne-prone skin',
  whenToApply: 'Evening (first cleanse)',
  doNotMix: []
},
{
  id: '10',
  name: 'CeraVe Renewing SA Cleanser',
  description: 'Gentle exfoliating cleanser that unclogs pores and smooths texture.',
  price: 18,
  image: 'https://i.pinimg.com/736x/e7/df/ce/e7dfce9bdb847c615823e14df470e770.jpg',
  category: 'cleanser',
  skinTypes: ['oily', 'combination', 'all'],
  concerns: ['acne', 'pigmentation'],
  ingredients: [
    'Salicylic Acid',
    'Ceramides',
    'Niacinamide',
    'Hyaluronic Acid'
  ],
  usage: 'Use once daily, preferably at night.',
  featured: false,
  bestFor: 'Acne, blackheads, rough texture',
  whenToApply: 'Evening',
  doNotMix: ['Retinol', 'AHAs/BHAs']
},
{
  id: '11',
  name: 'CeraVe Hydrating Facial Cleanser',
  description: 'Non-foaming cleanser that hydrates while cleansing.',
  price: 16,
  image: 'https://i.pinimg.com/1200x/80/68/6b/80686b6bc2fe10b7071255001d07169a.jpg',
  category: 'cleanser',
  skinTypes: ['dry', 'sensitive', 'all'],
  concerns: ['hydration'],
  ingredients: [
    'Ceramides',
    'Hyaluronic Acid',
    'Glycerin'
  ],
  usage: 'Use morning and evening.',
  featured: false,
  bestFor: 'Dry and sensitive skin',
  whenToApply: 'Morning and evening',
  doNotMix: []
},
{
  id: '12',
  name: 'Garnier Micellar Water (Sensitive)',
  description: 'Gentle micellar water for sensitive skin.',
  price: 14,
  image: 'https://i.pinimg.com/736x/a8/63/05/a86305fab27de670d7adbe750f5bab97.jpg',
  category: 'moisturizer',
  skinTypes: ['sensitive', 'dry', 'all'],
  concerns: ['hydration'],
  ingredients: ['Micelles', 'Glycerin'],
  usage: 'Use with cotton pad. No rinse.',
  featured: false,
  bestFor: 'Sensitive skin & makeup removal',
  whenToApply: 'Anytime',
  doNotMix: []
},
{
  id: '13',
  name: 'Garnier Micellar Vitamin C',
  description: 'Brightening micellar water with Vitamin C.',
  price: 15,
  image: 'https://i.pinimg.com/736x/57/9a/e0/579ae0640918ff2298f87072b0f1a2b7.jpg',
  category: 'moisturizer',
  skinTypes: ['all', 'combination', 'oily'],
  concerns: ['pigmentation', 'hydration'],
  ingredients: ['Micelles', 'Vitamin C', 'Glycerin'],
  usage: 'Use with cotton pad. No rinse.',
  featured: false,
  bestFor: 'Dull & uneven skin',
  whenToApply: 'Morning or evening',
  doNotMix: []
}



];

export const routineTemplates = {
  dry: {
    morning: [
      { step: 1, name: 'Gentle Foaming Cleanser', productId: '3' },
      { step: 2, name: 'Hydrating Hyaluronic Serum', productId: '1' },
      { step: 3, name: 'Rich Barrier Cream', productId: '5' },
      { step: 4, name: 'Mineral Sunscreen SPF 50', productId: '6' }
    ],
    night: [
      { step: 1, name: 'Gentle Foaming Cleanser', productId: '3' },
      { step: 2, name: 'Hydrating Hyaluronic Serum', productId: '1' },
      { step: 3, name: 'Rich Barrier Cream', productId: '5' }
    ]
  },
  oily: {
    morning: [
      { step: 1, name: 'Gentle Foaming Cleanser', productId: '3' },
      { step: 2, name: 'Niacinamide Clear Serum', productId: '4' },
      { step: 3, name: 'Mineral Sunscreen SPF 50', productId: '6' }
    ],
    night: [
      { step: 1, name: 'Gentle Foaming Cleanser', productId: '3' },
      { step: 2, name: 'Exfoliating AHA/BHA Toner', productId: '8' },
      { step: 3, name: 'Niacinamide Clear Serum', productId: '4' }
    ]
  },
  sensitive: {
    morning: [
      { step: 1, name: 'Gentle Foaming Cleanser', productId: '3' },
      { step: 2, name: 'Hydrating Hyaluronic Serum', productId: '1' },
      { step: 3, name: 'Rich Barrier Cream', productId: '5' },
      { step: 4, name: 'Mineral Sunscreen SPF 50', productId: '6' }
    ],
    night: [
      { step: 1, name: 'Gentle Foaming Cleanser', productId: '3' },
      { step: 2, name: 'Hydrating Hyaluronic Serum', productId: '1' },
      { step: 3, name: 'Rich Barrier Cream', productId: '5' }
    ]
  },
  combination: {
    morning: [
      { step: 1, name: 'Gentle Foaming Cleanser', productId: '3' },
      { step: 2, name: 'Vitamin C Brightening Serum', productId: '2' },
      { step: 3, name: 'Rich Barrier Cream', productId: '5' },
      { step: 4, name: 'Mineral Sunscreen SPF 50', productId: '6' }
    ],
    night: [
      { step: 1, name: 'Gentle Foaming Cleanser', productId: '3' },
      { step: 2, name: 'Retinol Night Treatment', productId: '7' },
      { step: 3, name: 'Rich Barrier Cream', productId: '5' }
    ]
  }
};

export const skinTypeTips = {
  dry: {
    title: 'Dry Skin',
    description: 'Lacks oil and needs rich hydration',
    dos: [
      'Use cream-based cleansers',
      'Layer hydrating serums',
      'Apply rich moisturizers',
      'Use facial oils at night'
    ],
    donts: [
      "Don't over-cleanse",
      'Avoid harsh exfoliants',
      'Skip alcohol-based products',
      "Don't use hot water"
    ],
    recommendedProducts: ['1', '3', '5']
  },
  oily: {
    title: 'Oily Skin',
    description: 'Produces excess sebum, prone to shine',
    dos: [
      'Use gel or foam cleansers',
      'Try niacinamide serums',
      'Use lightweight moisturizers',
      'Exfoliate regularly with BHA'
    ],
    donts: [
      'Avoid heavy creams',
      "Don't skip moisturizer",
      'Avoid over-washing',
      "Don't use oil-based products"
    ],
    recommendedProducts: ['3', '4', '8']
  },
  sensitive: {
    title: 'Sensitive Skin',
    description: 'Easily irritated, reactive to products',
    dos: [
      'Patch test new products',
      'Use fragrance-free formulas',
      'Choose minimal ingredients',
      'Focus on barrier repair'
    ],
    donts: [
      'Avoid harsh actives',
      'Skip fragranced products',
      "Don't over-exfoliate",
      'Avoid extreme temperatures'
    ],
    recommendedProducts: ['1', '3', '5', '6']
  },
  combination: {
    title: 'Combination Skin',
    description: 'Oily T-zone with dry cheeks',
    dos: [
      'Use balanced cleansers',
      'Multi-mask different areas',
      'Layer products strategically',
      'Use lightweight textures'
    ],
    donts: [
      "Don't use one-size-fits-all",
      'Avoid heavy creams on T-zone',
      "Don't over-dry oily areas",
      'Skip harsh treatments'
    ],
    recommendedProducts: ['2', '3', '4', '5']
  }
};
