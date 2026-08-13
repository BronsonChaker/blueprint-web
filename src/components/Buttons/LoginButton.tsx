import { Link } from "react-router";
export default function LoginButton() {
  return (
    <Link
      to="/login"
      className="flex items-center font-semibold border-2 rounded-lg px-3 py-0.5 text-primary border-primary hover:cursor-pointer hover:opacity-80"
    >
      Log In
    </Link>
  );
}
