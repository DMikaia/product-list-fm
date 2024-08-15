import { products } from "../stores/store";
import type { Item } from "../types/item";

export const addProduct = (product: Item) => {
  products.set([...products.get(), product]);
};
