import DashboardOverview from "../../components/Dashboard/DashboardOverview";
import DashboardShortcuts from "../../components/Dashboard/DashboardShortcuts";

export default function Dashboard() {
  return (
    <div className="px-10 py-5  min-h-screen">
      <title>Dashboard</title>
      <div className=" w-full">
        <h1 className="text-heading">Dashboard</h1>
        <p className="text-page-desc">
          Complete overview of information related to current projects
        </p>
      </div>
      <DashboardShortcuts />
      <DashboardOverview />
    </div>
  );
}
