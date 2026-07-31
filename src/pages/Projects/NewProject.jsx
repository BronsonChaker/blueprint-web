import { Link } from "react-router";

export default function NewProject() {
  return (
    <main className="px-20 mt-5 h-screen w-full flex flex-col">
      <title>New Project</title>

      <div className="text-sm text-subtext flex flex-row gap-2">
        <Link to="/projects" className="hover:underline hover:text-blue-500 ">
          Projects
        </Link>
        <span>{">"}</span>
        <span>New Project</span>
      </div>
      <div className="w-full grid grid-cols-4 mt-2 gap-5">
        {/* Main Header */}
        <div className="w-full col-span-4">
          <h1 className="font-bold text-primary text-3xl">
            Create New Project
          </h1>
          <p className="text-md text-subtext mt-2">
            Enter the required project details. Ensure you verify all your
            project details prior to submitting.
          </p>
        </div>

        <form action="" className=" flex flex-col col-span-3 gap-5">
          {/* Project Information */}
          <div className="bg-stone-50 shadow-xs border border-stone-200 p-5">
            <h1 className="text-primary font-semibold text-xl">
              Project Information
            </h1>
            <div className="w-full grid grid-cols-2 gap-2">
              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-sm">
                  Project Number
                </label>
                <input
                  type="text"
                  placeholder="000000"
                  className="text-sm px-2 py-2 border border-stone-300 rounded-md"
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-sm">
                  Project Name
                </label>
                <input
                  type="text"
                  placeholder="Lot 123 Street Name, Suburb"
                  className="text-sm px-2 py-2 border border-stone-300 rounded-md"
                />
              </div>

              <div className="col-span-2 flex flex-col gap-1.5">
                <label htmlFor="" className="text-sm">
                  Project Address
                </label>
                <input
                  type="text"
                  placeholder="Lot 123 Street Name, Suburb"
                  className="text-sm px-2 py-2 border border-stone-300 rounded-md leading-2"
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-sm">
                  Supervisor
                </label>
                <select
                  name="selectedSupervsor"
                  id="supervisorSelect"
                  className="text-sm px-1 py-2 border border-stone-300 rounded-md"
                >
                  <option value="">Supervisor</option>
                  <option value="">Bronson Chaker</option>
                  <option value="">John Smith</option>
                  <option value="">Mario Tan</option>
                </select>
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-sm">
                  Project Template
                </label>
                <select
                  name="selectedSupervsor"
                  id="supervisorSelect"
                  className="text-sm px-1 py-2 border border-stone-300 rounded-md"
                >
                  <option value="">Template</option>
                  <option value="">240 Day Template</option>
                  <option value="">300 Day Template</option>
                  <option value="">Default Template</option>
                  <option value="">No Template</option>
                </select>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="bg-stone-50 shadow-xs border border-stone-200 p-5">
            <h1 className="text-primary font-semibold text-xl">
              Customer Information
            </h1>
            <div className="w-full grid grid-cols-2 gap-2">
              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-sm">
                  First Name
                </label>
                <input
                  type="First Name"
                  placeholder="First Name"
                  className="text-sm px-2 py-2 border border-stone-300 rounded-md"
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="text-sm px-2 py-2 border border-stone-300 rounded-md"
                />
              </div>
              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="email@email.com"
                  className="text-sm px-2 py-2 border border-stone-300 rounded-md"
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-sm">
                  Phone Number
                </label>
                <input
                  type="number"
                  placeholder="0400000000"
                  className="text-sm px-2 py-2 border border-stone-300 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-sm">
                  Billing Address
                </label>
                <input
                  type="text"
                  placeholder="Lot 123 Street Name, Suburb"
                  className="text-sm px-2 py-2 border border-stone-300 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Contract Details */}
          <div className="bg-stone-50 shadow-xs border border-stone-200 p-5">
            <h1 className="text-primary font-semibold text-xl">
              Contract Details
            </h1>
            <div className="w-full grid grid-cols-3 gap-2">
              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-sm">
                  Contract Start Date
                </label>
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="text-sm px-2 py-2 border border-stone-300 rounded-md"
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-sm">
                  Contract End Date
                </label>
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="text-sm px-2 py-2 border border-stone-300 rounded-md"
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-sm">
                  Contract Price ($)
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="text-sm px-2 py-2 border border-stone-300 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
            </div>
          </div>

          {/* Site Logistics */}
          <div className="bg-stone-50 shadow-xs border border-stone-200 p-5">
            <h1 className="text-primary font-semibold text-xl">
              Site Logistics
            </h1>
            <div className="w-full grid grid-cols-2 gap-2">
              <div className="flex flex-col col-span-2 gap-1.5">
                <label htmlFor="" className="text-sm">
                  Project Access Note
                </label>
                <textarea
                  type="text"
                  placeholder="Gate Code, WHS Instructions, Permitted Hours...."
                  className="text-sm px-2 py-2 border border-stone-300 rounded-md"
                  rows="4"
                />
              </div>

              <div className="flex flex-col col-span-2 gap-1.5">
                <label htmlFor="" className="text-sm">
                  Job Requirements
                </label>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="Temporary Fencing"
                    className="text-sm px-2 py-2 border border-stone-300 rounded-md"
                  />
                  <label htmlFor="">Temporary Fencing</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="Temporary Fencing"
                    className="text-sm px-2 py-2 border border-stone-300 rounded-md"
                  />
                  <label htmlFor="">Temporary Toilet</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="Sediment Control"
                    className="text-sm px-2 py-2 border border-stone-300 rounded-md"
                  />
                  <label htmlFor="">Sediment Control</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="Sediment Control"
                    className="text-sm px-2 py-2 border border-stone-300 rounded-md"
                  />
                  <label htmlFor="">Waste Management</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="Traffic Control"
                    className="text-sm px-2 py-2 border border-stone-300 rounded-md"
                  />
                  <label htmlFor="">Traffic Control</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="Additional Crane Hire"
                    className="text-sm px-2 py-2 border border-stone-300 rounded-md"
                  />
                  <label htmlFor="">Additional Crane Hire</label>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row gap-5 items-center justify-center ">
            <Link
              to="/projects"
              className="px-4 py-2 border border-stone-300 hover:opacity-85 hover:cursor-pointer hover:transition-200 rounded-lg"
            >
              Discard
            </Link>
            <button className="px-4 py-2 border border-stone-300 bg-primary text-white hover:opacity-85 hover:cursor-pointer hover:transition-200 rounded-lg">
              Create Project
            </button>
          </div>
        </form>
        <div className="col-span-1">
          <p>map</p>
        </div>
      </div>
    </main>
  );
}
