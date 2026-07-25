import { viewProject } from "../api/endpoints/projects";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ProjectView() {
  const [job, setJob] = useState(null);
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    viewProject(params.id)
      .then((data) => {
        console.log("job data:", data);
        setJob(data[0]);
      })
      .catch((err) => setError(err.message))
      .finally(() => isLoading(false));
  }, [params.id]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!job) return <p>No job found.</p>;

  return (
    <div>
      <h1>{job.address}</h1>
      <h1>{job.job_number}</h1>
    </div>
  );
}
