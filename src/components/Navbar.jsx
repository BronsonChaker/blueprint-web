import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="h-18 w-full py-5 px-10 flex flex-row items-center">
      {/* Logo */}

      {/* Links */}

      <div className="w-2/4 flex font-semibold text-stone-500 text-md gap-15 items-center">
        <Link to="">
          <span className="font-bold text-3xl text-primary">B</span>
        </Link>

        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/dashboard"
        >
          <div className="flex flex-row gap-1 items-center font-bold">
            <p>Dashboard</p>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/jobs"
        >
          <div className="flex flex-row gap-1 items-center bold text-stone-600 hover:bg-stone-100 rounded-md p-1 hover:duration-200">
            <span class="material-symbols-outlined">workspaces</span>
            <p>Jobs</p>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/inspections"
        >
          Inspections
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/reports"
        >
          Reports
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/vendors"
        >
          Vendors
        </NavLink>
      </div>

      {/* Profile */}
      <div className="w-1/4 flex justify-between"></div>
    </nav>
  );
}
