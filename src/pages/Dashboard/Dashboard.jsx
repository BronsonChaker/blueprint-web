export default function Dashboard() {
  return (
    <div className="px-20">
      <title>Dashboard</title>
      <div className="mt-5 w-full">
        <h1 className="text-heading">Dashboard</h1>
        <p className="text-page-desc">
          Brief overview off all details regards all currently active projects
        </p>
      </div>
      <div className="grid grid-cols-4 mt-5">
        <div className="row col-span-4 justify-between gap-5">
          <div className="card-outline h-35 w-full">1</div>
          <div className="card-outline h-35 w-full">2</div>
          <div className="card-outline h-35 w-full">3</div>
          <div className="card-outline h-35 w-full">4</div>
        </div>
      </div>
    </div>
  );
}
