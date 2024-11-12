import { TGetCategoriesInput } from "@ztf-library/types";
import client, { getCategories, getProductCategories } from "./clients";

export const getAllCategories = ({ includeProducts }: TGetCategoriesInput) => {
  return getCategories({
    client,
    query: { includeProducts },
  });
};

export const getLeadingCategories = () => {
  return getProductCategories({
    client,
    query: {
      order: "rank",
    },
  });
};
