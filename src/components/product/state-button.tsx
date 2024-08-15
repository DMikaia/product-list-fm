import { decrementItem, incrementItem } from "../../stores/cart";

interface Props {
  id: string;
  quantity: number;
}

export default function StateButton({ id, quantity }: Props) {
  return (
    <div className="w-[144px] flex text-rose-900 py-2 px-4 gap-2 items-center justify-between h-full rounded-3xl bg-red">
      <button
        onClick={() => decrementItem(id)}
        className="border-rose-50 border rounded-full w-[16px] h-[16px] p-1 grid place-content-center"
      >
        <img
          src="/icons/icon-decrement-quantity.svg"
          alt="Decrement icon"
          width={10}
          height={2}
        />
      </button>

      <p className="text-sm text-rose-50">{quantity}</p>

      <button
        onClick={() => incrementItem(id)}
        className="border-rose-50 border rounded-full w-[16px] h-[16px] p-1 grid place-content-center"
      >
        <img
          src="/icons/icon-increment-quantity.svg"
          alt="Increment icon"
          width={10}
          height={10}
        />
      </button>
    </div>
  );
}
