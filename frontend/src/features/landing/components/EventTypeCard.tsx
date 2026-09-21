import type { EventType } from '@/features/landing/types/Landing';

const EventTypeCard = ({ eventType }: { eventType: EventType }) => (
  <div className="rounded-xl overflow-hidden bg-white shadow-sm">
    <div
      className="h-32 bg-neutral-200"
      style={{ backgroundImage: `url(${eventType.imageUrl})`, backgroundSize: 'cover' }}
    />
    <div className="p-3">
      <p className="font-semibold">{eventType.name}</p>
      <p className="text-sm text-orange-700">{eventType.catererCount}+ Caterers</p>
    </div>
  </div>
);

export default EventTypeCard;
