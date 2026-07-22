import ProjectTableRow from "../projects/ProjectTableRow";
import { getJobs } from "../../api/endpoints/projects";
import { useEffect, useState } from "react";

export default function ProjectTable() {
  const [jobs, setJobs] = useState([]);
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getJobs()
      .then((data) => setJobs(data))
      .catch((err) => setError(err.message))
      .finally(() => isLoading(false));
  }, []);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;
  getJobs();
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Address</th>
          <th scope="col">Status</th>
          <th scope="col">Stage</th>
          <th scope="col">Supervisor</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job) => (
          <ProjectTableRow
            key={job.id}
            projectId={job.id}
            address={job.address}
            status={job.status}
            stage={job.stage}
            supervisor={`${job.first_name} ${job.last_name}`}
          />
        ))}
      </tbody>
    </table>
  );
}
