import { TBook, TCurrency } from "@ztf-library/types";
import { convertCategory } from "./category";

const convertCurrenty = (code: string): TCurrency => {
  if (code === "eur") return "eur";
  if (code === "usd") return "usd";
  if (code === "xo") return "xof";

  return "eur";
};

export function convertProductToBook(product: any): TBook {
  return {
    id: product.id,
    title: product.title,
    description: product.description!,
    slug: product.handle,
    audio_version_url: product.book?.audioVersionUrl!,
    dimensions: product.book?.dimensions!,
    ebook_version_url: product.book?.ebookVersionEbook!,
    isbn: product.book?.isbn!,
    pages_count: product.book?.pagesCount!,
    publish_date: parseInt(product.book?.publishDate!),
    publisher: product.book?.publisher!,
    author: {
      id: product.book?.author?.id!,
      name: product.book?.author?.name!,
      slug: product.book?.author?.handle!,
      about: product.book?.author?.about!,
      photo_url: product.book?.author?.photoUrl!,
    },
    categories: product.categories?.map(convertCategory) || [],
    language: {
      id: product.book?.language?.id!,
      code: product.book?.language?.code!,
    },
    formats: product.variants.map((variant) => ({
      variant_id: variant.id,
      book_id: product.id,
      label: variant.title,
      is_available: true,
      prices: variant.prices?.map((price) => ({
        id: price?.id,
        amount: price?.amount,
        currency: convertCurrenty(price?.currency_code),
      })),
    })),
    image_url: product.images[0]?.url!,
    thumbnail: product.thumbnail!,
    preface: product.description!,
  };
}
