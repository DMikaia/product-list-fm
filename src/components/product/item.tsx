import type { Item } from "../../types/item";
import CTAButton from "./button";
import ProductImage from "./image";

interface Props {
  item: Item;
}

export default function Product({ item }: Props) {
  return (
    <section className="w-full h-fit flex flex-col gap-6">
      <div className="w-fit h-fit relative">
        <div className="z-10">
          <ul>
            {Object.keys(item.image).map((screen) => {
              return (
                <ProductImage
                  key={screen}
                  screen={screen}
                  src={item.image[screen]}
                  alt={item.name}
                />
              );
            })}
          </ul>
        </div>

        <div className="absolute -bottom-4 z-20 flex items-center justify-center w-full h-fit">
          <CTAButton />
        </div>
      </div>

      <div className="w-full h-fit">
        <p className="text-xs text-rose-400">{item.category}</p>
        <h5 className="text-sm text-rose-900">{item.name}</h5>
        <p className="text-sm text-red">${item.price.toFixed(2)}</p>
      </div>
    </section>
  );
}
