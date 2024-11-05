export type TResponse<T> = {
  data: T;
  count: number;
  limit: number;
  offset: number;
};

export type TAuthor = {
  id: string;
  name: string;
  slug: string;
  about: string;
  photoUrl: string;
};

export type TLanguage = {
  id: string;
  code: string;
};

export type TCategory = {
  id: string;
  slug: string;
  title: string;
  description: string;
};

export type TCurrency = "eur" | "usd" | "xof";

export type TPrice = {
  id: string;
  amount: number;
  currency: TCurrency;
  minQuantity?: number;
  maxQuantity?: number;
};

export type TFormat = {
  label: string;
  isAvailable: boolean;
  prices: TPrice[];
};

export type TBook = {
  id: string;
  title: string;
  slug: string;
  audioVersionUrl: string;
  dimensions: string;
  ebookVersionUrl: string;
  isbn: string;
  pagesCount: number;
  publishDate: number;
  publisher: string;
  author: TAuthor;
  categories: TCategory[];
  language: TLanguage;
  formats: TFormat[];
  thumbnail: string;
  imageUrl: string;
  preface: string;
};
