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
      className={`${completedDate ? 'completed-task' : 'incomplete-task'}`}
    >
      <td scope="col" className="p-5">{taskName}</td>
      <td scope="col" className="p-5">{vendor}</td>
      <td scope="col"  className="p-5">{scheduledDate}</td>
      <td scope="col" className="p-5">{completedDate}</td>
      <td scope="col" className="p-5">{duration}</td>
    </tr>
  );
}
