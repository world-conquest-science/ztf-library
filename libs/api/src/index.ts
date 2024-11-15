import * as authentication from "./authentication";
import * as customer from "./customer";
import * as book from "./book";

import { set_medusa_api_key } from "./clients";

export default {
  with: (publishable_key?: string) => {
    if (!publishable_key) {
      throw new Error("No publishable API key provided!");
    }

    set_medusa_api_key(publishable_key);

    return {
      authentication,
      book,
      customer,
    };
  },
};
