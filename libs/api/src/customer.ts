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

export const get_me = () => {
  return new Promise<TCustomer>((resolve, reject) => {
    getCustomersMe({
      client,
    })
      ?.then(({ data }) => {
        if (!data) {
          reject();
        } else {
          resolve(toCustomer(data.customer));
        }
      })
      .catch(reject);
  });
};

export function add_address(address: TAddress): void {}

export function remove_address(address: TAddress): void {}

export function set_address_as_billing_default(address: TAddress): void {}

export function set_address_as_shipping_default(address: TAddress): void {}

export function set_session_id() {
  return postSession({
    client,
  });
}
