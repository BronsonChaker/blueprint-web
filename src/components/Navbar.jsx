import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="h-16 w-full py-5 px-20 flex flex-row items-center border-b border-stone-300 shadow-sm">
      {/* Logo */}
      <div className="w-1/4 justify-center">
        <Link to="">
          <span className="font-bold text-2xl text-primary">Blueprint</span>
        </Link>
      </div>

      {/* Links */}

      <div className="w-2/4 flex justify-between">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/inspections">Inspections</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/vendors">Vendors</Link>
      </div>

      {/* Profile */}

      <div className="w-1/4 flex justify-between"></div>
    </nav>
  );
}
