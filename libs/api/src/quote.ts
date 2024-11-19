import {} from "@ztf-library/types";
import client, {
  getQuotes,
  getRandomQuote as getRandomQuoteApi,
  TApiDataReponse_TQuote_Array_,
} from "./clients";

export function getAllQuotes() {
  return getQuotes({
    client,
  });
}

export async function getRandomQuote() {
  const response = await getRandomQuoteApi({
    client,
  });

  if (response.error) {
    return null;
  }

  const { data } = response.data as TApiDataReponse_TQuote_Array_;
  return data;
}
