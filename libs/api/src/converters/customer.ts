import { TCustomer } from "@ztf-library/types";

export const convertCustomer = (c: any): TCustomer => {
  return {
    id: c.id,
    first_name: c.first_name,
    last_name: c.last_name,
    email: c.email,
    password: "*",
    phone: c.phone || "",
    default_billing_address_id: c.default_billing_address_id,
    default_shipping_address_id: c.default_shipping_address_id,
    addresses: [],
  };
};
