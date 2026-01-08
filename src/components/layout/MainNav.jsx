import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import LanguageSwitch from "../shared/LanguageSwitch.jsx";

export default function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b-2 border-gray-200">
      <div className="mx-auto max-w-[1440px] h-[72px] px-4 flex items-center justify-between">

        {/* Right */}
        <div className="flex items-center gap-3 text-sm text-gray-800">
          <LanguageSwitch />

          <div className="hidden sm:flex items-center gap-1">
            <FiSearch size={18} />
            <span>بحث</span>
          </div>

          <span className="hidden md:inline">
            صح (صكوك حكومية)
          </span>
        </div>

        {/* Center – desktop only (unchanged) */}
        <nav className="hidden lg:flex items-center gap-2">
          <NavItem to="/" label="المركز الإعلامي" />
          <NavItem to="/primary-dealers" label="المتعاملين الأوليين" />
          <NavItem to="/investors" label="المستثمرون" />
          <NavItem to="/programs" label="برامج الإصدارات" />
          <NavItem to="/about" label="عن المركز" />
        </nav>

        {/* Left */}
        <div className="flex items-center gap-3">
    <img
  src="/Logo.svg"
  alt="NDMC Logo"
  className="
    w-[120px] h-[44px]
    sm:w-[140px] sm:h-[52px]
    lg:w-[154px] lg:h-[58px]
    object-contain
  "
/>


          {/* Hamburger – mobile only */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(true)}
          >
            <FiMenu size={24} />
          </button>
        </div>

      </div>

      {/* Mobile menu only */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="absolute right-0 top-0 h-full w-[280px] bg-white p-6">

            <button
              className="mb-6"
              onClick={() => setOpen(false)}
            >
              <FiX size={24} />
            </button>

            <nav className="flex flex-col gap-4 text-right">
              <MobileNavItem to="/" label="المركز الإعلامي" onClick={() => setOpen(false)} />
              <MobileNavItem to="/primary-dealers" label="المتعاملين الأوليين" onClick={() => setOpen(false)} />
              <MobileNavItem to="/investors" label="المستثمرون" onClick={() => setOpen(false)} />
              <MobileNavItem to="/programs" label="برامج الإصدارات" onClick={() => setOpen(false)} />
              <MobileNavItem to="/about" label="عن المركز" onClick={() => setOpen(false)} />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        relative
        flex items-center gap-1
        h-[72px]
        px-6
        text-base
        leading-6
        font-semibold
        transition-colors
        ${
          isActive
            ? "bg-[#1B8354] text-white"
            : "text-gray-900 hover:bg-[#1B8354] hover:text-white"
        }
      `}
      style={{ fontFamily: "IBM Plex Arabic" }}
    >
      {({ isActive }) => (
        <>
          <span>{label}</span>
          <FiChevronDown />
          <span
            className={`
              absolute
              bottom-1
              left-1/2
              -translate-x-1/2
              w-30
              h-1.5
              rounded-full
              bg-[#54C08A]
              transition-opacity
              ${isActive ? "opacity-100" : "opacity-0"}
            `}
          />
        </>
      )}
    </NavLink>
  );
}

function MobileNavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className="text-base font-medium text-gray-900"
    >
      {label}
    </NavLink>
  );
}
