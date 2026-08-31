import CriticalTaskItem from "../Tasks/CriticalTaskItem";
import { useEffect, useState } from "react";
import { TaskAPI } from "../../api/TaskAPI";
import CircularProgress from "@mui/material/CircularProgress";
import TaskSidebar from "../Tasks/TaskSidebar";

export default function CriticalTaskContainer({ title }) {
  const [criticalTasks, setCriticalTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [taskSidebar, setTaskSidebar] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    TaskAPI.getCriticalTasks().then(async (criticalTasks) => {
      setIsLoading(true);
      setCriticalTasks(criticalTasks);
      setIsLoading(false);
    });
  }, []);

  const handleSelectTasks = (criticalTask) => {
    setSelectedTask(criticalTask);
    setTaskSidebar((prev) => !prev);
  };

  const handleCloseTaskSidebar = () => {
    setTaskSidebar(false);
    setSelectedTask(null);
  };

  return (
    <div className="h-full w-full card-outline p-5">
      <span className="text-lg font-semibold text-gray-700">{title}</span>

      {isLoading ? (
        <div className="w-full h-150 text-center flex items-center justify-center">
          <CircularProgress size="30px" aria-label="Loading…" />;
        </div>
      ) : (
        <div className=" max-h-125 column gap-2 mt-2">
          {criticalTasks.map((criticalTask) => (
            <CriticalTaskItem
              key={criticalTask.id}
              projectNumber={criticalTask.job_number}
              projectAddress={criticalTask.job_address}
              name={criticalTask.name}
              type={criticalTask.task_type}
              date={criticalTask.booking_date}
              vendor={criticalTask.vendor_name}
              onSelect={() => handleSelectTasks(criticalTask)}
            />
          ))}
        </div>
      )}
      <TaskSidebar
        taskSidebar={taskSidebar}
        onClose={handleCloseTaskSidebar}
        selectedTask={selectedTask}
      />
    </div>
  );
}
