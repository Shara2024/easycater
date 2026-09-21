import { eventTypes } from '@/features/landing/data/EventTypes';
import EventTypeCard from '@/features/landing/components/EventTypeCard';

const EventTypesSection = () => (
  <section className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-2xl font-serif font-semibold">Popular Event Types</h2>
    <p className="text-neutral-600 mt-1">
      We match you with specialists trained for your precise ceremonial and celebration needs.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6">
      {eventTypes.map((et) => (
        <EventTypeCard key={et.id} eventType={et} />
      ))}
    </div>
  </section>
);
export default EventTypesSection;
