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
  photo_url: string;
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
  rank: number;
  books?: TBook[];
};

export type TCurrency = "eur" | "usd" | "xof";

export type TPrice = {
  id: string;
  amount: number;
  currency: TCurrency;
  min_quantity?: number;
  max_quantity?: number;
};

export type TFormat = {
  label: string;
  is_available: boolean;
  prices: TPrice[];
};

export type TBook = {
  id: string;
  title: string;
  slug: string;
  audio_version_url: string;
  dimensions: string;
  ebook_version_url: string;
  isbn: string;
  pages_count: number;
  publish_date: number;
  publisher: string;
  author: TAuthor;
  categories: TCategory[];
  language: TLanguage;
  formats: TFormat[];
  thumbnail: string;
  image_url: string;
  preface: string;
};

export type TQuote = {
  id: string;
  content: string;
  book: Pick<TBook, "slug" | "title">;
  author: Pick<TAuthor, "name" | "photo_url" | "about" | "slug">;
};

export type TAddress = {
  id: string;
  name: string;
  is_default_shipping: boolean;
  is_default_billing: boolean;
  company: string;
  first_name: string;
  last_name: string;
  address_1: string;
  address_2: string;
  city: string;
  country_code: string;
  postal_code: string;
  phone: string;
};

export type TCustomer = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  default_billing_address_id: string;
  default_shipping_address_id: string;
  addresses: TAddress[];
};

export type TCustomerSigninInput = Pick<TCustomer, "email" | "password">;
export type TCustomerSignupInput = Pick<TCustomer, "email" | "password">;
export type TCustomerCreationInput = Pick<
  TCustomer,
  "first_name" | "last_name" | "email"
>;
