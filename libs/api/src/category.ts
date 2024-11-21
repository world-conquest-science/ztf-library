import { TGetCategoriesInput } from "@ztf-library/types";
import client, {
  getCategories,
  TApiDataReponse_ProductCategory_Array_,
  getCategoryBySlug as getCategoryBySlugFromApi,
  TApiDataReponse_ProductCategory_,
} from "./clients";
import { convertCategory } from "./converters/category";

export async function getAllCategories({
  includeProducts,
}: TGetCategoriesInput) {
  const response = await getCategories({
    client,
    query: { includeProducts },
  });

  if (response.error) {
    return null;
  }

  const { data } = response.data as TApiDataReponse_ProductCategory_Array_;
  return data.map(convertCategory);
}

export async function getCategoryBySlug(slug: string) {
  const response = await getCategoryBySlugFromApi({
    client,
    path: { slug },
  });

  if (response.error) {
    return null;
  }

  const { data } = response.data as TApiDataReponse_ProductCategory_;
  return convertCategory(data);
}
