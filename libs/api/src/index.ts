import * as authentication from "./authentication";
import * as customer from "./customer";
import * as book from "./book";
import * as quote from "./quote";
import * as category from "./category";
import * as cart from "./cart";

import { setMedusaApiKey } from "./clients";

export default {
  with: (publishable_key?: string) => {
    if (!publishable_key) {
      throw new Error("No publishable API key provided!");
    }

    setMedusaApiKey(publishable_key);

    return {
      authentication,
      book,
      customer,
      quote,
      category,
      cart,
    };
  },
};
