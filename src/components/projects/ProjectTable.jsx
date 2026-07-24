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
        <tr scope="row" className="border-t-2 border-gray-200 text-medium">
          <th scope="col" className="p-3">
            Job No.
          </th>
          <th scope="col" className="p-3">
            Address
          </th>
          <th scope="col" className="p-3">
            Status
          </th>
          <th scope="col" className="p-3">
            Stage
          </th>
          <th scope="col" className="p-3">
            Supervisor
          </th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job) => (
          <ProjectTableRow
            key={job.id}
            jobNumber={job.job_number}
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
