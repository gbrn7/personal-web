import { NavLink } from "react-router-dom";
import { navItems } from "../constants/Index";

export default function Navbar() {
  return (
    <nav className="absolute top-0 bg-gray-600 p-4 rounded-bl-lg">
      <ul className="flex gap-x-6">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={`${item.href}`}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
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
