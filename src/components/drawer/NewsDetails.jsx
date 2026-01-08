import DateBadge from "@/components/shared/DateBadge";


export default function NewsDetails({ item }) {
  if (!item) return null;

  return (
    <div className="text-right">
      {/* image */}
      <div className="bg-[#F3F3F3] rounded-xl h-[278px] flex items-center justify-center mb-6 mt-10
">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-full object-contain"
        />
      </div>

      {/* title */}
      <h2 dir="rtl" className="text-lg font-bold leading-7 text-gray-900 mb-4">
        {item.description}
      </h2>

      {/* date */}
      <div className="mb-6">
        <DateBadge date={item.hijriDate} />
      </div>

      {/* long content */}
      <div className="text-base leading-7 text-gray-700 space-y-4">
        <p>{item.description}</p>

        {item.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
