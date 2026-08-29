import { TaskAPI } from "../api/TaskAPI";
import { useState, useEffect } from "react";
import ProjectTasksRow from "../components/Projects/ProjectTasksRow";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);
      const tasks = await TaskAPI.getAllTasks();
      setTasks(tasks);
      setIsLoading(false);
    };
    fetchTasks();
  }, []);

  console.log("Tasks", tasks);

  return (
    <div className="px-10 py-5 min-h-screen">
      <title>Tasks</title>
      <div className=" w-full">
        <h1 className="text-heading">Tasks</h1>
        <p className="text-page-desc">
          List of all incomplete tasks for all active projects
        </p>
      </div>

      <table>
        <tbody>
          {tasks.map((task) => (
            <ProjectTasksRow
              key={task.id}
              taskName={task.name}
              vendor={task.vendor_name}
              scheduledDate={task.booking_date}
              completedDate={task.completion_date}
              duration={"1 Day"}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
