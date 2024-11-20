import client, {
  deleteCartsIdLineItemsLineId,
  DeleteCartsIdLineItemsLineIdResponse,
  getCartsId,
  postCarts,
  postCartsIdLineItems,
  postCartsIdLineItemsLineId,
  StoreCartResponse,
} from "./clients";
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

export async function addToCart(cartId: string, variantId: string) {
  const response = await postCartsIdLineItems({
    client,
    body: {
      variant_id: variantId,
      quantity: 1,
    },
    path: { id: cartId },
  });

  if (!response || response.error) {
    return null;
  }

  const { cart } = response.data as StoreCartResponse;
  return toCart(cart);
}

export async function updateQuantityInCart(
  cartId: string,
  variantId: string,
  quantity: number
) {
  const response = await postCartsIdLineItemsLineId({
    client,
    body: { quantity },
    path: { id: cartId, line_id: variantId },
  });

  if (!response || response.error) {
    return null;
  }

  const { cart } = response.data as StoreCartResponse;
  return toCart(cart);
}

export async function removeFromCart(cartId: string, variantId: string) {
  const response = await deleteCartsIdLineItemsLineId({
    client,
    path: { id: cartId, line_id: variantId },
  });

  if (!response || response.error) {
    return null;
  }

  const { parent, deleted } =
    response.data as DeleteCartsIdLineItemsLineIdResponse;

  if (!deleted) {
    return null;
  }

  return toCart(parent!);
}
