import EmptyCart from "./empty";
import { useStore } from "@nanostores/react";
import LoadedCart from "./loaded";
import { cartStore } from "../../stores/cart";

export default function Cart() {
  const $store = useStore(cartStore);

  return (
    <section className="flex flex-col gap-4 w-full tablet:w-1/3 desktop:w-1/4 h-fit p-6 bg-rose-50 rounded-lg">
      <h2 className="text-xl text-red font-RedHatText-700">
        Your cart ({$store.length})
      </h2>

      {$store.length > 0 ? <LoadedCart items={$store} /> : <EmptyCart />}
    </section>
  );
}
