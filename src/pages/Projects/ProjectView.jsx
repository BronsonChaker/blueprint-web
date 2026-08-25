import { viewProject } from "../../api/endpoints/projects";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProjectHeader from "../../components/Projects/ProjectHeader";
import ProjectContainer from "../../components/Projects/ProjectContainer";

export default function ProjectView() {
  const [job, setJob] = useState(null);
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    viewProject(params.id)
      .then((data) => {
        setJob(data[0]);
      })
      .catch((err) => setError(err.message))
      .finally(() => isLoading(false));
  }, [params.id]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!job) return <p>No job found.</p>;

  return (
    <main className="px-10 h-screen overflow-scroll">
      <title>{job.address}</title>
      <ProjectHeader address={job.address} jobNumber={job.job_number} />
      <ProjectContainer />
    </main>
  );
}
