import Skeleton from "../ui/skeleton";

export default function Loading() {
  return (
    <section className="w-full h-fit flex flex-col gap-6">
      <div className="relative w-full h-full aspect-4/3">
        <Skeleton className="absolute inset-0 w-full h-full z-10" />

        <div className="absolute -bottom-4 z-20 flex items-center justify-center w-full h-[38px]">
          <Skeleton className="py-2 px-6 w-[144px] h-full rounded-full z-20" />
        </div>
      </div>

      <section className="w-full h-[56px] flex flex-col gap-0.5">
        <Skeleton className="w-[34px] h-[16px]" />
        <Skeleton className="w-[124px] h-[18px]" />
        <Skeleton className="w-[36px] h-[18px]" />
      </section>
    </section>
  );
}
