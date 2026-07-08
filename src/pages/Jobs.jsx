export default function Jobs() {
  let job_count = 21;
  return (
    <div className="p-10 h-screen w-full bg-neutral">
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
        </div>
      </div>

      {/* Project Table Section */}
      <div className="w-full mt-15">
        <table className="w-full">
          <thead className="w-full justify-between content-between rounded-lg shadow-sm bg-neutral">
            {/* Filters, Drop Downs, and Menus */}
            <tr>
              <td>
                <form class="filter">
                  <input
                    class="btn"
                    type="checkbox"
                    name="frameworks"
                    aria-label="Svelte"
                  />
                  <input
                    class="btn"
                    type="checkbox"
                    name="frameworks"
                    aria-label="Vue"
                  />
                  <input
                    class="btn"
                    type="checkbox"
                    name="frameworks"
                    aria-label="React"
                  />
                  <input class="btn btn-square" type="reset" value="×" />
                </form>
              </td>
            </tr>

            {/* Table Header Columns */}
            <tr className="w-full">
              <th
                scope="col"
                className="w-[30%] text-start p-5 text-lg font-semibold"
              >
                PROJECT
              </th>

              <th
                scope="col"
                className="w-[15%] text-start p-5 text-lg font-semibold"
              >
                SUPERVISOR
              </th>
              <th
                scope="col"
                className="w-[15%] text-start p-5 text-lg font-semibold"
              >
                STAGE
              </th>
              <th
                scope="col"
                className="w-[20%] text-start p-5 text-lg font-semibold"
              >
                PROGRESSION
              </th>
              <th
                scope="col"
                className="w-[20%] text-start p-5 text-lg font-semibold"
              >
                ESTIMATED COMPLETION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xl hover:cursor-pointer hover:opacity-75 hover:bg-stone-200 hover:duration-200 rounded-md">
              <td className="p-5 ">123 Proposed Road, Silverdale</td>
              <td className="flex flex-row items-center p-5 gap-2">
                <img className="w-5 h-5 rounded-full"></img>
                <p>Bronson Chaker</p>
              </td>
              <td className="p-5">Completion</td>
              <td className="p-5">45% Completed</td>
              <td className="p-5 flex flex-row items-center gap-2">
                <span class="material-symbols-outlined">calendar_clock</span>Oct
                26, 2026
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
