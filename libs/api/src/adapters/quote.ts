import { Quote } from "@ztf-library/medusa-types";
import BookAdapter, { IBook } from "./book";
import AuthorAdapter, { IAuthor } from "./book-author";

type TInput = Quote;

export interface IQuote {
  id: string;
  content: string;
  book?: Pick<IBook, "slug" | "title" | "thumbnail">;
  author?: Pick<IAuthor, "name" | "photoUrl" | "about" | "slug">;
}

export default class QuoteAdapter implements IQuote {
  constructor(private input: TInput) {}

  get id() {
    return this.input.id;
  }

  get content() {
    return this.input.content;
  }

  get book() {
    if (!this.input.book || !this.input.book.product) {
      return undefined;
    }

    return BookAdapter.fromProduct(this.input.book.product);
  }

  get author() {
    if (!this.input.author) {
      return undefined;
    }

    return new AuthorAdapter(this.input.author);
  }
}
