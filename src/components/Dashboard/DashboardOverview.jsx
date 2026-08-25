import OverviewContainer from "./CriticalTaskContainer";
import LocationContainer from "./LocationContainer";

export default function DashboardOverview() {
  return (
    <div className="grid grid-cols-3 mt-5 gap-5">
      <div className="col col-span-1 w-full">
        <OverviewContainer title="Critical Tasks" />
      </div>
      <div className="col col-span-2 mr-5 w-full">
        <div className="h-full w-full card-outline">
          <LocationContainer />
        </div>
      </div>
    </div>
  );
}
