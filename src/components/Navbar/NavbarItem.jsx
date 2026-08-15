import { NavLink } from "react-router";

export default function NavbarItem({ name, route, icon }) {
  return (
    <NavLink
      to={`/${route}`}
      className={`${({ isActive }) => (isActive ? "selected" : "")} w-full px-2`}
    >
      <div className="flex flex-row gap-1 px-1 text-sm items-center font-medium hover:bg-stone-100 rounded-md py-1 hover:duration-200 w-full">
        {icon}
        <p>{name}</p>
      </div>
    </NavLink>
  );
}
