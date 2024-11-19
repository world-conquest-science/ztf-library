import { TGetCategoriesInput } from "@ztf-library/types";
import client, {
  getCategories,
  getCategoryBySlug as getCategoryBySlugFromApi,
  TApiDataReponse_TCategory_,
  TApiDataReponse_TCategory_Array_,
} from "./clients";

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

  const { data } = response.data as TApiDataReponse_TCategory_Array_;
  return data;
}

export async function getCategoryBySlug(slug: string) {
  const response = await getCategoryBySlugFromApi({
    client,
    path: { slug },
  });

  if (response.error) {
    return null;
  }

  const { data } = response.data as TApiDataReponse_TCategory_;
  return data;
}
