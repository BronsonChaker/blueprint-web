import { NavLink } from "react-router";
import { useParams } from "react-router";

export default function ProjectNavbar() {
  let params = useParams();
  let projectId = params.id;
  return (
    <nav className="flex flex-row gap-10">
      <NavLink
        to={`/jobs/${projectId}/details`}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <span>Details</span>
      </NavLink>
      <NavLink
        to={`/jobs/${projectId}/tasks`}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <span>Tasks</span>
      </NavLink>
      <NavLink
        to={`/jobs/${projectId}/documents`}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <span>Documents</span>
      </NavLink>
      <NavLink
        to={`/jobs/${projectId}/inspections`}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <span>Inspections</span>
      </NavLink>
      <NavLink
        to={`/jobs/${projectId}/insights`}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <span>Insights</span>
      </NavLink>
    </nav>
  );
}
