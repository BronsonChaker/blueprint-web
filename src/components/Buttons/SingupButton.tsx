import { Link } from "react-router";

export default function SignupButton() {
  return (
    <Link
      to="/register"
      className="flex items-center font-semibold border-2 rounded-lg px-3 py-1 text-white border-primary bg-primary hover:cursor-pointer hover:opacity-80"
    >
      Sign Up
    </Link>
  );
}
