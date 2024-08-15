import type { Item } from "@/types/item";
import { atom } from "nanostores";

export const products = atom<Item[]>([]);
