export default function CriticalTaskItem({
  projectNumber,
  projectAddress,
  name,
  vendor,
  date,
  onSelect,
}) {
  return (
    <div
      onClick={onSelect}
      className="column gap-1 p-2 border-2 border-amber-400 hc-critical rounded-md text-gray-700 bg-amber-200"
    >
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
