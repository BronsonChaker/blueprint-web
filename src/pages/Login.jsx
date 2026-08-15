import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaArrowRight } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState(null);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.detail || "Login Failed");
    }
  };
  return (
    <div className="flex w-screen h-screen">
      <title>Login</title>
      {/*  */}
      <div className="w-1/2 bg-primary flex justify-center flex-col px-20 ">
        <h3 className="text-white text-3xl font-semibold">Blueprint</h3>
        <p className="mt-3 text-stone-300 text-sm">
          Built by builders with industry knowledge and experience. Created to
          enhance operational efficiency and hit deadlines seamlessly.
        </p>
      </div>

      {/* Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-30 text-sm">
        <div className="w-full">
          <h1 className="text-primary text-2xl font-bold">Welcome Back</h1>
          <p className="text-stone-600 text-sm">
            Access your organisation and start scheduling.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col mt-5 gap-4"
        >
          {/* Email Address Input */}
          <div className="w-full flex flex-col">
            <label htmlFor="" className="font-medium">
              Username
            </label>
            <input
              className="rounded-sm outline-2 outline-stone-300 px-3 py-2 mt-2 shadow-md"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
          </div>

          {/* Password Input */}

          <div className="w-full flex flex-col text-sm">
            <div className="w-full flex justify-between">
              <label htmlFor="" className="font-medium">
                Password
              </label>
              <Link
                to="/forgotpassword"
                className="text-primary font-bold hover:opacity-70 hover:duration-300"
              >
                Forgot Password?
              </Link>
            </div>

            <input
              type="password"
              className="flex rounded-sm outline-2 outline-stone-300 px-3 py-2 mt-2 shadow-md"
              placeholder="**************"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>

          {error && <p className="text-red-600 mt-2">{error}</p>}

          {/* <div className="flex flex-row items-center gap-2 mt-5">
            <input
              type="checkbox"
              className="accent-primary h-4 w-4 cursor-pointer"
            />
            <p>Keep me signed in for 30 Days</p>
          </div> */}

          <button
            type="submit"
            className="flex justify-center items-center bg-primary w-full py-2 rounded-md text-sm text-white cursor-pointer mt-2 gap-2 font-semibold hover:opacity-85 hover:cursor-pointer hover:duration-200"
          >
            Sign In <FaArrowRight />
          </button>
        </form>

        <div className="w-full flex flex-row gap-1.5 items-center justify-center text-sm mt-5">
          <p>Don't have an account?</p>
          <Link
            to="/register"
            className="text-primary font-bold hover:opacity-70 hover:duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
