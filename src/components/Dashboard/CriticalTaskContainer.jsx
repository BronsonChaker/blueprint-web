import CriticalTaskItem from "../Tasks/CriticalTaskItem";
import { useEffect, useState } from "react";
import { TaskAPI } from "../../api/TaskAPI";
import CircularProgress from "@mui/material/CircularProgress";

export default function OverviewContainer({ title }) {
  const [criticalTasks, setCriticalTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    TaskAPI.getCriticalTasks().then(async (criticalTasks) => {
      setIsLoading(true);
      setCriticalTasks(criticalTasks);
      setIsLoading(false);
    });
  }, []);

  console.log("Critical Tasks", criticalTasks);

  return (
    <div className="h-full w-full card-outline p-5">
      <span className="text-lg font-semibold text-gray-700">{title}</span>
      <hr className="border-gray-300 mt-1 mb-3"></hr>
      {isLoading ? (
        <div className="w-full h-150 text-center flex items-center justify-center">
          <CircularProgress size="30px" aria-label="Loading…" />;
        </div>
      ) : (
        <div className="overflow-y-scroll max-h-125 column gap-2">
          {criticalTasks.map((criticalTask) => (
            <CriticalTaskItem
              key={criticalTask.id}
              projectNumber={criticalTask.job_number}
              projectAddress={criticalTask.job_address}
              name={criticalTask.name}
              type={criticalTask.task_type}
              date={criticalTask.booking_date}
              vendor={criticalTask.vendor_name}
            />
          ))}
        </div>
      )}
    </div>
  );
}
