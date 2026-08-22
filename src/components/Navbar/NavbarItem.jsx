import { NavLink } from "react-router";

export default function NavbarItem({ name, route, icon, expandState }) {
  console.log("navbar state", expandState);
  return (
    <NavLink
      to={`/${route}`}
      className={`${({ isActive }) => (isActive ? "selected" : "")} w-full px-2 transition-all ease-in-out duration-200`}
    >
      <div
        className={`flex flex-row gap-1 px-1 text-sm items-center font-medium text-gray-700 hover:bg-stone-100 rounded-md py-1 hover:duration-200 w-full
        `}
      >
        {icon}
        {expandState && <p>{name}</p>}
      </div>
    </NavLink>
  );
}
