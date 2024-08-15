import ProductList from "./list";
import { useStore } from "@nanostores/react";
import { products, addProduct } from "../../stores/products";
import { useEffect, useState } from "react";
import data from "../../data/products.json";
import { wait } from "../../libs/wait";

export default function ProductLayout() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const list = useStore(products);

  useEffect(() => {
    const loadProducts = async () => {
      if (!loaded && list.length === 0) {
        data.forEach((product) => addProduct(product));
        await wait(1000);
        setLoaded(true);
      }
    };

    loadProducts();
  }, [loaded, list.length]);

  return (
    <section className="flex flex-col gap-4 w-full tablet:w-2/3 desktop:w-3/4">
      <h1 className="text-3xl text-rose-900 font-RedHatText-700">Desserts</h1>
      <ProductList items={list} loaded={loaded} />
    </section>
  );
}
