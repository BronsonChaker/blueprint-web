import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="h-18 w-full py-5 px-10 flex flex-row items-center border-b border-stone-300 shadow-sm">
      {/* Logo */}
      <div className="w-1/4 justify-center">
        <Link to="">
          <span className="font-bold text-3xl text-primary">Blueprint</span>
        </Link>
      </div>

      {/* Links */}

      <div className="w-2/4 flex justify-between font-semibold text-stone-500 text-lg">
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/jobs"
        >
          Jobs
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
