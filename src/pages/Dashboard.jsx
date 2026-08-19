import DashboardCard from "../components/Dashboard/DashboardCard";
import { GiFamilyHouse } from "react-icons/gi";

export default function Dashboard() {
  return (
    <div className="px-20">
      <title>Dashboard</title>
      <div className="mt-5 w-full">
        <h1 className="text-heading">Dashboard</h1>
        <p className="text-page-desc">
          Brief overview off all details regards all currently active projects
        </p>
      </div>
      <div className="grid grid-cols-4 mt-5">
        <div className="row col-span-4 justify-between gap-5">
          <DashboardCard
            link="/projects"
            title="Active Projects"
            icon={<GiFamilyHouse />}
            value={"24"}
            insight={"-5 this month"}
          />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
      </div>
    </div>
  );
}
