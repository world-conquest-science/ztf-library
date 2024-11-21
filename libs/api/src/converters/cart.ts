import { StoreCart } from "../clients";
import { TCart } from "@ztf-library/types";

export const convertCart = (c: StoreCart): TCart => {
  return {
    id: c.id,
    items: [],
    sub_total: 0,
    discount_amount: 0,
    grand_total: 0,
  };
};
