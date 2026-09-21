import type { FeaturedCaterer } from '@/features/caterers/types/Caterer';

const CatererCard = ({ caterer }: { caterer: FeaturedCaterer }) => (
  <div className="rounded-xl overflow-hidden bg-white shadow-sm">
    <div
      className="h-48 bg-neutral-200 relative"
      style={{ backgroundImage: `url(${caterer.imageUrl})`, backgroundSize: 'cover' }}
    >
      <span className="absolute top-3 left-3 bg-white/90 text-xs px-2 py-1 rounded">
        {caterer.badge}
      </span>
    </div>
    <div className="p-4">
      <div className="flex justify-between text-sm">
        <span>
          ★ {caterer.rating} ({caterer.reviewCount} reviews)
        </span>
        <span>
          LKR {caterer.priceRangeLKR[0].toLocaleString()}-
          {caterer.priceRangeLKR[1].toLocaleString()} pp
        </span>
      </div>
      <p className="font-semibold mt-1">{caterer.name}</p>
      <p className="text-sm text-neutral-500">{caterer.cuisineTags.join(' • ')}</p>
      <a
        href={`/caterers/${caterer.id}`}
        className="text-orange-700 text-sm font-medium inline-block mt-2"
      >
        View Full Catering Menus →
      </a>
    </div>
  </div>
);

export default CatererCard;
