import type { Item } from "@/types/item";
import { atom } from "nanostores";

export const products = atom<Item[]>([]);

export const addProduct = (product: Item) => {
  products.set([...products.get(), product]);
};
