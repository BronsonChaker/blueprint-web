import { IoCalendarOutline } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";

export default function Projects() {
  let job_count = 21;
  let supervisor = "Bronson Chaker";
  let address = "123 Proposed Road, Silverdale, NSW, 2749";

  async function getProjects() {
    const url = "http://127.0.0.1:8000/jobs/";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  }

  getProjects();
  return (
    <div className="px-20 mt-10 h-screen w-full">
      <title>Projects</title>
      {/* Top Header/Card Section */}
      <div className="w-full flex flex-row">
        {/* Main Header */}
        <div className="w-1/2">
          <h1 className="font-bold text-primary text-4xl">Projects</h1>
          <p className="text-lg text-subtext mt-2">
            You are assigned {job_count} projects. Select a project to view
            schedule and additonal information.
          </p>
        </div>
      </div>

      {/* Search Filter & Buttons */}
      <div className="mt-2 flex flex-row gap-2">
        <input
          type="search"
          name="project_search"
          placeholder="Search by ID or Address"
          className="w-100 border-2 border-neutral rounded-xl px-2.5 py-2.5 outline-none"
        />

        {/* Supervisor Filter */}
        <div className="justify-center border-2 text-lg border-neutral rounded-xl px-2.5 py-2.5 outline-none">
          <select
            name="selectedSupervsor"
            id="supervisorSelect"
            className="outline-none"
          >
            <option value="">Supervisor</option>
            <option value="">Bronson Chaker</option>
            <option value="">John Smith</option>
            <option value="">Mario Tan</option>
          </select>
        </div>

        {/* Status Filter */}
        <div className="justify-center border-2 text-lg border-neutral rounded-xl px-2.5 py-2.5 outline-none">
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
        <div className="justify-center border-2 text-lg border-neutral rounded-xl px-2.5 py-2.5 outline-none">
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

        <button className="flex flex-row items-center gap-1 text-lg bg-primary text-white px-2 rounded-xl hover:opacity-90 hover:duration-300 hover:cursor-pointer">
          {" "}
          <IoMdAddCircle />
          <p>New Project</p>
        </button>
      </div>

      {/* Project Table Section */}
      <div className="w-full mt-4">
        <table className="w-full text rounded-full" id="projectListTable">
          <thead className="w-full text-black justify-between">
            {/* Table Header Columns */}
            <tr className="w-full bg-neutral">
              <th
                scope="col"
                className="w-[5%] text-start px-5 py-4 text-lg font-normal rounded-l-md"
              >
                ID
              </th>

              <th
                scope="col"
                className="w-[30%] text-start px-5 py-4 text-lg font-normal"
              >
                Project
              </th>

              <th
                scope="col"
                className="w-[15%] text-start px-5 py-4 text-lg font-normal"
              >
                Supervisor
              </th>
              <th
                scope="col"
                className="w-[15%] text-start px-5 py-4 text-lg font-normal"
              >
                Status
              </th>
              <th
                scope="col"
                className="w-[15%] text-start px-5 py-4 text-lg font-normal"
              >
                Stage
              </th>

              <th
                scope="col"
                className="w-[40%] text-start px-5 py-4 text-lg font-normal rounded-r-md"
              >
                Estimated Completion
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-neutral hover:cursor-pointer hover:bg-neutral hover:duration-200">
              <td className="p-5 font-semibold text-md text-stone-700 ">
                1257FA
              </td>
              <td className="p-5 font-semibold text-md text-stone-700 ">
                {address}
              </td>
              <td className=" items-center p-5 ">
                <div className="w-full h-full flex flex-row items-center gap-2">
                  <span className="p-2 bg-blue-300 rounded-full">BC </span>
                  <p>{supervisor}</p>
                </div>
              </td>
              <td className="p-5">
                <span className="bg-green-300 text-sm text-green-800 font-medium py-1.5 px-1.5 rounded-md">
                  ACTIVE
                </span>
              </td>
              <td className="p-5">Finalising</td>
              <td className="p-5">
                <div className="w-full h-full flex flex-row gap-2 items-center text-lg">
                  <IoCalendarOutline />
                  <p>Oct 26, 2026</p>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b border-neutral hover:cursor-pointer hover:bg-neutral hover:duration-200">
              <td className="p-5 font-semibold text-md text-stone-700 ">
                0123BF
              </td>
              <td className="p-5 font-semibold text-md text-stone-700 ">
                2396 Boundary Road, Box Hill, NSW, 2749
              </td>
              <td className=" items-center p-5 ">
                <div className="w-full h-full flex flex-row items-center gap-2">
                  <span className="p-2 bg-blue-300 rounded-full">BC </span>
                  <p>{supervisor}</p>
                </div>
              </td>
              <td className="p-5">
                <span className="bg-amber-300 text-sm text-amber-700 font-medium py-1.5 px-1.5 rounded-md">
                  ON-HOLD
                </span>
              </td>
              <td className="p-5">Slab</td>
              <td className="p-5">
                <div className="w-full h-full flex flex-row gap-2 items-center text-lg">
                  <IoCalendarOutline />
                  <p>Dec 15, 2027</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
