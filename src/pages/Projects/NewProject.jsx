import { Link } from "react-router";
import { useState } from "react";
import SupervisorSelect from "../../components/SupervisorSelect.jsx";
import { ProjectAPI } from "../../api/ProjectAPI.js";
import { useNavigate } from "react-router";
import LabelInputField from "../../components/UI/Input/LabelInputField.jsx";

export default function NewProject() {
  const navigate = useNavigate();

  const projectValues = {
    organisation: "70f5d34e-7abc-426d-b8c5-611355471743",
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
    access_notes: "",
  };
  const [values, setValues] = useState(projectValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = Object.fromEntries(
      Object.entries(values).map(([key, val]) => [
        key,
        val === "" ? null : val,
      ]),
    );

    try {
      ProjectAPI.createProject(payload);
      navigate("/projects");
    } catch (err) {
      console.error("Validation error :", err.response?.data);
    }
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

        <form
          onSubmit={handleSubmit}
          className=" flex flex-col col-span-4 gap-5 text-xs"
        >
          {/* Project Information */}
          <div className="card-outline p-5">
            <h1 className="text-primary font-semibold text-lg mb-2">
              Project Information
            </h1>
            <div className="w-full grid grid-cols-2 gap-2">
              <div className="flex flex-col col-span-1 gap-1.5">
                <LabelInputField
                  label="Project Number"
                  name="job_number"
                  onChange={handleInputChange}
                  placeholder="000000"
                  isRequired={true}
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <LabelInputField
                  label="Project Name"
                  name="name"
                  onChange={handleInputChange}
                  placeholder="Lot 132 Ronald"
                  isRequired={true}
                />
              </div>

              <div className="col-span-2 flex flex-col gap-1.5">
                <LabelInputField
                  label="Project Address"
                  name="address"
                  onChange={handleInputChange}
                  placeholder="Lot 132 (14) Ronald Street, NSW, 2713"
                  isRequired={true}
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
                  isRequired={true}
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-xs">
                  Project Template
                </label>
                <select
                  className="form-label-input"
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

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-xs">
                  Project Status
                </label>
                <select
                  className="form-label-input"
                  onChange={handleInputChange}
                  value={values.status}
                  name="status"
                  label="status"
                >
                  <option value="">Status</option>
                  <option value="pending">Pending</option>
                  <option value="active">Active</option>
                  <option value="on_hold">On-Hold</option>
                  <option value="finalising">Finalising</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <label htmlFor="" className="text-xs">
                  Stage
                </label>
                <select
                  className="form-label-input"
                  onChange={handleInputChange}
                  value={values.stage}
                  name="stage"
                  label="stage"
                >
                  <option value="">Stage</option>
                  <option value="sales">Sales</option>
                  <option value="pre-construction">Pre-Construction</option>
                  <option value="construction">Construction</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="card-outline p-5">
            <h1 className="text-primary font-semibold text-xl">
              Customer Information
            </h1>
            <div className="w-full grid grid-cols-2 gap-2">
              <div className="flex flex-col col-span-1 gap-1.5">
                <LabelInputField
                  label="First Name"
                  name="client_first_name"
                  onChange={handleInputChange}
                  placeholder="John"
                  type="text"
                  isRequired={true}
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <LabelInputField
                  label="Last Name"
                  name="client_last_name"
                  onChange={handleInputChange}
                  placeholder="Smith"
                  type="text"
                  isRequired={true}
                />
              </div>
              <div className="flex flex-col col-span-1 gap-1.5">
                <LabelInputField
                  label="Email Address"
                  name="client_email"
                  onChange={handleInputChange}
                  placeholder="johnsmith@email.com"
                  type="email"
                  isRequired={true}
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <LabelInputField
                  label="Phone Number"
                  name="client_phone"
                  onChange={handleInputChange}
                  placeholder="0412345678"
                  type="text"
                />
              </div>
              <div className="flex flex-col col-span-1 gap-1.5">
                <LabelInputField
                  label="Billing Address"
                  name="client_billing"
                  onChange={handleInputChange}
                  placeholder="Lot 123 Street Name, Suburb"
                  type="text"
                  isRequired={true}
                />
              </div>
            </div>
          </div>

          {/* Contract Details */}
          <div className="card-outline p-5">
            <h1 className="text-primary font-semibold text-xl">
              Contract Details
            </h1>
            <div className="w-full grid grid-cols-3 gap-2">
              <div className="flex flex-col col-span-1 gap-1.5">
                <LabelInputField
                  label="Contract Start Date"
                  name="contract_start_date"
                  onChange={handleInputChange}
                  placeholder="dd/mm/yyyy"
                  type="date"
                  isRequired={true}
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <LabelInputField
                  label="Contract End Date"
                  name="contract_end_date"
                  onChange={handleInputChange}
                  placeholder="dd/mm/yyyy"
                  type="date"
                  isRequired={true}
                />
              </div>

              <div className="flex flex-col col-span-1 gap-1.5">
                <LabelInputField
                  label="Contract Price"
                  name="contract_price"
                  onChange={handleInputChange}
                  placeholder="00.00"
                  type="number"
                />
              </div>
            </div>
          </div>

          {/* Site Logistics */}
          <div className="card-outline p-5">
            <h1 className="text-primary font-semibold text-xl">
              Site Logistics
            </h1>
            <div className="w-full grid grid-cols-2 gap-2">
              <div className="flex flex-col col-span-2 gap-1.5">
                <label htmlFor="" className="text-xs">
                  Project Access Note
                </label>
                <textarea
                  name="access_notes"
                  onChange={handleInputChange}
                  value={values.access_notes}
                  placeholder="Gate Code, WHS Instructions, Permitted Hours...."
                  className="form-label-input"
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
