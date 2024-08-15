export default function CTAButton() {
  return (
    <button className="flex text-rose-900 ease-linear duration-200 hover:text-red py-2 px-6 gap-2 items-center justify-center w-fit h-full rounded-3xl border border-red bg-rose-50">
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
