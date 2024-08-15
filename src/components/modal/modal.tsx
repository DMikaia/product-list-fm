import type { CartItem } from "../../types/cart";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { resetStore, sumTotal } from "../../stores/cart";

interface Props {
  cartItems: CartItem[];
}

export default function ConfirmModal({ cartItems }: Props) {
  const total = sumTotal();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="py-2 w-full h-fit rounded-full bg-red text-rose-50 ease-in-out duration-200 hover:opacity-90">
          Confirm order
        </button>
      </DialogTrigger>
      <DialogContent className="phone:max-w-md overflow-y-auto overflow-x-hidden">
        <DialogHeader className="text-left h-fit w-full">
          <img
            src="/icons/icon-order-confirmed.svg"
            alt="Order confirmed icon"
            width="48"
            height="48"
          />
          <DialogTitle className="text-5xl text-rose-900 font-RedHatText-700">
            Order confirmed
          </DialogTitle>
          <DialogDescription className="text-lg text-rose-500">
            We hope you enjoy your food!
          </DialogDescription>
        </DialogHeader>

        <div className="bg-rose-100 p-8 w-full tablet:max-h-[256px] rounded-lg flex flex-col gap-4 overflow-y-auto">
          <ul className="flex flex-col gap-4">
            {cartItems.map((cartItem, index) => (
              <li
                key={index}
                className="w-full h-fit flex justify-between items-center"
              >
                <div className="flex items-center justify-center gap-4">
                  <img
                    className="rounded-md"
                    src={cartItem.item.image["thumbnail"]}
                    alt={cartItem.item.name}
                    width={70}
                    height={64}
                  />

                  <section className="flex flex-col gap-2 text-sm">
                    <h3 className="font-RedHatText-700">
                      {cartItem.item.name}
                    </h3>

                    <div className="flex gap-2 items-center">
                      <p className="font-RedHatText-600 text-red">
                        {cartItem.quantity}x
                      </p>
                      <p className="text-rose-400">@${cartItem.item.price}</p>
                    </div>
                  </section>
                </div>

                <p className="text-rose-500">
                  ${cartItem.item.price * cartItem.quantity}
                </p>
              </li>
            ))}
          </ul>

          <div className="w-full h-fit flex items-center justify-between">
            <p className="text-sm text-rose-900">Order total</p>
            <p className="text-xl font-RedHatText-700 text-rose-900">
              ${total}
            </p>
          </div>
        </div>

        <DialogFooter className="sm:justify-start h-fit">
          <button
            onClick={() => resetStore()}
            className="py-2 w-full h-fit rounded-full bg-red text-rose-50 ease-in-out duration-200 hover:opacity-90"
          >
            Start new order
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
