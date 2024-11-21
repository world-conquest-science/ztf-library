import { TGetAllBooksInput, TGetBookBySlugInput } from "@ztf-library/types";
import client, {
  getBookBySlug,
  TApiDataReponse_Product_,
  getBooks,
  TApiPaginatedReponse_Product_Array_,
} from "./clients";
import { convertProductToBook } from "./converters/product";

export async function getAllBooks({ limit, offset }: TGetAllBooksInput) {
  const response = await getBooks({
    client,
    query: { limit, offset },
  });

  if (response.error) {
    return null;
  }

  const paginatedData = response.data as TApiPaginatedReponse_Product_Array_;
  return {
    ...paginatedData,
    data: paginatedData.data.map(convertProductToBook),
  };
}

export async function getBook({ slug }: TGetBookBySlugInput) {
  const response = await getBookBySlug({
    client,
    path: { slug },
  });

  if (response.error) {
    return null;
  }

  const { data } = response.data as TApiDataReponse_Product_;
  return convertProductToBook(data);
}
