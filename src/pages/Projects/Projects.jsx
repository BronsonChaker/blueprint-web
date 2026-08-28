import { IoMdAddCircle } from "react-icons/io";
import ProjectTable from "../../components/Projects/ProjectTable";
import { Link } from "react-router";
import SupervisorSelect from "../../components/SupervisorSelect";
import { useState, useCallback } from "react";
import SearchBar from "../../components/UI/SearchBar";

export default function Projects() {
  const [jobCount, setJobCount] = useState("");
  const [query, setQuery] = useState("");

  const getJobCount = useCallback((data) => {
    setJobCount(data);
  }, []);

  return (
    <div className="px-10 mt-10">
      <title>Project</title>
      {/* Top Header/Card Section */}
      <div className="w-full flex flex-row">
        {/* Main Header */}
        <div className="w-1/2">
          <h1 className="text-heading">Projects</h1>
          <p className="text-page-desc">
            You are assigned {jobCount.job_count} projects. Select a project to
            view schedule and additonal information.
          </p>
        </div>
      </div>

      {/* Search Filter & Buttons */}
      <div className="mt-2 flex flex-row gap-2">
        <SearchBar
          placeholder="Search by ID or Address"
          query={query}
          setQuery={setQuery}
        />

        {/* Supervisor Filter */}
        <div className="justify-center text-xs rounded-xl  outline-none">
          <SupervisorSelect query={query} setQuery={setQuery} />
        </div>

        {/* Status Filter */}
        <div className="flex pl-2 justify-center border-2 text-xs border-border rounded-xl outline-none">
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
        <div className="flex pl-2 justify-center border-2 text-xs border-border rounded-xl outline-none">
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
          className="flex flex-row items-center gap-1 text-xs bg-primary text-white px-2 rounded-xl hover:opacity-90 hover:duration-300 hover:cursor-pointer"
        >
          {" "}
          <IoMdAddCircle />
          <p>New Project</p>
        </Link>
      </div>

      {/* Project Table Section */}
      <div className="w-full mt-4">
        <ProjectTable jobCountData={getJobCount} query={query} />
      </div>
    </div>
  );
}
