export interface Bbs {
  id: number;
  title: string;
  content: string;
  price: number;
  created_at: string;
}

export interface Bb {
  id: number;
  title: string;
  content: string;
  price: number;
  created_at: string;
  contacts: string;
  image: string;
}

export interface Comments {
  bb: number;
  author: string;
  content: string;
  created_at: string;
}
