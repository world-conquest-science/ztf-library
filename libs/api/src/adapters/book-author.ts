import { Author } from "@ztf-library/medusa-types";

type TInput = Author;

export interface IAuthor {
  id: string;
  name: string;
  slug: string;
  about: string;
  photoUrl: string;
}

export default class AuthorAdapter implements IAuthor {
  constructor(private input: TInput) {}

  get id() {
    return this.input.id;
  }

  get name() {
    return this.input.name;
  }

  get slug() {
    return this.input.handle;
  }

  get about() {
    return this.input.about;
  }

  get photoUrl() {
    return this.input.photoUrl;
  }
}
