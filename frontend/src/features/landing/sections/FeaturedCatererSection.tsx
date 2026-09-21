import { featuredCaterers } from '@/features/caterers/data/Caterers';
import CatererCard from '@/features/landing/components/CatererCard';

const FeaturedCaterersSection = () => (
  <section className="bg-[#F2EBDD] py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-serif font-semibold">Featured Certified Caterers</h2>
      <p className="text-neutral-600 mt-1">
        Vetted professionals delivering flawless service, exceptional taste, and spotless
        presentation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {featuredCaterers.map((c) => (
          <CatererCard key={c.id} caterer={c} />
        ))}
      </div>
    </div>
  </section>
);
export default FeaturedCaterersSection;
