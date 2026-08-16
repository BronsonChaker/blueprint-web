import { Link} from "react-router";
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


export default function Navbar() {
  const { user, loading } = useAuth();

  if (loading) return null;
  return (
    <nav className="h-screen w-2/12 text-md py-5 ml-5 flex flex-col items-start justify-start border-r-2 border-stone-200">
      {/* Logo */}

      <div>
        <Link to="">
          <span className="font-bold text-2xl text-primary p-2">Blueprint</span>
        </Link>
      </div>
      {/* Links */}

      <div className="flex flex-col font-medium text-gray-800 text-lg gap-2 items-start mt-2 w-full">
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
        <NavbarItem name="Organisation" route="organisation" icon={<CgOrganisation />} />
      </div>

      {user ? (
        <UserDropdown/>
      ) : (
        <div className="absolute top-5 right-10 flex flex-row gap-2">
          <LoginButton />
          <SignupButton />
        </div>
      )}


    </nav>
  );
}
