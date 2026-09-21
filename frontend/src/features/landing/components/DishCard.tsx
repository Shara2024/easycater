import type { Dish } from '@/features/landing/types/Landing';

const DishCard = ({ dish }: { dish: Dish }) => (
  <div className="rounded-xl overflow-hidden bg-white shadow-sm">
    <div
      className="h-36 bg-neutral-200"
      style={{ backgroundImage: `url(${dish.imageUrl})`, backgroundSize: 'cover' }}
    />
    <div className="p-3">
      <p className="text-xs uppercase text-neutral-500">{dish.tag}</p>
      <p className="font-semibold">{dish.name}</p>
      <p className="text-sm text-green-700">
        Starts at LKR {dish.startingPrice.toLocaleString()}
        {dish.priceUnit ? ` / ${dish.priceUnit}` : ''}
      </p>
    </div>
  </div>
);

export default DishCard;
