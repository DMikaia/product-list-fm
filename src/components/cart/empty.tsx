export default function EmptyCart() {
  return (
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
  );
}
