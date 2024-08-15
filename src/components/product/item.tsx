import type { Item } from "../../types/item";
import CTAButton from "./button";
import ProductImage from "./image";

interface Props {
  item: Item;
}

export default function Product({ item }: Props) {
  return (
    <section className="w-full h-fit flex flex-col gap-6">
      <div className="w-full relative h-full">
        <ul className="w-full h-full z-10 aspect-4/3">
          {Object.keys(item.image).map((screen) => (
            <ProductImage
              key={screen}
              screen={screen}
              src={item.image[screen]}
              alt={item.name}
            />
          ))}
        </ul>

        <div className="absolute -bottom-4 z-20 flex items-center justify-center w-full h-fit">
          <CTAButton />
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
