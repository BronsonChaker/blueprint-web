import { useState, useEffect } from "react";
import { OrganisationAPI } from "../api/OrganisationAPI";

export default function SupervisorSelect({ onChange }) {
  const [supervisors, setSupervisors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    onChange?.(e);
  };

  return (
    <>
      {isLoading ? (
        <select
          name="supervisor"
          id="supervisor"
          className="flex pl-2 justify-center border-2 text-xs border-border rounded-xl outline-none py-2 hover:cursor-not-allowed bg-white"
          disabled
          onChange={handleChange}
        >
          <option value="">Supervisor</option>
        </select>
      ) : (
        <select
          name="supervisor"
          id="supervisor"
          className="flex pl-2 justify-center border-2 text-xs border-border rounded-xl outline-none py-2 bg-white"
          onChange={handleChange}
        >
          <option value="">Supervisor</option>
          {supervisors.map((supervisor) => {
            return (
              <option value={supervisor.user} key={supervisor.user}>
                {supervisor.first_name} {supervisor.last_name}
              </option>
            );
          })}
        </select>
      )}
    </>
  );
}
