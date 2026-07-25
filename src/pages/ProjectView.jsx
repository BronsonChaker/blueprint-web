import { viewProject } from "../api/endpoints/projects";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectContainer from "../components/projects/ProjectContainer";

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
    <div className="px-20 h-screen">
      <ProjectHeader address={job.address} jobNumber={job.job_number} />
      <ProjectContainer />
    </div>
  );
}
