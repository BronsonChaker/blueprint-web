import { Link, NavLink } from "react-router";
import { GoChecklist } from "react-icons/go";
import { GrUserWorker } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { LuHouse } from "react-icons/lu";
import { HiOutlineSelector } from "react-icons/hi";

import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="h-20 w-full text-md py-5 px-20 flex flex-row items-center justify-between">
      {/* Logo */}

      <div>
        <Link to="">
          <span className="font-bold text-3xl text-primary">Blueprint</span>
        </Link>
      </div>
      {/* Links */}

      <div className="flex font-medium text-gray-800 text-lg gap-12 items-center">
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/dashboard"
        >
          <div className="flex flex-row gap-1 items-center bold hover:bg-stone-100 rounded-md px-2 py-1 hover:duration-200">
            <MdDashboard />
            <p>Dashboard</p>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/projects"
        >
          <div className="flex flex-row gap-1 items-center bold hover:bg-stone-100 rounded-md px-2 py-1 hover:duration-200">
            <LuHouse />
            <p>Projects</p>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/inspections"
        >
          <div className="flex flex-row gap-1 items-center bold hover:bg-stone-100 rounded-md px-2 py-1 hover:duration-200">
            <FaMagnifyingGlass />

            <p>Inspections</p>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/reports"
        >
          <div className="flex flex-row gap-1 items-center bold hover:bg-stone-100 rounded-md px-2 py-1 hover:duration-200">
            <HiOutlineDocumentReport />
            <p>Reports</p>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/vendors"
        >
          <div className="flex flex-row gap-1 items-center bold hover:bg-stone-100 rounded-md px-2 py-1 hover:duration-200">
            <GrUserWorker />
            <p>Vendors</p>
          </div>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/checklist"
        >
          <div className="flex flex-row gap-1 items-center bol hover:bg-stone-100 rounded-md px-2 py-1 hover:duration-200">
            <GoChecklist />
            <p>Checklist</p>
          </div>
        </NavLink>
      </div>

      {/* Search */}
      {/* <div className="">
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
      </div> */}

      {/* Profile */}
      <div className="flex justify-between hover:cursor-pointer hover:opacity-80">
        <div className="flex flex-row gap-2 px-1 py-1 rounded-md">
          <div className="flex justify-center">
            <span className="p-2 bg-blue-300 rounded-md">BC </span>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm">Bronson Chaker</p>
            <p className="text-sm">Senior Site Supervisor</p>
          </div>
          <div className="h-full flex justify-center items-center">
            <HiOutlineSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}
