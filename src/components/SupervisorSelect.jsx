import { useState, useEffect } from "react";
import { getSupervisors } from "../api/endpoints/projects";

export default function SupervisorSelect() {
  const [supervisors, setSupervisors] = useState([]);
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSupervisors()
      .then((data) => setSupervisors(data))
      .catch((err) => setError(err.message))
      .finally(() => isLoading(false));
  }, []);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <select
      name="selectedSupervsor"
      id="supervisorSelect"
      className="outline-none"
    >
      <option value="">Supervisor</option>
      {supervisors.map((supervisor) => {
        return (
          <option value={supervisor.id} key={supervisor.id}>
            {supervisor.first_name} {supervisor.last_name}
          </option>
        );
      })}
    </select>
  );
}
