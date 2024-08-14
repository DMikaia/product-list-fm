import type { Item } from "../../types/item";

interface Props {
  item: Item;
}

export default function Product({ item }: Props) {
  return (
    <section className="w-full h-fit">
      <div>
        <picture>
          <source
            className="rounded-lg aspect-auto"
            src={item.image.mobile}
            media="(min-width: 375px)"
          />
          <source
            className="rounded-lg aspect-auto"
            src={item.image.tablet}
            media="(min-width: 640px)"
          />
          <img
            className="rounded-lg aspect-auto"
            src={item.image.desktop}
            alt={item.name}
          />
        </picture>
      </div>

      <p>{item.category}</p>
      <h3>{item.name}</h3>
      <p>${item.price}</p>
    </section>
  );
}
