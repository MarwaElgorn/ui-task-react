export default function DateBadge({ date }) {
  return (
    <span className="inline-flex items-center h-[24px] w-[84px] px-3 rounded-md border border-gray-300 bg-white text-xs font-medium text-[#1F2A37]">
      {date}
    </span>
  );
}
