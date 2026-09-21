import type { FeaturedCaterer } from '@/features/caterers/types/Caterer';

export const featuredCaterers: FeaturedCaterer[] = [
  {
    id: 'saffron-spice',
    name: 'Saffron & Spice Catering',
    badge: 'Top Rated',
    imageUrl: '',
    rating: 4.9,
    reviewCount: 182,
    priceRangeLKR: [1500, 3500],
    cuisineTags: ['Sri Lankan', 'South Indian', 'Moorish Fusion'],
  },
  {
    id: 'royal-heritage',
    name: 'Royal Heritage Banquets',
    badge: 'Premium Partner',
    imageUrl: '',
    rating: 4.8,
    reviewCount: 244,
    priceRangeLKR: [2000, 5000],
    cuisineTags: ['Kandyan Traditional', 'Dutch Burgher', 'Western'],
  },
  {
    id: 'ceylon-live-fire',
    name: 'Ceylon Live Fire & Claypot',
    badge: 'Local Artisan',
    imageUrl: '',
    rating: 4.7,
    reviewCount: 96,
    priceRangeLKR: [1200, 2800],
    cuisineTags: ['Authentic Village', 'Seafood Specialty'],
  },
];
