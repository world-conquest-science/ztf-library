import { TCategory } from "@ztf-library/types";
import { convertProductToBook } from "./product";

export function convertCategory(category?: any): TCategory {
  return {
    id: category?.id!,
    title: category?.name!,
    slug: category?.handle!,
    description: category?.description!,
    rank: category?.rank!,
    books: category?.products?.map(convertProductToBook),
  };
}
