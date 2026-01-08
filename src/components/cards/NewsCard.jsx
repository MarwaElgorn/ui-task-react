import Button from "@/components/shared/Button";
import DateBadge from "@/components/shared/DateBadge";

export default function NewsCard({
  image,
  description,
  date,
  onReadMore,
}) {
  return (
    <div
      className="
    bg-white
    border border-[#D2D6DB]
    rounded-2xl
    w-full
    max-w-full sm:max-w-[410px]
    min-h-[530px]
    p-6
    flex flex-col
    text-right
  "
    >
      <div className="w-full h-[278px] rounded-md bg-[#F3F3F3] flex items-center justify-center">
        <img
          src={image}
          alt=""
          className="max-w-full h-full object-contain"
        />
      </div>

      <p
        className="font-arabic text-lg leading-7 font-bold mt-4 mb-6 flex-1"
        dir="rtl"
      >
        {description}
      </p>

      <div className="mt-auto flex flex-col items-end gap-4">
        <DateBadge date={date} />
        <Button className="px-6" onClick={onReadMore}>
          قراءة المزيد
        </Button>
      </div>
    </div>
  );
}
