import { getProduct } from "../../services/get-product";
import type { Item } from "../../types/item";
import Product from "./item";

interface Props {
  items: Item[];
}

export default function ProductList({ items }: Props) {
  return (
    <ul>
      {items.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </ul>
  );
}
