import { Link } from "react-router";

export default function SignupButton() {
  return (
    <Link
      to="/register"
      className="flex items-center font-mdeium border-2 rounded-lg px-4 py-1.5 text-white border-primary bg-primary text-xs hover:cursor-pointer hover:opacity-80"
    >
      Sign Up
    </Link>
  );
}
