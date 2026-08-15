import { JobStatus } from "../../models/models";

const statusConfig = {
  [JobStatus.ACTIVE]: {
    label: "Active",
    classes: "bg-blue-100 text-blue-700 ring-blue-300",
  },
  [JobStatus.PENDING]: {
    label: "Pending",
    classes: "bg-purple-100 text-purple-700 ring-purple-300",
  },
  [JobStatus.ON_HOLD]: {
    label: "On Hold",
    classes: "bg-amber-100 text-amber-700 ring-amber-300",
  },
  [JobStatus.FINALISED]: {
    label: "Finalised",
    classes: "bg-gray-100 text-gray-700 ring-gray-300",
  },
  [JobStatus.COMPLETED]: {
    label: "Completed",
    classes: "bg-green-100 text-green-700 ring-green-300",
  },
};
const defaultStatusStyle = {
  label: "Unknown",
  classes: "bg-gray-100 text-gray-700 ring-1 ring-gray-300",
};
export default function ProjectStatusBadge({ status }) {
  const config = statusConfig[status] ?? defaultStatusStyle;
  return (
    <span
      className={`px-2 py-1 rounded-lg text-xs font-medium ring-1 ${config.classes}`}
    >
      {config.label}
    </span>
  );
}
