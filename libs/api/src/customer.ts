import client, { StoreCustomerResponse } from "./clients";
import { getCustomersMe, postCustomers } from "./clients";
import { TAddress, TCustomerCreationInput } from "@ztf-library/types";
import { convertCustomer } from "./converters/customer";
import CustomerAdapter from "./adapters/customer";

export async function create({
  first_name,
  last_name,
  email,
}: TCustomerCreationInput) {
  const response = await postCustomers({
    client,
    body: { email, first_name, last_name },
  });

  if (!response || response.error) {
    return null;
  }

  const { customer } = response.data as StoreCustomerResponse;
  return new CustomerAdapter(customer);
}

export const get_me = async () => {
  const response = await getCustomersMe({ client });

  if (!response || response.error || !response.data) {
    return null;
  }

  return convertCustomer(response.data.customer);
};

export function add_address(address: TAddress): void {}

export function remove_address(address: TAddress): void {}

export function set_address_as_billing_default(address: TAddress): void {}

export function set_address_as_shipping_default(address: TAddress): void {}
