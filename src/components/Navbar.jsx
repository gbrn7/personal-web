import { NavLink } from "react-router-dom";
import { navItems } from "../constants/Index";

export default function Navbar() {
  return (
    <nav className="absolute top-0 z-20 right-0 border border-gray-500  bg-opacity-35 py-4 px-5 rounded-bl-xl rounded-tr-xl">
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
