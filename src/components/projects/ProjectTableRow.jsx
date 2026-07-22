export default function ProjectListItem({
  projectId,
  address,
  status,
  stage,
  supervisor,
}) {
  return (
    <tr className="">
      <th scope="row" className="p-5">
        {projectId}
      </th>
      <td className="p-5 uppercase">{address}</td>
      <td className="p-5 uppercase text-center">{status}</td>
      <td className="p-5 uppercase text-center">{stage}</td>
      <td className="p-5 text-center">{supervisor}</td>
    </tr>
  );
}
