import { useState, useEffect } from "react";
import { OrganisationAPI } from "../api/OrganisationAPI";

export default function SupervisorSelect({ onChange }) {
  const [supervisors, setSupervisors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [option, setOption] = useState("");

  useEffect(() => {
    OrganisationAPI.getSupervisors()
      .then(async (supervisors) => {
        setIsLoading(true);
        setSupervisors(supervisors);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setOption(value);
    onChange?.(value);
  };

  return (
    <>
      {isLoading ? (
        <select
          name="selectedSupervsor"
          id="supervisorSelect"
          className="flex pl-2 justify-center border-2 text-xs border-border rounded-xl outline-none py-2 hover:cursor-not-allowed"
          value={option}
          disabled
          onChange={handleChange}
        >
          <option value="">Supervisor</option>
        </select>
      ) : (
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
      )}
    </>
  );
}
