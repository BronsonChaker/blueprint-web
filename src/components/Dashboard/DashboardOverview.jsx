import CriticalTaskContainer from "./CriticalTaskContainer";
// import LocationContainer from "./LocationContainer";
import MilestoneTaskContainer from "./MilestoneTaskContainer";

export default function DashboardOverview() {
  return (
    <div className="grid grid-cols-3 mt-5 gap-5 h-[75%]">
      <div className="col col-span-1 w-full">
        <CriticalTaskContainer title="Critical Tasks" />
      </div>
      <div className="col col-span-1 w-full">
        <MilestoneTaskContainer title="Milestone Tasks" />
      </div>
      <div className="col col-span-1 mr-5 w-full">
        {/* <div className="h-full w-full card-outline">
          <LocationContainer />
        </div> */}
      </div>
    </div>
  );
}
