import { Language } from "@ztf-library/medusa-types";

type TInput = Language;

export interface ILanguage {
  id: string;
  code: string;
}

export default class LanguageAdapter implements ILanguage {
  constructor(private input: TInput) {}

  get id() {
    return this.input.id;
  }

  get code() {
    return this.input.code;
  }
}
