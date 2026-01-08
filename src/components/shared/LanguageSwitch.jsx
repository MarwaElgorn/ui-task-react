import LanguageIcon from "@/assets/icons/LanguageIcon"

export default function LanguageSwitch() {
  return (
    <button className="flex items-center gap-2 text-base font-medium text-[ #161616]
">
      English
      <span className="flex items-center justify-center w-8 h-8 ">
        <LanguageIcon className="text-[#161616]" />
      </span>
    </button>
  )
}
