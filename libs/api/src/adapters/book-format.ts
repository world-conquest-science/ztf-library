import { ProductVariant } from "@ztf-library/medusa-types";
import BookAdapter, { IBook } from "./book";

type TInput = ProductVariant & {
  calculated_price?: {
    id: string;
    calculated_amount: number;
    original_amount: number;
    currency_code: string;
  };
};

export interface IBookFormat {
  id: string;
  label: string;
  isAvailable: boolean;
  originalPrice: number;
  currentPrice: number;

  book?: Omit<IBook, "formats">;
}

export default class BookFormatAdapter implements IBookFormat {
  constructor(private input: TInput) {}

  get id() {
    return this.input.id;
  }

  get label() {
    return this.input.title;
  }

  get isAvailable() {
    return true;
  }

  get originalPrice() {
    if (!this.input.calculated_price) {
      return 0;
    }

    return this.input.calculated_price.original_amount;
  }

  get currentPrice() {
    if (!this.input.calculated_price) {
      return 0;
    }

    return this.input.calculated_price.calculated_amount;
  }

  get book() {
    if (!this.input.product?.book) {
      return;
    }

    const book = BookAdapter.fromProduct(this.input.product);

    return book || undefined;
  }
}
