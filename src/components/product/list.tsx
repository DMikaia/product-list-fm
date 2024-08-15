import type { Item } from "../../types/item";
import Product from "./item";

interface Props {
  items: Item[];
}

export default function ProductList({ items }: Props) {
  return (
    <ul className="grid gap-4 grid-cols-1 laptop:grid-cols-3 h-full">
      {items.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </ul>
  );
}
