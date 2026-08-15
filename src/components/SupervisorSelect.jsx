import { useState, useEffect } from "react";
import { getSupervisors } from "../api/endpoints/projects";

export default function SupervisorSelect({ onChange }) {
  const [supervisors, setSupervisors] = useState([]);
  const [option, setOption] = useState("");
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

  const handleChange = (e) => {
    const value = e.target.value;
    setOption(value);
    onChange?.(value);
  };
console.log(supervisors.map(s => s.id));
  return (
    <select
      name="selectedSupervsor"
      id="supervisorSelect"
      className="flex pl-2 justify-center border-2 text-xs border-border rounded-xl outline-none py-2"
      value={option}
      onChange={handleChange}
    >
      <option value="">Supervisor</option>
      {supervisors.map((supervisor) => {
        return (
          <option value={supervisor.id} key={supervisor.user}>
            {supervisor.first_name} {supervisor.last_name}
          </option>
        );
      })}
    </select>
  );
}
