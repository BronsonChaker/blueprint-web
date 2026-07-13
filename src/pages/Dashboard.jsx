import { IoMdAddCircle } from "react-icons/io";

export default function Dashboard() {
  return (
    <div className="px-20">
      <title>Dashboard</title>
      <div className="mt-10">
        <h1 className="font-bold text-primary text-4xl">Dashboard</h1>
        <p className="text-lg text-subtext mt-2">
          Brief overview off all details regards all currently active projects
        </p>
      </div>
      <div class="grid grid-cols-3 gap-4 border border-red-100">
        <div class="...">
          <div>Quick Actions</div>
          <div>
            <button className="flex flex-row items-center gap-1 text-lg bg-primary text-white px-2 py-3 rounded-xl hover:opacity-90 hover:duration-300 hover:cursor-pointer">
              {" "}
              <IoMdAddCircle />
              <p>New Project</p>
            </button>
            <button>+ Create Inpsection</button>
            <button>+ Daily Report</button>
          </div>
        </div>
        <div class="...">02</div>
        <div class="...">03</div>
        <div class="col-span-2 ...">04</div>
        <div class="...">05</div>
        <div class="...">06</div>
        <div class="col-span-2 ...">07</div>
      </div>
    </div>
  );
}
