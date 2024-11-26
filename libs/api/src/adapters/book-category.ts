import { ProductCategory } from "@ztf-library/medusa-types";
import BookAdapter, { IBook } from "./book";

type TInput = ProductCategory;

export interface IBookCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  rank: number;

  books?: IBook[];
}

export default class BookCategoryAdapter implements IBookCategory {
  constructor(private input: TInput) {}

  get id() {
    return this.input.id;
  }

  get slug() {
    return this.input.handle;
  }

  get name() {
    return this.input.name;
  }

  get description() {
    return this.input.description;
  }

  get rank() {
    return this.input.rank;
  }

  get books() {
    return this.input.products.map((product) =>
      BookAdapter.fromProduct(product)
    );
  }
}
