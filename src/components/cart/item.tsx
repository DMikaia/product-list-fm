import { removeItem } from "../../stores/cart";
import type { CartItem } from "../../types/cart";

interface Props {
  cartItem: CartItem;
}

export default function Item({ cartItem }: Props) {
  return (
    <li className="w-full h-fit flex justify-between items-center pb-4 border-b border-rose-900">
      <section className="flex flex-col gap-2">
        <h5 className="font-RedHatText-600 text-rose-900">
          {cartItem.item.name}
        </h5>
        <div className="flex gap-2 items-center text-sm">
          <p className="font-RedHatText-600 text-red">{cartItem.quantity}x</p>
          <p className="text-rose-400">@${cartItem.item.price}</p>
          <p className="text-rose-500">
            ${cartItem.item.price * cartItem.quantity}
          </p>
        </div>
      </section>

      <button
        onClick={() => removeItem(cartItem.item.id)}
        className="w-fit h-fit border border-red rounded-full p-1 hover:cursor-pointer"
      >
        <img
          src="/icons/icon-remove-item.svg"
          alt="Empty cart illustration"
          width="10"
          height="10"
        />
      </button>
    </li>
  );
}
