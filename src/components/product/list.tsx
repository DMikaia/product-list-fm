import type { Item } from "../../types/item";
import Product from "./item";
import { Fragment } from "react";
import Loading from "./loading";

interface Props {
  items: Item[];
  loaded: boolean;
}

export default function ProductList({ items, loaded }: Props) {
  return (
    <ul className="grid gap-4 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 h-full">
      {!loaded ? (
        <Fragment>
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <Loading key={index} />
            ))}
        </Fragment>
      ) : (
        <Fragment>
          {items.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </Fragment>
      )}
    </ul>
  );
}
