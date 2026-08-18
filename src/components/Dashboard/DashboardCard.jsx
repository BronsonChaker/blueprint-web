export default function DashboardCard({ title, icon, value, insights }) {
  return (
    <div className="card-outline h-35 w-full col">
      <div className="col">
        <div className="row">
          <span>{title}</span>
          {icon}
        </div>
        <div>
          <span>{value}</span>
          <span>{insights}</span>
        </div>
      </div>
    </div>
  );
}
