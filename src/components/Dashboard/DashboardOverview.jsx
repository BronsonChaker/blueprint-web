export default function DashboardOverview() {
  return (
    <div className="grid grid-cols-3 mt-5">
      <div className="col col-span-2 mr-5">
        <div className="w-full card-outline hc">1</div>
        <div className="w-full card-outline hc mt-5">1</div>
      </div>
      <div className="col col-span-1 min-h-full ">
        <div className="h-full w-full card-outline hc p-5">
          <span className="text-lg font-semibold text-gray-700">
            Critical Tasks
          </span>
          <hr className="border-gray-300 my-2"></hr>
        </div>
      </div>
    </div>
  );
}
