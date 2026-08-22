import { Link } from "react-router";

function App() {
  return (
    <>
      <div className="flex flex-col text-lg">
        <h1>Current Routes</h1>
        <Link to="/">Index</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/forgotpassword">Forgot Password</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/inspections">Inspections</Link>
        <Link to="/calendar">Inspections</Link>
        <Link to="/vendors">Vendors</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/organisation">Organisation</Link>
        <Link to="/profile">Reports</Link>
        <Link to="/subscription">Subscription</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/support">Support</Link>
      </div>
    </>
  );
}

export default App;
