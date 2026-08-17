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
    <tr onClick={onSelect}
      className="hover:cursor-pointer hover:bg-gray-100  border-b border-border text-sm" >
    <td scope="col" className="p-5">{jobNumber}</td>
    <td scope="col" className="p-5">{address}</td>
    <td scope="col" className="p-5"> <ProjectStatusBadge status={status} />  </td>
    <td scope="col" className="p-5 capitalize">{stage}</td>
    <td scope="col" className="p-5 ">{supervisor}</td>
    </tr>
  );
}
