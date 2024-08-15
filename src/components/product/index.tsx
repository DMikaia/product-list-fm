import ProductList from "./list";
import type { Item } from "../../types/item";

interface Props {
  items: Item[];
}

export default function ProductLayout({ items }: Props) {
  return (
    <section className="flex flex-col gap-4 w-full tablet:w-2/3 ">
      <h1 className="text-3xl text-rose-900 font-RedHatText-700">Desserts</h1>

      <ProductList items={items} />
    </section>
  );
}
