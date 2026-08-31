import DashboardCard from "./DashboardCard.jsx";
import { LuHouse } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdTaskAlt } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { useState, useEffect } from "react";
import { UserAPI } from "../../api/UserAPI.js";

export default function DashboardShortcuts() {
  const [jobCount, setJobCount] = useState("");

  useEffect(() => {
    UserAPI.projectCount().then((data) => {
      setJobCount(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-4 mt-5 w-full h-fulll">
      <div className="row col-span-4 justify-between gap-5">
        <DashboardCard
          link="/projects"
          title="Projects"
          icon={<LuHouse className="text-4xl rounded-full p-1.5 bg-gray-100" />}
          value={jobCount.job_count}
          insights={"Total projects"}
        />
        <DashboardCard
          link="/tasks"
          title="Tasks"
          icon={
            <MdTaskAlt className="text-4xl rounded-full p-1.5 bg-gray-100" />
          }
          value={"10"}
          insights={"Tasks today"}
        />
        <DashboardCard
          link="/inspections"
          title="Inpsections"
          icon={
            <FaMagnifyingGlass className="text-4xl rounded-full p-1.5 bg-gray-100" />
          }
          value={"3"}
          insights={"Upcoming Inspections"}
        />
        <DashboardCard
          link="/reports"
          title="Reports"
          icon={
            <HiOutlineDocumentReport className="text-4xl rounded-full p-1.5 bg-gray-100" />
          }
          value={"10"}
          insights={"Unread reports"}
        />
      </div>
    </div>
  );
}
