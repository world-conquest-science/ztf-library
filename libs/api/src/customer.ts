import client from "./clients";
import { getCustomersMe, postCustomers } from "./clients";
import { TCustomerCreationInput } from "@ztf-library/types";

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

export const getMe = () => {
  return getCustomersMe({
    client,
    body: {},
  });
};
