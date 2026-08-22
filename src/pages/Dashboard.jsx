import DashboardCard from "../components/Dashboard/DashboardCard";
import { GiFamilyHouse } from "react-icons/gi";
import { LuHouse } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { MdTaskAlt } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";

export default function Dashboard() {
  return (
    <div className="px-10 mt-10">
      <title>Dashboard</title>
      <div className="mt-5 w-full">
        <h1 className="text-heading">Dashboard</h1>
        <p className="text-page-desc">
          Complete overview of information related to current projects
        </p>
      </div>
      <div className="grid grid-cols-4 mt-5">
        <div className="row col-span-4 justify-between gap-5">
          <DashboardCard
            link="/projects"
            title="Projects"
            icon={
              <LuHouse className="text-4xl rounded-full p-1.5 bg-gray-100" />
            }
            value={"24"}
            insights={"-5 this month"}
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
            link="/calendar"
            title="Calendar"
            icon={
              <IoCalendarOutline className="text-4xl rounded-full p-1.5 bg-gray-100" />
            }
            value={""}
            insights={""}
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
    </div>
  );
}
