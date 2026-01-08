import { MapPin, Calendar, ChevronDown  } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden md:block w-full  bg-[#F3F4F6] border-b">
      <div className="container mx-auto px-4 h-10 flex items-center justify-between text-sm text-gray-700">

        {/* left */}
         <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span>الرياض</span>
            <MapPin className="w-4 h-4" />
          </div>

          <div className="flex items-center gap-2">
            <span dir="rtl">3-سبتمبر-2024</span>
            <Calendar className="w-4 h-4" />
          </div>
        </div>

        {/* right */}
      <div className="flex items-center gap-3 text-base leading-6" dir="rtl">
          <img
        src="/flag.svg"
        alt="Saudi Arabia"
        className="h-4 shrink-0"
      />
      <span className="font-arabic text-sm leading-5 font-medium tracking-normal text-[#161616]">
        موقع حكومي رسمي تابع لحكومة المملكة العربية السعودية
      </span>
         <button className="flex items-center gap-1 text-[#1B8354]  font-medium">
        <span>كيف تتحقق</span>
        <ChevronDown className="w-4 h-4" />
      </button>

    </div>
      </div>
    </div>
  );
}
