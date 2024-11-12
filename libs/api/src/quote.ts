import {} from "@ztf-library/types";
import client, {
  getQuotes,
  getRandomQuote as getRandomQuoteApi,
} from "./clients";

export const getAllQuotes = () => {
  return getQuotes({
    client,
  });
};

export const getRandomQuote = () => {
  return getRandomQuoteApi({
    client,
  });
};
