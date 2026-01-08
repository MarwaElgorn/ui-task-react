import { FiX } from "react-icons/fi";

export default function Drawer({ open, onClose, children }) {
  if (!open) return null;

  return (
    <>
      {/* overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-40"
        onClick={onClose}
      />

      {/* drawer */}
      <aside
        className="
    fixed
    top-0
    right-0
    bottom-0
    z-50
    w-full
    max-w-[651px]
    bg-white
    shadow-2xl
    flex
    flex-col
  "
      >
        {/* close */}
        <button
          onClick={onClose}
  className="
    absolute
    top-4
    left-4
    w-9
    h-9
    rounded-sm
    bg-gray-100
    flex
    items-center
    justify-center
    hover:bg-gray-200
  "        >
          <FiX size={22} />
        </button>

        {/* content */}
      <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
      </aside>
    </>
  );
}
