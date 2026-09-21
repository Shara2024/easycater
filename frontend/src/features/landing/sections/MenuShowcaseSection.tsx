import { dishes } from '@/features/landing/data/Dishes';
import DishCard from '@/features/landing/components/DishCard';

const MenuShowcaseSection = () => (
  <section className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-2xl font-serif font-semibold">Curate Your Grand Feast Menu</h2>
    <p className="text-neutral-600 mt-1">
      Browse traditional and modern dishes to add to your catering request.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6">
      {dishes.map((d) => (
        <DishCard key={d.id} dish={d} />
      ))}
    </div>
  </section>
);
export default MenuShowcaseSection;
