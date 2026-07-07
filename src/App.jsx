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
        <Link to="/jobs">Jobs</Link>
        <Link to="/inspections">Inspections</Link>
        <Link to="/vendors">Vendors</Link>
        <Link to="/Reports">Reports</Link>
      </div>
    </>
  );
}

export default App;
