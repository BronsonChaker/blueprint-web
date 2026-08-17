import { useState, useEffect } from "react";
import { getProjectTasks } from "../../api/endpoints/projects";
import { useParams } from "react-router";
import ProjectTasksRow from "./ProjectTasksRow";
export default function ProjectTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    getProjectTasks(params.id)
      .then((data) => setTasks(data))
      .catch((err) => setError(err.message))
      .finally(() => isLoading(false));
  }, [params.id]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <table className="w-full">
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
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
