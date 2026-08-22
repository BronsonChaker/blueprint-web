import { NavLink } from "react-router";

export default function NavbarItem({ name, route, icon, expandState }) {
  return (
    <NavLink
      to={`/${route}`}
      className={({ isActive }) =>
        `${isActive ? "active" : ""} w-full px-2 transition-all ease-in-out duration-200`
      }
    >
      {({ isActive }) => (
        <div
          className={`navbar-item
            ${isActive ? "text-white" : "text-gray-700 hover:bg-stone-100"}
          `}
        >
          {icon}
          {expandState && <p>{name}</p>}
        </div>
      )}
    </NavLink>
  );
}
