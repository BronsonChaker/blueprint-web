import ProjectTableRow from "../projects/ProjectTableRow";
import { getJobs } from "../../api/endpoints/projects";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router";
import {} from "react";

export default function ProjectTable({ jobCountData }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();



  useEffect(() => {
    getJobs()
      .then((data) => {
        setJobs(data);
        jobCountData(data.length);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [jobCountData]);


  const handleSelectJob = (jobId) => {
    navigate(`/jobs/${jobId}`);
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <table className="w-full">
      <thead>
        <tr className=" bg-gray-50 rounded-t-lg">
          <th scope="col" className="px-5 py-1.5 text-start text-sm font-medium">
            Job No.
          </th>
          <th scope="col" className="px-5 py-1.5 text-start text-sm font-medium">
            Address
          </th>
          <th scope="col" className="px-5 py-1.5 text-start text-sm font-medium">
            Status
          </th>
          <th scope="col" className="px-5 py-1.5 text-start text-sm font-medium">
            Stage
          </th>
          <th scope="col" className="px-5 py-1.5 text-start text-sm font-medium">
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
            onSelect={() => handleSelectJob(job.id)}
          />
        ))}
      </tbody>
    </table>
  );
}
