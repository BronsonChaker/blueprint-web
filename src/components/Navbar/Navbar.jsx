import { Link } from "react-router";
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
  const [expandSidebar, setExpandSidebar] = useState(true);

  if (loading) return null;

  const handleSidebar = () => {
    setExpandSidebar((prev) => !prev);
  };

  return (
    <nav
      className={`navbar transition-all duration-200 ease-in-out ${expandSidebar ? "navbar-expanded" : "navbar-collapsed"}`}
    >
      {/* Logo */}
      <div className="w-full">
        <div
          className={`row ${expandSidebar ? "justify-between" : "justify-center"} items-center w-full`}
        >
          {expandSidebar && (
            <div>
              <Link to="/">
                <span className="font-bold text-2xl text-primary p-2">
                  Blueprint
                </span>
              </Link>
            </div>
          )}
          <button className="" onClick={handleSidebar}>
            <GoSidebarExpand className="text-3xl rounded p-1 hc" />
          </button>
        </div>
        {/* Links */}

        <div className="flex flex-col font-medium text-gray-800 text-lg gap-2 items-center mt-2 w-full">
          <NavbarItem
            name="Dashboard"
            route="dashboard"
            icon={
              <MdDashboard
                className={`${expandSidebar ? "text-sm" : "text-xl"}`}
              />
            }
            expandState={expandSidebar}
          />
          <NavbarItem
            name="Projects"
            route="projects"
            icon={
              <LuHouse className={`${expandSidebar ? "text-sm" : "text-xl"}`} />
            }
            expandState={expandSidebar}
          />
          <NavbarItem
            name="Tasks"
            route="tasks"
            icon={
              <MdTaskAlt
                className={`${expandSidebar ? "text-sm" : "text-xl"}`}
              />
            }
            expandState={expandSidebar}
          />
          <NavbarItem
            name="Planner"
            route="planner"
            icon={
              <AiOutlineNodeExpand
                className={`${expandSidebar ? "text-sm" : "text-xl"}`}
              />
            }
            expandState={expandSidebar}
          />
          <NavbarItem
            name="Inspections"
            route="inspections"
            icon={
              <FaMagnifyingGlass
                className={`${expandSidebar ? "text-sm" : "text-xl"}`}
              />
            }
            expandState={expandSidebar}
          />
          <NavbarItem
            name="Calendar"
            route="calendar"
            icon={
              <IoCalendarOutline
                className={`${expandSidebar ? "text-sm" : "text-xl"}`}
              />
            }
            expandState={expandSidebar}
          />
          <NavbarItem
            name="Vendors"
            route="vendors"
            icon={
              <GrUserWorker
                className={`${expandSidebar ? "text-sm" : "text-xl"}`}
              />
            }
            expandState={expandSidebar}
          />
          <NavbarItem
            name="Reports"
            route="reports"
            icon={
              <HiOutlineDocumentReport
                className={`${expandSidebar ? "text-sm" : "text-xl"}`}
              />
            }
            expandState={expandSidebar}
          />
          <NavbarItem
            name="Organisation"
            route="organisation"
            icon={
              <CgOrganisation
                className={`${expandSidebar ? "text-sm" : "text-xl"}`}
              />
            }
            expandState={expandSidebar}
          />
        </div>
      </div>

      <div className="w-full">
        {user ? (
          <UserDropdown expandState={expandSidebar} />
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
