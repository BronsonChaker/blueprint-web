import ProjectTableRow from "../projects/ProjectTableRow";

export default function ProjectTable() {
  return (
    <table className="w-full border border-black">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Address</th>
          <th scope="col">Status</th>
          <th scope="col">Stage</th>
          <th scope="col">Supervisor</th>
        </tr>
      </thead>
      <tbody>
        <ProjectTableRow />
      </tbody>
    </table>
  );
}
