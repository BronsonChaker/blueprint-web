import { TaskAPI } from "../api/TaskAPI";
import { useState, useEffect } from "react";
import ProjectTasksRow from "../components/Projects/ProjectTasksRow";
import TaskSidebar from "../components/Tasks/TaskSidebar";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [taskSidebar, setTaskSidebar] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);
      const tasks = await TaskAPI.getAllTasks();
      setTasks(tasks);
      setIsLoading(false);
    };
    fetchTasks();
  }, []);

  const handleSelectTasks = (task) => {
    setSelectedTask(task);
    setTaskSidebar((prev) => !prev);
  };

  const handleCloseTaskSidebar = () => {
    setTaskSidebar(false);
    setSelectedTask(null);
  };

  console.log("Tasks", tasks);

  return (
    <div>
      <div className="px-10 py-5 min-h-screen">
        <title>Tasks</title>
        <div className=" w-full">
          <h1 className="text-heading">Tasks</h1>
          <p className="text-page-desc">
            List of all tasks on currently active projects
          </p>
        </div>

        {/* <SearchBar
        placeholder="Search by Task Name or Vendor"
        query={query}
        setQuery={setQuery}
      /> */}
        <table className="w-full mt-5">
          <thead>
            <tr className="bg-gray-50 rounded-t-lg">
              <th scope="col" className="table-header">
                Task Address
              </th>
              <th scope="col" className="table-header">
                Task Name
              </th>
              <th scope="col" className="table-header">
                Vendor
              </th>
              <th scope="col" className="table-header">
                Scheduled Date
              </th>
              <th scope="col" className="table-header">
                Completed Date
              </th>
              <th scope="col" className="table-header">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <ProjectTasksRow
                jobAddress={task.job_address}
                key={task.id}
                taskName={task.name}
                vendor={task.vendor_name}
                scheduledDate={task.booking_date}
                completedDate={task.completion_date}
                duration={"1 Day"}
                onSelect={() => handleSelectTasks(task)}
              />
            ))}
          </tbody>
        </table>
        <TaskSidebar
          taskSidebar={taskSidebar}
          onClose={handleCloseTaskSidebar}
          selectedTask={selectedTask}
        />
      </div>
    </div>
  );
}
