import { useState, useEffect } from "react";
import { TaskAPI } from "../../api/TaskAPI";
import { useParams } from "react-router";
import ProjectTasksRow from "./ProjectTasksRow";
import TaskSidebar from "../Tasks/TaskSidebar";
import SearchBar from "../UI/SearchBar";
export default function ProjectTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const [taskSidebar, setTaskSidebar] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    TaskAPI.getProjectTasks(params.id)
      .then((data) => setTasks(data))
      .catch((err) => setError(err.message))
      .finally(() => isLoading(false));
  }, [params.id]);

  const handleSelectTasks = (task) => {
    setSelectedTask(task);
    setTaskSidebar((prev) => !prev);
  };

  const handleCloseTaskSidebar = () => {
    setTaskSidebar(false);
    setSelectedTask(null);
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <SearchBar
        placeholder="Search by Task Name or Vendor"
        query={query}
        setQuery={setQuery}
      />
      <table className="w-full mt-2">
        <thead>
          <tr className="bg-gray-50 rounded-t-lg">
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
  );
}
