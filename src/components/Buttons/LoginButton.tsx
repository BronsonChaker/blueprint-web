import { Link } from "react-router";
export default function LoginButton() {
  return (
    <Link
      to="/login"
      className="flex items-center font-semibold border-2 rounded-lg px-4 py-1.5 text-primary border-primary text-xs hover:cursor-pointer hover:opacity-70"
    >
      Log In
    </Link>
  );
}
