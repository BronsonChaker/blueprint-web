import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineMoreVert } from "react-icons/md";

export default function Projects() {
  let job_count = 21;
  let supervisor = "Bronson Chaker";
  let address = "123 Proposed Road, Silverdale, NSW, 2749";
  return (
    <div className="px-20 mt-10 h-screen w-full">
      <title>Projects</title>
      {/* Top Header/Card Section */}
      <div className="w-full flex flex-row">
        {/* Main Header */}
        <div className="w-1/2">
          <h1 className="font-semibold text-primary text-4xl">
            Active Projects
          </h1>
          <p className="text-lg text-subtext">
            You are assigned {job_count} projects. Select a project to see
            schedule and information,
          </p>
        </div>
      </div>

      {/* Project Table Section */}
      <div className="w-full mt-5">
        <table className="w-full bg-primary shadow-xs rounded-md">
          <thead className="w-full text-white justify-between">
            {/* Table Header Columns */}
            <tr className="w-full">
              <th
                scope="col"
                className="w-[5%] text-start p-5 text-lg font-medium"
              >
                ID
              </th>

              <th
                scope="col"
                className="w-[30%] text-start p-5 text-lg font-medium"
              >
                Project
              </th>

              <th
                scope="col"
                className="w-[15%] text-start p-5 text-lg font-medium"
              >
                Supervisor
              </th>
              <th
                scope="col"
                className="w-[15%] text-start p-5 text-lg font-medium"
              >
                Status
              </th>
              <th
                scope="col"
                className="w-[15%] text-start p-5 text-lg font-medium"
              >
                Stage
              </th>

              <th
                scope="col"
                className="w-[20%] text-start p-5 text-lg font-medium"
              >
                Estimated Completion
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className=" hover:cursor-pointer hover:opacity-90 bg-stone-100 hover:duration-200">
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
              <td className="p-5">Active</td>
              <td className="p-5">Finalising</td>
              <td className="p-5">
                <div className="w-full h-full flex flex-row gap-2 items-center text-lg">
                  <IoCalendarOutline />
                  <p>Oct 26, 2026</p>
                </div>
              </td>
              <td className="">
                <MdOutlineMoreVert />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
