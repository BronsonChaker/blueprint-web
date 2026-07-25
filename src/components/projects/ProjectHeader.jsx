import { Link } from "react-router";
import { GiFamilyHouse } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";

export default function ProjectHeader({ address, jobNumber }) {
  return (
    <div className="py-5 flex flex-col gap-3">
      <div className="text-sm text-subtext flex flex-row gap-2">
        <Link to="/projects" className="hover:underline hover:text-blue-500 ">
          Projects
        </Link>
        <span>{">"}</span>
        <span>{address}</span>
      </div>
      <div className="flex flex-row gap-2 items-center ">
        <GiFamilyHouse className="text-5xl text-white bg-primary p-2 rounded-md" />

        <span className="text-3xl font-semibold text-primary">
          Job Number: {jobNumber}
        </span>
      </div>
      <div className="flex flex-row items-center gap-5">
        <span className="flex items-center gap-2 text-subtext text-lg font-medium">
          <FaLocationDot className="text-red-400" />
          {address}
        </span>

        <span className="bg-blue-100 text-blue-700 ring-blue-300 px-2 py-1 rounded-lg text-xs font-medium ring-1">
          ACTIVE: BASE STAGE
        </span>
      </div>
    </div>
  );
}
