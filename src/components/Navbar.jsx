import { Link, NavLink } from "react-router";
import { GoChecklist } from "react-icons/go";
import { GrUserWorker } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { BsHouse } from "react-icons/bs";
import { PiMagnifyingGlass } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="h-18 w-full text-md py-5 px-10 flex flex-row items-center">
      {/* Logo */}

      {/* Links */}

      <div className="w-2/4 flex font-semibold text-stone-500 text-md gap-15 items-center">
        <Link to="">
          <span className="font-bold text-3xl text-primary">Blueprint</span>
        </Link>

        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/dashboard"
        >
          <div className="flex flex-row gap-1 items-center bold text-stone-600 hover:bg-stone-100 rounded-md p-1 hover:duration-200">
            <MdDashboard />
            <p>Dashboard</p>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/jobs"
        >
          <div className="flex flex-row gap-1 items-center bold text-stone-500 hover:bg-stone-100 rounded-md p-1 hover:duration-200">
            <BsHouse />
            <p>Jobs</p>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/inspections"
        >
          <div className="flex flex-row gap-1 items-center bold text-stone-500 hover:bg-stone-100 rounded-md p-1 hover:duration-200">
            <PiMagnifyingGlass />

            <p>Inspections</p>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/reports"
        >
          <div className="flex flex-row gap-1 items-center bold text-stone-500 hover:bg-stone-100 rounded-md p-1 hover:duration-200">
            <HiOutlineDocumentReport />
            <p>Reports</p>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/vendors"
        >
          <div className="flex flex-row gap-1 items-center bold text-stone-500 hover:bg-stone-100 rounded-md p-1 hover:duration-200">
            <GrUserWorker />
            <p>Vendors</p>
          </div>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/checklist"
        >
          <div className="flex flex-row gap-1 items-center bold text-stone-500 hover:bg-stone-100 rounded-md p-1 hover:duration-200">
            <GoChecklist />
            <p>Checklist</p>
          </div>
        </NavLink>
      </div>

      {/* Search */}
      <div className="w-1/4"></div>

      {/* Profile */}
      <div className="w-/4 flex justify-between">
        <form action="">
          <div className="flex flex-row items-center rounded-sm outline-2 outline-stone-300 gap-2">
            <IoSearch />
            <input
              type="search"
              className="outline-none [&::-webkit-search-cancel-button]:hidden"
              placeholder="Search Jobs"
            />
          </div>
        </form>
      </div>
    </nav>
  );
}
