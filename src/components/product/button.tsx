import type { Item } from "../../types/item";
import { addItemToCart } from "../../stores/cart";

interface Props {
  item: Item;
}

export default function CTAButton({ item }: Props) {
  return (
    <button
      onClick={() => addItemToCart(item)}
      className="flex text-rose-900 ease-linear duration-200 border-rose-900 hover:text-red hover:border-red py-2 px-6 gap-2 items-center justify-center w-fit h-full rounded-3xl border bg-rose-50"
    >
      <img
        src="/icons/icon-add-to-cart.svg"
        alt="Cart icon"
        width={16}
        height={15}
      />

      <p className="text-sm">Add to cart</p>
    </button>
  );
}
