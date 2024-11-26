import { StoreCustomer } from "../clients";
import CustomerAddressAdapter, { ICustomerAddress } from "./customer-address";

type TInput = StoreCustomer;

export interface ICustomer {
  id: string;
  firstName: string;
  email: string;
  password: string;

  lastName?: string;
  phone?: string;
  defaultBillingAddressId?: string;
  defaultShippingAddressId?: string;
  addresses: ICustomerAddress[];
}

export default class CustomerAdapter implements ICustomer {
  constructor(private input: TInput) {}

  get id() {
    return this.input.id;
  }

  get firstName() {
    return this.input.first_name;
  }

  get lastName() {
    return this.input.last_name;
  }

  get email() {
    return this.input.email;
  }

  get password() {
    return "***";
  }

  get phone() {
    return this.input.phone;
  }

  get defaultBillingAddressId() {
    return this.input.default_billing_address_id;
  }

  get defaultShippingAddressId() {
    return this.input.default_shipping_address_id;
  }

  get addresses() {
    return this.input.addresses.map(
      (address) => new CustomerAddressAdapter(address)
    );
  }
}
