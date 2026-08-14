import { NavLink } from "react-router";

export default function NavbarItem({ name, route, icon }) {
  return (
    <NavLink
      to={`/${route}`}
      className={({ isActive }) => (isActive ? "selected" : "")}
    >
      <div className="flex flex-row gap-1 text-sm items-center bold hover:bg-stone-100 rounded-md px-2 py-1 hover:duration-200">
        {icon}
        <p>{name}</p>
      </div>
    </NavLink>
  );
}
