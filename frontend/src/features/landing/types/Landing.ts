export type EventType = {
  id: string;
  name: string;
  imageUrl: string;
  catererCount: number;
};

export type Dish = {
  id: string;
  name: string;
  tag: string;
  imageUrl: string;
  startingPrice: number;
  priceUnit?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  authorName: string;
  authorMeta: string;
  avatarUrl: string;
};
