export interface Elements {
  id: number;
  text: string;
  href: string;
}

export interface Buttons {
  href: string;
  text: string;
  tipe: string;
  isVisible: boolean;
}

export interface Clients {
  href: string;
  img: string;
  alt: string;
}

export interface FormElements {
  id?: number;
  icon?: string;
  text: string;
  href?: string | null;
}

export interface Planes {
  id: number;
  namePlan: string;
  prices: Price;
  items: Array<ItemsPlan>;
  textButton?: string;
  isPopular: boolean;
}

export interface Price {
  [key: string]: number;
}

export interface Discount {
  id: string;
  type: string;
  discount: number;
  months: number;
}

export interface Faqs {
  id: number;
  question: string;
  answer: string;
}

export interface ItemsPlan {
  id: number;
  text: string;
  includes: boolean;
  icon?: string;
}

export interface Settings {
  id: string;
  isFreeTrailMode: boolean;
}
