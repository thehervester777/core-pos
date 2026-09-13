export interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
}

export interface WorkItem {
  id: string;
  name: string;
  category: string;
  year: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

export interface StatItem {
  label: string;
  limit: number;
  suffix: string;
  prefix: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface PosProduct {
  id: string;
  name: string;
  price: number;
  category: 'grocery' | 'pharmacy' | 'cafe';
  unit: string;
}

export interface CartItem extends PosProduct {
  qty: number;
}

