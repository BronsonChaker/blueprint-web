import { useState, useEffect } from "react";
import { getProjectTasks } from "../../api/endpoints/projects";
import { useParams } from "react-router";
import ProjectTasksRow from "./ProjectTasksRow";
export default function ProjectTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  console.log(params.id);

  useEffect(() => {
    getProjectTasks(params.id)
      .then((data) => setTasks(data))
      .catch((err) => setError(err.message))
      .finally(() => isLoading(false));
  }, [params.id]);

  console.log(tasks);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr scope="row" className=" border-border text-center text-sm">
            <th scope="col" className="">
              Task Name
            </th>
            <th scope="col" className="">
              Vendor
            </th>
            <th scope="col" className="">
              Scheduled Date
            </th>
            <th scope="col" className="">
              Completed Date
            </th>
            <th scope="col" className="">
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
