// This file is auto-generated by @hey-api/openapi-ts

import {
  createClient,
  createConfig,
  type Options,
} from "@hey-api/client-fetch";
import type {
  GetQuotesError,
  GetQuotesResponse,
  GetRandomQuoteError,
  GetRandomQuoteResponse,
  GetCategoriesData,
  GetCategoriesError,
  GetCategoriesResponse,
  GetCategoryBySlugData,
  GetCategoryBySlugError,
  GetCategoryBySlugResponse,
  GetBooksData,
  GetBooksError,
  GetBooksResponse,
  GetBooksByCategoryData,
  GetBooksByCategoryError,
  GetBooksByCategoryResponse,
  GetBookBySlugData,
  GetBookBySlugError,
  GetBookBySlugResponse,
  GetRecommendationError,
  GetRecommendationResponse,
} from "./types.gen";

export const client = createClient(createConfig());

/**
 * Get all the quotes
 */
export const getQuotes = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetQuotesResponse,
    GetQuotesError,
    ThrowOnError
  >({
    ...options,
    url: "/store/quotes",
  });
};

/**
 * Get two random quotes
 */
export const getRandomQuote = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetRandomQuoteResponse,
    GetRandomQuoteError,
    ThrowOnError
  >({
    ...options,
    url: "/store/quotes/random",
  });
};

/**
 * Get all the categories
 */
export const getCategories = <ThrowOnError extends boolean = false>(
  options?: Options<GetCategoriesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetCategoriesResponse,
    GetCategoriesError,
    ThrowOnError
  >({
    ...options,
    url: "/store/categories",
  });
};

/**
 * Get a category by its slug
 */
export const getCategoryBySlug = <ThrowOnError extends boolean = false>(
  options: Options<GetCategoryBySlugData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetCategoryBySlugResponse,
    GetCategoryBySlugError,
    ThrowOnError
  >({
    ...options,
    url: "/store/categories/{slug}",
  });
};

/**
 * Get books, paginated using optional limit and offset
 */
export const getBooks = <ThrowOnError extends boolean = false>(
  options?: Options<GetBooksData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetBooksResponse,
    GetBooksError,
    ThrowOnError
  >({
    ...options,
    url: "/store/books",
  });
};

/**
 * Get books from a category, paginated using optional limit and offset
 */
export const getBooksByCategory = <ThrowOnError extends boolean = false>(
  options: Options<GetBooksByCategoryData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetBooksByCategoryResponse,
    GetBooksByCategoryError,
    ThrowOnError
  >({
    ...options,
    url: "/store/books/category/{category_id}",
  });
};

/**
 * Get a book by its slug
 */
export const getBookBySlug = <ThrowOnError extends boolean = false>(
  options: Options<GetBookBySlugData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetBookBySlugResponse,
    GetBookBySlugError,
    ThrowOnError
  >({
    ...options,
    url: "/store/books/{slug}",
  });
};

/**
 * Recommend quote and book from a query
 */
export const getRecommendation = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetRecommendationResponse,
    GetRecommendationError,
    ThrowOnError
  >({
    ...options,
    url: "/store/assistant",
  });
};
