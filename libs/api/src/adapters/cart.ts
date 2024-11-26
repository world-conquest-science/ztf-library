import { StoreCart } from "../clients";
import CartItemAdapter, { ICartItem } from "./cart-item";
import RegionAdapter, { IRegion } from "./region";

type TInput = StoreCart;

export interface ICart {
  id: string;
  items: ICartItem[];

  totalWithTax?: number;
  discountTotal?: number;
  totalWithDiscountAndTax?: number;
  customerId?: string;
  currencyCode?: string;
  region?: IRegion;
}

export default class CartAdapter {
  constructor(private input: TInput) {}

  get id() {
    return this.input.id;
  }

  get items() {
    return this.input.items?.map((item) => new CartItemAdapter(item));
  }

  get totalWithTax() {
    return this.input.original_total;
  }

  get discountTotal() {
    return this.input.discount_total;
  }

  get totalWithDiscountAndTax() {
    return this.input.total;
  }

  get customerId() {
    return this.input.customer_id;
  }

  get currencyCode() {
    return this.input.currency_code;
  }

  get region() {
    if (!this.input.region) {
      return undefined;
    }

    return new RegionAdapter(this.input.region);
  }
}
