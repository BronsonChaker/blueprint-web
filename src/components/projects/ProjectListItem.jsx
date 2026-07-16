export default function ProjectListItem({
  id,
  address,
  status,
  stage,
  estimatedCompletion,
}) {
  return (
    <div>
      <h1>
        {id}
        {address}
        {status}
        {stage}
        {estimatedCompletion}
      </h1>
    </div>
  );
}
