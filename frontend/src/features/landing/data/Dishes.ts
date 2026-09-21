import type { Dish } from '@/features/landing/types/Landing';

export const dishes: Dish[] = [
  {
    id: 'lamprais',
    name: 'Traditional Lamprais',
    tag: 'Dutch Burgher Heritage',
    imageUrl: '',
    startingPrice: 1850,
  },
  {
    id: 'egg-hoppers',
    name: 'Egg Hoppers (Appa)',
    tag: 'Live Station Classic',
    imageUrl: '',
    startingPrice: 450,
    priceUnit: 'set',
  },
  {
    id: 'mutton-biryani',
    name: 'Mutton Biryani Feast',
    tag: 'Festive Specialty',
    imageUrl: '',
    startingPrice: 2400,
  },
  {
    id: 'cheese-kottu',
    name: 'Cheese Kottu Roti',
    tag: 'Street Fusion',
    imageUrl: '',
    startingPrice: 1200,
  },
  {
    id: 'string-hopper-buffet',
    name: 'String Hopper Buffet',
    tag: 'Traditional Breakfast',
    imageUrl: '',
    startingPrice: 1100,
    priceUnit: 'pax',
  },
  {
    id: 'seafood-rice',
    name: 'Gourmet Seafood Rice',
    tag: 'Coastal Treat',
    imageUrl: '',
    startingPrice: 2100,
  },
];
