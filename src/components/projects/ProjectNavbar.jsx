import { NavLink } from "react-router";

export default function ProjectNavbar() {
  return (
    <nav className="flex flex-row gap-10">
      <NavLink>
        <span>Details</span>
      </NavLink>
      <NavLink>
        <span>Tasks</span>
      </NavLink>
      <NavLink>
        <span>Documents</span>
      </NavLink>
      <NavLink>
        <span>Inspections</span>
      </NavLink>
      <NavLink>
        <span>Insights</span>
      </NavLink>
    </nav>
  );
}
