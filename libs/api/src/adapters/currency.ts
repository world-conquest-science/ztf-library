import { StoreCurrency } from "../clients";

type TInput = StoreCurrency;

export interface ICurrency {
  name: string;
  code: string;
  symbol: string;
}

export default class CurrencyAdapter {
  constructor(private input: TInput) {}

  get name() {
    return this.input.name;
  }

  get code() {
    return this.input.code;
  }

  get symbol() {
    return this.input.symbol;
  }
}
