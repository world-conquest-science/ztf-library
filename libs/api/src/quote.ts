import {} from "@ztf-library/types";
import client, {
  getRandomQuote as getRandomQuoteApi,
  TApiDataReponse_Quote_Array_,
} from "./clients";
import { convertQuote } from "./converters/quote";

export async function getRandomQuote() {
  const response = await getRandomQuoteApi({
    client,
  });

  if (response.error) {
    return null;
  }

  const { data } = response.data as TApiDataReponse_Quote_Array_;
  return data.map(convertQuote);
}
