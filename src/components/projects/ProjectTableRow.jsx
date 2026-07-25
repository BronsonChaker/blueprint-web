import ProjectStatusBadge from "./ProjectStatusBadge";

export default function ProjectListItem({
  jobNumber,
  address,
  status,
  stage,
  supervisor,
  onSelect,
}) {
  return (
    <tr
      onClick={onSelect}
      className="hover:cursor-pointer hover:bg-gray-100 border-t-2 border-b-2 border-border"
    >
      <th scope="row" className="p-5">
        {jobNumber}
      </th>
      <td className="p-5 uppercase">{address}</td>
      <td className="p-5 uppercase text-center">
        <ProjectStatusBadge status={status} />
      </td>
      <td className="p-5 capitalize text-center">{stage}</td>
      <td className="p-5 text-center">{supervisor}</td>
    </tr>
  );
}
