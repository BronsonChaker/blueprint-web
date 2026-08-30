export default function MilestoneTaskItem({
  projectNumber,
  projectAddress,
  name,
  vendor,
  date,
}) {
  return (
    <div className="column gap-1 p-2 border-2 border-blue-400 hc-milestone rounded-md text-gray-700 bg-blue-200">
      <span className="font-semibold text-sm">
        {projectNumber + " - " + projectAddress}
      </span>
      <span className="text-xs">
        <span className="font-semibold">Task Name: </span> {name}
      </span>
      <span className="text-xs">
        <span className="font-semibold">Assigned To: </span> {vendor}
      </span>
      <span className="text-xs">
        <span className="font-semibold">Due: </span>
        {date}
      </span>
    </div>
  );
}
