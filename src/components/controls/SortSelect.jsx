import { FiChevronDown } from "react-icons/fi";

export default function SortSelect({
  value,
  onChange,
  label = "ترتيب حسب",
  className = ""
}) {
  return (
    <div className={`w-full max-w-[200px] ${className}`}>

      {/* Label */}
      <label className="block mb-2 text-base md:text-lg leading-7 font-normal text-gray-900 text-right">
        {label}
      </label>

      {/* Select wrapper */}
      <div className="relative h-[40px]">

        {/* Native select */}
        <select
          value={value}
          onChange={onChange}
          dir="rtl"
          className="
            w-full
            h-full
            appearance-none
            rounded-lg
            border
            border-gray-300
            bg-white
            pr-4
            pl-10
            text-base
            text-gray-900
            outline-none
            focus:border-[#1B8354]
          "
        >
          <option value="newest">الأحدث</option>
          <option value="oldest">الأقدم</option>
        </select>

        <FiChevronDown
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
          size={20}
        />
      </div>
    </div>
  );
}
