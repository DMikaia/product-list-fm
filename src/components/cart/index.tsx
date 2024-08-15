export default function Cart() {
  return (
    <section className="w-full flex flex-col gap-4 tablet:w-1/3 h-fit p-6 bg-rose-50 rounded-lg">
      <h2 className="text-xl text-red font-RedHatText-700">Your cart (0)</h2>

      <div className="w-full h-fit flex flex-col justify-center items-center gap-2">
        <img
          src="/icons/illustration-empty-cart.svg"
          alt="Empty cart illustration"
          width="100"
          height="100"
        />
        <p className="text-rose-500 text-sm">
          Your added items will appear here
        </p>
      </div>
    </section>
  );
}
