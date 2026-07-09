export default function Jobs() {
  let job_count = 21;
  let supervisor = "Bronson Chaker";
  let address = "123 Proposed Road, Silverdale, NSW, 2749";
  return (
    <div className="p-20 h-screen w-full ">
      <title>Projects</title>
      {/* Top Header/Card Section */}
      <div className="w-full flex flex-row">
        {/* Main Header */}
        <div className="w-1/2">
          <h1 className="font-semibold text-primary text-4xl">
            Active Projects
          </h1>
          <p className="text-lg text-stone-600">
            {job_count} total active jobs
          </p>
        </div>

        {/* Cards */}
        <div className="w-1/2 flex flex-row ">
          <button className="bg-primary h-3/4 flex gap-2 justify-center items-center px-5 rounded-sm hover:cursor-pointer hover:opacity-80 hover:duration-250">
            <span class="text-lg font-semibold text-white">+</span>
            <span class="text-lg font-semibold text-white">New Project</span>
          </button>
          <button className="bg-primary h-3/4 flex gap-2 justify-center items-center px-5 rounded-sm hover:cursor-pointer hover:opacity-80 hover:duration-250">
            <span class="text-lg font-semibold text-white">+</span>
            <span class="text-lg font-semibold text-white">SELECT</span>
          </button>
        </div>
      </div>

      {/* Project Table Section */}
      <div className="w-full mt-15">
        <table className="w-full  border-gray-300 bg-stone-100 shadow-xs">
          <thead className="w-full  bg-primary text-white justify-between content-between">
            {/* Table Header Columns */}
            <tr className="w-full">
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
                Stage
              </th>
              <th
                scope="col"
                className="w-[20%] text-start p-5 text-lg font-medium"
              >
                Progression
              </th>
              <th
                scope="col"
                className="w-[20%] text-start p-5 text-lg font-medium"
              >
                Estimated Completion
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-2 border-gray-300 hover:cursor-pointer hover:opacity-90 hover:bg-stone-200 hover:duration-200">
              <td className="p-5 font-semibold text-lg text-stone-700 ">
                {address}
              </td>
              <td className=" items-center p-5 ">
                <div className="w-full h-full flex flex-row items-center gap-2">
                  <span className="p-2 bg-blue-300 rounded-full">BC </span>
                  <p>{supervisor}</p>
                </div>
              </td>
              <td className="p-5">Finalising</td>
              <td className="p-5 ">
                <p>70% Completed</p>
                <progress
                  class="progress progress-primary w-56"
                  value="70"
                  max="100"
                ></progress>
              </td>
              <td className="p-5">
                <div className="w-full h-full flex flex-row gap-2">
                  <span class="material-symbols-outlined">calendar_clock</span>
                  <p>Oct 26, 2026</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
