import { StoreRegion } from "../clients";

type TInput = StoreRegion;

export interface IRegion {
  id: string;
  name: string;
  currencyCode: string;
}

export default class RegionAdapter implements IRegion {
  constructor(private readonly region: TInput) {}

  get id() {
    return this.region.id;
  }

  get name() {
    return this.region.name;
  }

  get currencyCode() {
    return this.region.currency_code;
  }
}
