import type { CartItem } from "../../types/cart";
import Item from "./item";
import { sumTotal } from "../../stores/cart";
import ConfirmModal from "../modal/modal";

interface Props {
  items: CartItem[];
}

export default function LoadedCart({ items }: Props) {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center gap-4">
      <ul className="w-full h-fit flex flex-col gap-4">
        {items.map((item, key) => (
          <Item key={key} cartItem={item} />
        ))}
      </ul>

      <div className="w-full flex items-center justify-between">
        <p className="text-sm text-rose-900">Order total</p>
        <h2 className="text-xl font-RedHatText-700 text-rose-900">
          ${sumTotal()}
        </h2>
      </div>

      <div className="w-full h-fit p-2 gap-2 flex justify-center items-center bg-rose-100 rounded-lg">
        <img
          src="/icons/icon-carbon-neutral.svg"
          alt="Empty cart illustration"
          width="21"
          height="20"
        />
        <p className="text-rose-900 text-sm">
          This is a <span className="font-RedHatText-600">carbon-neutral</span>{" "}
          delivery
        </p>
      </div>

      <ConfirmModal cartItems={items} />
    </div>
  );
}
