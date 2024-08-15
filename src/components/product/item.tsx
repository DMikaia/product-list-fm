import { useStore } from "@nanostores/react";
import type { Item } from "../../types/item";
import CTAButton from "./button";
import ProductImage from "./ProductImage";
import { cartStore } from "../../stores/cart";
import StateButton from "./state-button";

interface Props {
  item: Item;
}

export default function Product({ item }: Props) {
  const store = useStore(cartStore);
  const found = store.find((element) => element.item.id === item.id);

  return (
    <section className="w-full h-fit flex flex-col gap-6">
      <div className="w-full relative h-full">
        <ul className="w-full h-full z-10 aspect-4/3 bg-muted rounded-lg">
          {Object.keys(item.image).map((screen) => (
            <ProductImage
              key={screen}
              screen={screen}
              url={item.image[screen]}
              description={item.name}
            />
          ))}
        </ul>

        <div className="absolute -bottom-4 z-20 flex items-center justify-center w-full h-fit">
          {found ? (
            <StateButton id={item.id} quantity={found.quantity} />
          ) : (
            <CTAButton item={item} />
          )}
        </div>
      </div>

      <section className="w-full h-[56px]">
        <p className="text-xs text-rose-400 w-fit">{item.category}</p>
        <h5 className="text-sm text-rose-900 font-RedHatText-600 w-fit">
          {item.name}
        </h5>
        <p className="text-sm text-red w-fit">${item.price.toFixed(2)}</p>
      </section>
    </section>
  );
}
