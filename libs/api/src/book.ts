import {
  TGetAllBooksInput,
  TGetBooksByCategoryInput,
  TGetBookBySlugInput,
  TGetRelatedBooksInput,
} from "@ztf-library/types";
import client, {
  getBookBySlug,
  getBooks,
  getBooksByCategory as getBooksByCategoryApi,
  TApiPaginatedReponse_TBook_Array_,
} from "./clients";

export async function getAllBooks({ limit, offset }: TGetAllBooksInput) {
  const response = await getBooks({
    client,
    query: { limit, offset },
  });

  if (response.error) {
    return null;
  }

  return response.data as TApiPaginatedReponse_TBook_Array_;
}

export const getBooksByCategory = ({
  category_id,
  limit,
  offset,
}: TGetBooksByCategoryInput) => {
  return getBooksByCategoryApi({
    client,
    path: { category_id },
    query: { limit, offset },
  });
};

export const getBook = ({ slug }: TGetBookBySlugInput) => {
  return getBookBySlug({
    client,
    path: { slug },
  });
};

export const getRelatedBooks = ({ category_id }: TGetRelatedBooksInput) => {
  return getBooksByCategoryApi({
    client,
    path: { category_id },
    query: { limit: 20, offset: 0 },
  });
};
