import type { Testimonial } from '@/features/landing/types/Landing';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="rounded-xl bg-white shadow-sm p-6">
    <p className="italic text-neutral-700">&ldquo;{testimonial.quote}&rdquo;</p>
    <div className="mt-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-neutral-200" style={{ backgroundImage: `url(${testimonial.avatarUrl})`, backgroundSize: 'cover' }} />
      <div>
        <p className="font-semibold text-sm">{testimonial.authorName}</p>
        <p className="text-xs text-orange-700">{testimonial.authorMeta}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;