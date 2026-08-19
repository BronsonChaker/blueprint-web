import { Link } from "react-router";

export default function DashboardCard({ link, title, icon, value, insights }) {
  return (
    <Link
      to={link}
      className="card-outline h-35 w-full col p-5 justify-between hover:cursor-pointer hover:opacity-70 transition duration-200"
    >
      <div className="col">
        <div className="row">
          <span className="font-medium text-xl">{title}</span>
          <div classNamew="text-xl p-5 bg-red-100">{icon}</div>
        </div>
        <div className="flex items-end">
          <span className="text-xl font-bold">{value}</span>
          <span>{insights}</span>
        </div>
      </div>
    </Link>
  );
}
