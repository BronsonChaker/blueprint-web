import { Link } from "react-router";
import { GoChecklist } from "react-icons/go";
import { GrUserWorker } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { LuHouse } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgOrganisation } from "react-icons/cg";
import { useAuth } from "../../context/AuthContext";
import LoginButton from "../Buttons/LoginButton";
import SignupButton from "../Buttons/SingupButton";
import NavbarItem from "./NavbarItem";
import UserDropdown from "../User/UserDropdown ";
import { IoCalendarOutline } from "react-icons/io5";
import { GoSidebarExpand } from "react-icons/go";
import { MdTaskAlt } from "react-icons/md";
import { AiOutlineNodeExpand } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const { user, loading } = useAuth();
  const { expandSidebar, setExpandSidebar } = useState(false);

  if (loading) return null;
  return (
    <nav className="h-screen w-60 text-md py-5 px-5 flex flex-col items-center justify-between border-r-2 border-stone-200">
      {/* Logo */}
      <div className="w-full">
        <div className="row justify-between items-center w-full">
          <div>
            <Link to="">
              <span className="font-bold text-2xl text-primary p-2">
                Blueprint
              </span>
            </Link>
          </div>
          <div className="">
            <GoSidebarExpand className="text-3xl rounded p-1 hc" />
          </div>
        </div>
        {/* Links */}

        <div className="flex flex-col font-medium text-gray-800 text-lg gap-2 items-start mt-2 w-full">
          <NavbarItem
            name="Dashboard"
            route="dashboard"
            icon={<MdDashboard />}
          />
          <NavbarItem name="Projects" route="projects" icon={<LuHouse />} />
          <NavbarItem name="Tasks" route="tasks" icon={<MdTaskAlt />} />
          <NavbarItem
            name="Planner"
            route="planner"
            icon={<AiOutlineNodeExpand />}
          />
          <NavbarItem
            name="Inspections"
            route="inspections"
            icon={<FaMagnifyingGlass />}
          />
          <NavbarItem
            name="Calendar"
            route="calendar"
            icon={<IoCalendarOutline />}
          />
          <NavbarItem name="Vendors" route="vendors" icon={<GrUserWorker />} />
          <NavbarItem
            name="Reports"
            route="reports"
            icon={<HiOutlineDocumentReport />}
          />
          <NavbarItem
            name="Organisation"
            route="organisation"
            icon={<CgOrganisation />}
          />
        </div>
      </div>

      <div className="w-full">
        {user ? (
          <UserDropdown />
        ) : (
          <div className="w-full row items-center gap-2 justify-center">
            <LoginButton />
            <SignupButton />
          </div>
        )}
      </div>
    </nav>
  );
}
