import { Product as ProductWithBook } from "@ztf-library/medusa-types";
import BookFormatAdapter, { IBookFormat } from "./book-format";
import BookCategoryAdapter, { IBookCategory } from "./book-category";
import AuthorAdapter, { IAuthor } from "./book-author";
import LanguageAdapter, { ILanguage } from "./book-language";
import { StoreProduct as MedusaProduct } from "../clients";

export interface IBook {
  id: string;
  imageUrl: string;
  isbn: string;
  pagesCount: number;
  preface: string;
  publishDate: number;
  publisher: string;
  slug: string;
  thumbnail: string;
  title: string;

  categories: IBookCategory[];
  formats: IBookFormat[];

  dimensions?: string;
  ebookVersionUrl?: string;
  audioVersionUrl?: string;
  language?: ILanguage;
  author?: IAuthor;
}

class ProductWithBookAdapter implements IBook {
  constructor(private input: ProductWithBook) {}

  get id() {
    return this.input.id;
  }

  get title() {
    return this.input.title;
  }

  get preface() {
    return this.input.description || "-";
  }

  get slug() {
    return this.input.handle;
  }

  get audioVersionUrl() {
    return this.input.book?.audioVersionUrl || undefined;
  }

  get dimensions() {
    return this.input.book?.dimensions || undefined;
  }

  get ebookVersionUrl() {
    return this.input.book?.ebookVersionEbook || undefined;
  }

  get isbn() {
    return this.input.book?.isbn || "-";
  }

  get pagesCount() {
    return this.input.book?.pagesCount || -1;
  }

  get publishDate() {
    if (this.input.book?.publishDate) {
      return parseInt(this.input.book?.publishDate);
    }

    return -1;
  }

  get publisher() {
    return this.input.book?.publisher || "-";
  }

  get author() {
    if (!this.input.book?.author) {
      return undefined;
    }

    return new AuthorAdapter(this.input.book?.author);
  }

  get categories() {
    if (!this.input.categories) {
      return [];
    }

    return this.input.categories
      .filter((category) => category !== undefined)
      .map((category) => new BookCategoryAdapter(category!));
  }

  get language() {
    if (!this.input.book?.language) {
      return undefined;
    }

    return new LanguageAdapter(this.input.book?.language);
  }

  get formats() {
    return this.input.variants.map((variant) => new BookFormatAdapter(variant));
  }

  get thumbnail() {
    return this.input.thumbnail || "-";
  }

  get imageUrl() {
    return this.input.images.at(0)?.url || "-";
  }
}

class MedusaBaseProductAdapter implements IBook {
  constructor(private input: MedusaProduct) {}

  get id() {
    return this.input.id;
  }

  get title() {
    return this.input.title;
  }

  get preface() {
    return this.input.description || "-";
  }

  get slug() {
    return this.input.handle;
  }

  get audioVersionUrl() {
    return undefined;
  }

  get dimensions() {
    return undefined;
  }

  get ebookVersionUrl() {
    return undefined;
  }

  get isbn() {
    return "-";
  }

  get pagesCount() {
    return -1;
  }

  get publishDate() {
    return -1;
  }

  get publisher() {
    return "-";
  }

  get author() {
    return undefined;
  }

  get categories() {
    return [];
  }

  get language() {
    return undefined;
  }

  get formats() {
    return [];
  }

  get thumbnail() {
    return this.input.thumbnail || "-";
  }

  get imageUrl() {
    return this.input.images.at(0)?.url || "-";
  }
}

export default class BookAdapter {
  static fromProduct(input: ProductWithBook): IBook {
    return new ProductWithBookAdapter(input);
  }

  static fromMedusaBaseProduct(input: MedusaProduct): IBook {
    return new MedusaBaseProductAdapter(input);
  }
}
