export interface Project {
  id: number;
  name: string;
  image: string;
}

export interface Module {
  id: number;
  title: string;
  icon?: string;
}

export interface Bonus {
  id: number;
  title: string;
  description: string;
  value: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Benefit {
  text: string;
}