import { StoreCustomerAddress } from "../clients";

type TInput = StoreCustomerAddress;

export interface ICustomerAddress {
  id: string;
  name: string;
  isDefaultShipping: boolean;
  isDefaultBilling: boolean;
  address1: string;
  address2: string;
  postalCode: string;
  city: string;
  countryCode: string;

  company?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

export default class CustomerAddressAdapter implements ICustomerAddress {
  constructor(private input: TInput) {}

  get id() {
    return this.input.id;
  }

  get name() {
    return this.input.address_name;
  }

  get isDefaultShipping() {
    return this.input.is_default_shipping || false;
  }

  get isDefaultBilling() {
    return this.input.is_default_billing || false;
  }

  get company() {
    return this.input.company;
  }

  get firstName() {
    return this.input.first_name;
  }

  get lastName() {
    return this.input.last_name;
  }

  get address1() {
    return this.input.address_1;
  }

  get address2() {
    return this.input.address_2;
  }

  get city() {
    return this.input.city;
  }

  get countryCode() {
    return this.input.country_code;
  }

  get postalCode() {
    return this.input.postal_code;
  }

  get phone() {
    return this.input.phone;
  }
}
