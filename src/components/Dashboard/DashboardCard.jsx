import { Link } from "react-router";

export default function DashboardCard({ link, title, icon, value, insights }) {
  return (
    <Link
      to={link}
      className="card-outline w-full col p-5 justify-between hover:cursor-pointer hover:opacity-70 transition duration-200"
    >
      <div className="col justify-between h-full">
        <div className="row justify-between items-center">
          <span className="font-semibold text-md">{title}</span>
          <div>{icon}</div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">{value}</span>
          <span className="text-xs">{insights}</span>
        </div>
      </div>
    </Link>
  );
}
