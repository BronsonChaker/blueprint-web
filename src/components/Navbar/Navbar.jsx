import { Link, NavLink } from "react-router";
import { GoChecklist } from "react-icons/go";
import { GrUser, GrUserWorker } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { LuHouse } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useAuth } from "../../context/AuthContext";
import LoginButton from "../Buttons/LoginButton";
import SignupButton from "../Buttons/SingupButton";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  const { user, loading, logout } = useAuth();

  if (loading) return null;
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
        <NavbarItem name="Dashboard" route="dashboard" icon={<MdDashboard />} />
        <NavbarItem name="Projects" route="projects" icon={<LuHouse />} />
        <NavbarItem
          name="Inspections"
          route="inspections"
          icon={<FaMagnifyingGlass />}
        />
        <NavbarItem name="Checklist" route="checklist" icon={<GoChecklist />} />
        <NavbarItem name="Vendors" route="vendors" icon={<GrUserWorker />} />
        <NavbarItem
          name="Reports"
          route="reports"
          icon={<HiOutlineDocumentReport />}
        />
      </div>

      {/* Profile */}
      <div className="flex justify-between gap-2">
        {user ? (
          <div className="flex flex-row gap-2 px-1 py-1 rounded-md">
            <div className="flex items-center gap-2">
              <img
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
                alt="avatar"
                className="inline-block object-cover object-center w-11 h-11 rounded-md"
              />
              <div>
                <p className="font-sans antialiased text-base text-current">
                  {user.username}
                </p>
              </div>
            </div>
            <button onClick={logout}>logout</button>
          </div>
        ) : (
          <div className="flex flex-row gap-2">
            <LoginButton />
            <SignupButton />
          </div>
        )}
      </div>
    </nav>
  );
}
