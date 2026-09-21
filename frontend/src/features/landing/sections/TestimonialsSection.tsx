import { testimonials } from "@/features/landing/data/Testimonials";
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsSection = () => (
  <section className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-2xl font-serif font-semibold">Stories from our Community</h2>
    <p className="text-neutral-600 mt-1">
      Hosts and chefs share their beautiful memories from across the island.
    </p>
    <div className="grid md:grid-cols-2 gap-6 mt-6">
      {testimonials.map((t) => (
        <TestimonialCard key={t.id} testimonial={t} />
      ))}
    </div>
  </section>
);
export default TestimonialsSection;
