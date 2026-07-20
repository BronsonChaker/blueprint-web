export default function ProjectListItem({
  projectId,
  address,
  status,
  stage,
  supervisor,
}) {
  return (
    <tr>
      <th scope="row" className="p-5">
        {projectId}
      </th>
      <td className="p-5">{address}</td>
      <td className="p-5 text-center">{status}</td>
      <td className="p-5 text-center">{stage}</td>
      <td className="p-5 text-center">{supervisor}</td>
    </tr>
  );
}
