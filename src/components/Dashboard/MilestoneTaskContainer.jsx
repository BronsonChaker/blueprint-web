import MilestoneTaskItem from "../Tasks/MilestoneTaskItem";
import { useEffect, useState } from "react";
import { TaskAPI } from "../../api/TaskAPI";
import CircularProgress from "@mui/material/CircularProgress";
import TaskSidebar from "../Tasks/TaskSidebar";

export default function MilestoneTaskContainer({ title }) {
  const [milestoneTasks, setMilestoneTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [taskSidebar, setTaskSidebar] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    TaskAPI.getMilestoneTasks().then(async (milestoneTasks) => {
      setIsLoading(true);
      setMilestoneTasks(milestoneTasks);
      setIsLoading(false);
    });
  }, []);

  const handleSelectTasks = (milestoneTask) => {
    setSelectedTask(milestoneTask);
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
          {milestoneTasks.map((milestoneTask) => (
            <MilestoneTaskItem
              key={milestoneTask.id}
              projectNumber={milestoneTask.job_number}
              projectAddress={milestoneTask.job_address}
              name={milestoneTask.name}
              type={milestoneTask.task_type}
              date={milestoneTask.booking_date}
              vendor={milestoneTask.vendor_name}
              onSelect={() => handleSelectTasks(milestoneTask)}
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
