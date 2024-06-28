import { NavLink } from "react-router-dom";
import { navItems } from "../constants/Index";

export default function Navbar() {
  return (
    <nav className="sm:absolute sm:top-0 sm:z-20 sm:right-0 left-0 sm:left-auto border border-gray-500 bg-opacity-35 py-4 px-5 sm:rounded-bl-xl ">
      <ul className="flex gap-x-6">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={`${item.href}`}
              className={({ isActive }) =>
                isActive
                  ? "text-gray-100 font-semibold "
                  : "text-gray-300 font-normal"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
