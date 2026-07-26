export default function Tab({ label, onClick, isActive }) {
  return (
    <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
      {label}
    </div>
  );
}
