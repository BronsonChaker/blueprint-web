import { IoMdAddCircle } from "react-icons/io";
import ProjectTable from "../components/projects/ProjectTable";
import { Link } from "react-router";
import SupervisorSelect from "../components/SupervisorSelect";

("../api/endpoints/projects.js");

export default function Projects() {
  return (
    <div className="px-20 mt-10 h-screen w-full">
      <title>Projects</title>
      {/* Top Header/Card Section */}
      <div className="w-full flex flex-row">
        {/* Main Header */}
        <div className="w-1/2">
          <h1 className="font-bold text-primary text-4xl">Projects</h1>
          <p className="text-lg text-subtext mt-2">
            You are assigned projects. Select a project to view schedule and
            additonal information.
          </p>
        </div>
      </div>

      {/* Search Filter & Buttons */}
      <div className="mt-2 flex flex-row gap-2">
        <input
          type="search"
          name="project_search"
          placeholder="Search by ID or Address"
          className="w-100 border-2 border-border rounded-xl px-2.5 py-2.5 outline-none"
        />

        {/* Supervisor Filter */}
        <div className="justify-center border-2 text-lg border-border rounded-xl px-2.5 py-2.5 outline-none">
          <SupervisorSelect />
        </div>

        {/* Status Filter */}
        <div className="justify-center border-2 text-lg border-border rounded-xl px-2.5 py-2.5 outline-none">
          <select
            name="selectedSupervsor"
            id="supervisorSelect"
            className="outline-none"
          >
            <option value="">Status</option>
            <option value="">Pending</option>
            <option value="">Active</option>
            <option value="">On-Hold</option>
            <option value="">Cancelled</option>
          </select>
        </div>

        {/* Stage Filter */}
        <div className="justify-center border-2 text-lg border-border rounded-xl px-2.5 py-2.5 outline-none">
          <select
            name="selectedSupervsor"
            id="supervisorSelect"
            className="outline-none"
          >
            <option value="">Stage</option>
            <option value="">Excavation</option>
            <option value="">Slab</option>
            <option value="">Frame</option>
            <option value="">Plaster</option>
            <option value="">Lockup</option>
            <option value="">Fix</option>
            <option value="">Completion</option>
            <option value="">Finalising</option>
          </select>
        </div>

        <Link
          to="/new-project"
          className="flex flex-row items-center gap-1 text-lg bg-primary text-white px-2 rounded-xl hover:opacity-90 hover:duration-300 hover:cursor-pointer"
        >
          {" "}
          <IoMdAddCircle />
          <p>New Project</p>
        </Link>
      </div>

      {/* Project Table Section */}
      <div className="w-full mt-4">
        <ProjectTable />
      </div>
    </div>
  );
}
