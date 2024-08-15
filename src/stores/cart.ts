import type { CartItem } from "@/types/cart";
import type { Item } from "@/types/item";
import { atom } from "nanostores";

export const cartStore = atom<CartItem[]>([]);

export const addItemToCart = (product: Item) => {
  const newItem = {
    item: product,
    quantity: 1,
  };

  cartStore.set([...cartStore.get(), newItem]);
};

export const incrementItem = (id: string) => {
  const items = cartStore.get();

  const updatedItems = items.map((cartItem) =>
    cartItem.item.id === id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );

  cartStore.set(updatedItems);
};

export const decrementItem = (id: string) => {
  const items = cartStore.get();

  const updatedItems = items
    .map((cartItem) =>
      cartItem.item.id === id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
    .filter((cartItem) => cartItem.quantity > 0);

  cartStore.set(updatedItems);
};

export const countItems = () => {
  const items = cartStore.get();

  const totals = items.reduce((acc, curr) => acc + curr.quantity, 0);

  return totals;
};

export const sumTotal = () => {
  const items = cartStore.get();

  const totals = items.reduce(
    (acc, curr) => acc + curr.item.price * curr.quantity,
    0
  );

  return totals;
};

export const removeItem = (id: string) => {
  const items = cartStore.get();

  const updatedItems = items.filter((cartItem) => cartItem.item.id !== id);

  cartStore.set(updatedItems);
};

export const resetStore = () => {
  cartStore.set([]);
};
