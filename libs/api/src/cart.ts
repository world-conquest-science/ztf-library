import client, { getCartsId, postCarts, StoreCartResponse } from "./clients";
import { toCart } from "./converters/cart";

export async function create() {
  const response = await postCarts({ client });

  if (!response || response?.error) {
    return null;
  }

  const { cart } = response.data as StoreCartResponse;
  return toCart(cart);
}

export async function get(id: string) {
  const response = await getCartsId({
    client,
    path: { id },
  });

  if (!response || response.error) {
    return null;
  }

  const { cart } = response.data as StoreCartResponse;
  return toCart(cart);
}
