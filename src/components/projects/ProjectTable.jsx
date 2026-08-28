import ProjectTableRow from "./ProjectTableRow";
import { ProjectAPI } from "../../api/ProjectAPI";
import { UserAPI } from "../../api/UserAPI";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";

export default function ProjectTable({ jobCountData, query }) {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    ProjectAPI.getAll().then(async (jobs) => {
      setJobs(jobs ?? []);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    UserAPI.projectCount().then(async (data) => {
      jobCountData(data);
    });
  }, [jobCountData]);

  const filteredJobs = jobs.filter((job) => {
    const search = query.toLowerCase();
    return (
      job.job_number?.toLowerCase().includes(search) ||
      job.address?.toLowerCase().includes(search)
    );
  });

  const handleSelectJob = (jobId) => {
    navigate(`/jobs/${jobId}`);
  };

  return (
    <div className="h-full w-full">
      {isLoading ? (
        <div className="w-full h-150 text-center flex items-center justify-center">
          <CircularProgress size="30px" aria-label="Loading…" />;
        </div>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 rounded-t-lg">
              <th scope="col" className="table-header">
                Job No.
              </th>
              <th scope="col" className="table-header">
                Address
              </th>
              <th scope="col" className="table-header">
                Status
              </th>
              <th scope="col" className="table-header">
                Stage
              </th>
              <th scope="col" className="table-header">
                Supervisor
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
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
      )}
    </div>
  );
}
