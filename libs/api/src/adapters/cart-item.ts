import { StoreCartLineItem } from "../clients";

type TInput = StoreCartLineItem;

export interface ICartItem {
  id: string;
  title: string;
  thumbnail: string;
  quantity: number;
  bookId: any;
  bookSlug: string;
  unitPrice?: number;
  totalWithTax?: number;
  totalWithDiscountAndTax?: number;
  discountTotal?: number;
}

export default class CartItemAdapter {
  constructor(private input: TInput) {}

  get id() {
    return this.input.id;
  }

  get title() {
    return (
      this.input.title ||
      this.input.product?.title ||
      this.input.variant_title ||
      "-"
    );
  }

  get thumbnail() {
    return this.input.thumbnail || "-";
  }

  get quantity() {
    return this.input.quantity;
  }

  get bookId() {
    return this.input.product?.id;
  }

  get bookSlug() {
    return this.input.product?.handle;
  }

  get unitPrice() {
    return this.input.unit_price;
  }

  get totalWithTax() {
    return this.input.original_total;
  }

  get totalWithDiscountAndTax() {
    return this.input.total;
  }

  get discountTotal() {
    return this.input.discount_total;
  }
}
