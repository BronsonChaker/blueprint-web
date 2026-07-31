export default function ProjectTasksRow({
  taskName,
  vendor,
  scheduledDate,
  completedDate,
  duration,
  onSelect,
}) {
  return (
    <tr
      onClick={onSelect}
      className="hover:cursor-pointer hover:bg-gray-100 border-t-2 border-b-2 border-border"
    >
      <td className="text-center">{taskName}</td>
      <td className=" uppercase text-center">{vendor}</td>
      <td className=" uppercase text-center">{scheduledDate}</td>
      <td className=" capitalize text-center">{completedDate}</td>
      <td className=" text-center">{duration}</td>
    </tr>
  );
}
