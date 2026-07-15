import { Link, NavLink } from "react-router";
import { GoChecklist } from "react-icons/go";
import { GrUserWorker } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { LuHouse } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";

let firstLastName = "Bronson Chaker";
let jobRole = "Senior Supervisor";

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
          to="/checklist"
        >
          <div className="flex flex-row gap-1 items-center bol hover:bg-stone-100 rounded-md px-2 py-1 hover:duration-200">
            <GoChecklist />
            <p>Checklist</p>
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
          to="/reports"
        >
          <div className="flex flex-row gap-1 items-center bold hover:bg-stone-100 rounded-md px-2 py-1 hover:duration-200">
            <HiOutlineDocumentReport />
            <p>Reports</p>
          </div>
        </NavLink>
      </div>

      {/* Profile */}
      <div className="flex justify-between hover:cursor-pointer hover:opacity-80">
        <div className="flex flex-row gap-2 px-1 py-1 rounded-md">
          <div className="flex items-center gap-2">
            <img
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
              alt="avatar"
              className="inline-block object-cover object-center w-11 h-11 rounded-md"
            />
            <div>
              <p className="font-sans antialiased text-base text-current">
                {firstLastName}
              </p>
              <small className="font-sans antialiased text-sm text-stone-600">
                {jobRole}
              </small>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
