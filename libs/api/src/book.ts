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
} from "./clients";

export const getAllBooks = ({ limit, offset }: TGetAllBooksInput) => {
  return getBooks({
    client,
    query: { limit, offset },
  });
};

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
