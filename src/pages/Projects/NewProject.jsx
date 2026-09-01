import { Link } from "react-router";
import { useState } from "react";
import SupervisorSelect from "../../components/SupervisorSelect.jsx";

export default function NewProject() {
  const projectValues = {
    organisation: "",
    supervisor: "",
    job_number: "",
    template: "",
    name: "",
    address: "",
    status: "",
    stage: "",
    client_first_name: "",
    client_last_name: "",
    client_email: "",
    client_phone: "",
    client_billing: "",
    contract_start_date: "",
    contract_end_date: "",
    contract_price: "",
    construction_start_date: "",
    construction_end_date: "",
  };
  const [values, setValues] = useState(projectValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  console.log(values);

  return (
    <main className="px-10 mt-5 h-screen w-full flex flex-col overflow-scroll">
      <title>New Project</title>

      <div className="text-xs text-subtext flex flex-row gap-2">
        <Link to="/projects" className="hover:underline hover:text-blue-500 ">
          Projects
        </Link>
        <span>{">"}</span>
        <span>New Project</span>
      </div>
      <div className="w-full grid grid-cols-4 mt-2 gap-5">
        {/* Main Header */}
        <div className="w-full col-span-4">
          <h1 className="font-bold text-primary text-2xl">
            Create New Project
          </h1>
          <p className="text-xs text-subtext mt-2">
            Enter the required project details. Ensure you verify all your
            project details prior to submitting.
          </p>
        </div>

        <form action="" className=" flex flex-col col-span-4 gap-5 text-xs">
          {/* Project Information */}
          <div className="bg-stone-50 shadow-xs border border-stone-200 p-6">
            <h1 className="text-primary font-semibold text-lg mb-2">
              Project Information
            </h1>
            <div className="w-full grid grid-cols-2 gap-2">
              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-xs">
                  Project Number
                </label>
                <input
                  type="text"
                  placeholder="000000"
                  className="text-xs px-2 py-2 border border-stone-300 rounded-md"
                  onChange={handleInputChange}
                  value={values.job_number}
                  name="job_number"
                  label="job_number"
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-xs">
                  Project Name
                </label>
                <input
                  type="text"
                  placeholder="Lot 123 Street Name, Suburb"
                  className="text-xs px-2 py-2 border border-stone-300 rounded-md"
                  onChange={handleInputChange}
                  value={values.name}
                  name="name"
                  label="name"
                />
              </div>

              <div className="col-span-2 flex flex-col gap-1.5">
                <label htmlFor="" className="text-xs">
                  Project Address
                </label>
                <input
                  type="text"
                  placeholder="Lot 123 Street Name, Suburb"
                  className="text-xs px-2 py-2 border border-stone-300 rounded-md leading-2"
                  onChange={handleInputChange}
                  value={values.address}
                  name="address"
                  label="address"
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-xs">
                  Supervisor
                </label>
                <SupervisorSelect
                  onChange={handleInputChange}
                  value={values.supervisor}
                  name="supervisor"
                  label="supervisor"
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-xs">
                  Project Template
                </label>
                <select
                  className="text-xs px-1 py-2 border border-stone-300 rounded-md"
                  onChange={handleInputChange}
                  value={values.template}
                  name="template"
                  label="template"
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
                <label htmlFor="" className="text-xs">
                  First Name
                </label>
                <input
                  type="First Name"
                  placeholder="First Name"
                  className="text-xs px-2 py-2 border border-stone-300 rounded-md"
                  onChange={handleInputChange}
                  value={values.client_first_name}
                  name="client_first_name"
                  label="client_first_name"
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-xs">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="text-xs px-2 py-2 border border-stone-300 rounded-md"
                  onChange={handleInputChange}
                  value={values.client_last_name}
                  name="client_last_name"
                  label="client_last_name"
                />
              </div>
              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-xs">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="email@email.com"
                  className="text-xs px-2 py-2 border border-stone-300 rounded-md"
                  onChange={handleInputChange}
                  value={values.client_email}
                  name="client_email"
                  label="client_email"
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-xs">
                  Phone Number
                </label>
                <input
                  type="number"
                  placeholder="0400000000"
                  max="9999999999"
                  className="text-xs px-2 py-2 border border-stone-300 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  onChange={handleInputChange}
                  value={values.client_phone}
                  name="client_phone"
                  label="client_phone"
                />
              </div>
              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-xs">
                  Billing Address
                </label>
                <input
                  type="text"
                  placeholder="Lot 123 Street Name, Suburb"
                  className="text-xs px-2 py-2 border border-stone-300 rounded-md"
                  onChange={handleInputChange}
                  value={values.client_billing}
                  name="client_billing"
                  label="client_billing"
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
                <label htmlFor="" className="text-xs">
                  Contract Start Date
                </label>
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="text-xs px-2 py-2 border border-stone-300 rounded-md"
                  onChange={handleInputChange}
                  value={values.contract_start_date}
                  name="contract_start_date"
                  label="contract_start_date"
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-xs">
                  Contract End Date
                </label>
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="text-xs px-2 py-2 border border-stone-300 rounded-md"
                  onChange={handleInputChange}
                  value={values.contract_end_date}
                  name="contract_end_date"
                  label="contract_end_date"
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-xs">
                  Contract Price ($)
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="text-xs px-2 py-2 border border-stone-300 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  onChange={handleInputChange}
                  value={values.contract_price}
                  name="contract_price"
                  label="contract_price"
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
                <label htmlFor="" className="text-xs">
                  Project Access Note
                </label>
                <textarea
                  type="text"
                  placeholder="Gate Code, WHS Instructions, Permitted Hours...."
                  className="text-xs px-2 py-2 border border-stone-300 rounded-md"
                  rows="4"
                />
              </div>

              <div className="flex flex-col col-span-2 gap-1.5">
                <label htmlFor="" className="text-xs">
                  Job Requirements
                </label>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="Temporary Fencing"
                    className="text-xs px-2 py-2 border border-stone-300 rounded-md"
                  />
                  <label htmlFor="">Temporary Fencing</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="Temporary Fencing"
                    className="text-xs px-2 py-2 border border-stone-300 rounded-md"
                  />
                  <label htmlFor="">Temporary Toilet</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="Sediment Control"
                    className="text-xs px-2 py-2 border border-stone-300 rounded-md"
                  />
                  <label htmlFor="">Sediment Control</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="Sediment Control"
                    className="text-xs px-2 py-2 border border-stone-300 rounded-md"
                  />
                  <label htmlFor="">Waste Management</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="Traffic Control"
                    className="text-xs px-2 py-2 border border-stone-300 rounded-md"
                  />
                  <label htmlFor="">Traffic Control</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="Additional Crane Hire"
                    className="text-xs px-2 py-2 border border-stone-300 rounded-md"
                  />
                  <label htmlFor="">Additional Crane Hire</label>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row gap-5 items-center justify-center pb-10">
            <Link
              to="/projects"
              className="px-4 py-2 border border-stone-300 hover:opacity-85 hover:cursor-pointer hover:transition-200 rounded-lg"
            >
              Discard
            </Link>
            <button
              type="submit"
              className="px-4 py-2 border border-stone-300 bg-primary text-white hover:opacity-85 hover:cursor-pointer hover:transition-200 rounded-lg"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
