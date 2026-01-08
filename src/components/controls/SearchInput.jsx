import { FiSearch } from "react-icons/fi";
import { CiMicrophoneOn } from "react-icons/ci";

export default function SearchInput({
  value,
  onChange,
  label = "عنوان القسم",
  placeholder = "ابحث باسم القسم",
  className = ""
}) {
  return (
    <div className={`w-full max-w-[360px] ${className}`}>

      {/* Label */}
      <label className="block mb-3 text-base md:text-lg leading-7 font-medium text-gray-900 text-right">
        {label}
      </label>

      {/* Input wrapper */}
      <div className="relative h-[48px] rounded-xl border-2 border-[#9CA3AF] bg-white">

        {/* Search icon */}
        <FiSearch
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#161616]"
          size={20}
        />

        {/* Mic icon */}
        <CiMicrophoneOn
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#161616]"
          size={20}
        />

        {/* Input */}
        <input
          type="text"
          dir="rtl"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full
            h-full
            bg-transparent
            pr-12
            pl-12
            text-base
            leading-6
            text-gray-900
            placeholder:text-gray-400
            text-right
            outline-none
          "
        />
      </div>
    </div>
  );
}
