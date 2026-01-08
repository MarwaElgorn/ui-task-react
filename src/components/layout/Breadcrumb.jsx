import { NavLink } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

export default function Breadcrumb({ items = [] }) {
  const reversedItems = [...items].reverse();

  return (
    <nav className="flex items-center justify-end gap-2 text-sm text-gray-500">
      {reversedItems.map((item, index) => {
        const isLast = index === 0;

        return (
          <div key={index} className="flex items-center gap-2">
            
            {isLast ? (
              <span className="text-gray-400">
                {item.label}
              </span>
            ) : (
              <NavLink
                to={item.href}
                className="hover:text-gray-900"
              >
                {item.label}
              </NavLink>
            )}

            {index < reversedItems.length - 1 && (
              <FiChevronLeft className="w-4 h-4 text-gray-400" />
            )}
          </div>
        );
      })}
    </nav>
  );
}
