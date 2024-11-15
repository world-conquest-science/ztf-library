import client, { postSession } from "./clients";
import { getCustomersMe, postCustomers } from "./clients";
import { TAddress, TCustomerCreationInput } from "@ztf-library/types";
import { TCustomer } from "@ztf-library/types";
import { toCustomer } from "./converters/customer";

export const create = ({
  first_name,
  last_name,
  email,
}: TCustomerCreationInput) => {
  return postCustomers({
    client,
    body: { email, first_name, last_name },
  });
};

export const get_me = async () => {
  const response = await getCustomersMe({ client });

  if (!response || response.error || !response.data) {
    throw new Error("Error while trying to get current customer");
  }

  return toCustomer(response.data.customer);
};

export function add_address(address: TAddress): void {}

export function remove_address(address: TAddress): void {}

export function set_address_as_billing_default(address: TAddress): void {}

export function set_address_as_shipping_default(address: TAddress): void {}
