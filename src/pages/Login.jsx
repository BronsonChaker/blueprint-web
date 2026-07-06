import { Link } from "react-router";

export default function Login() {
  return (
    <div className="flex w-screen h-screen">
      <title>Login</title>
      {/*  */}
      <div className="w-1/2 bg-primary flex justify-center flex-col px-20">
        <h3 className="text-white text-6xl font-semibold">Blueprint</h3>
        <p className="mt-4 text-stone-300 text-xl">
          Built by builders with industry knowledge and experience. Created to
          enhance operational efficiency and hit deadlines seamlessly.
        </p>
      </div>

      {/* Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-30">
        <div className="w-full">
          <h1 className="text-primary text-5xl font-bold">Welcome Back</h1>
          <p className="text-stone-600 text-lg">
            Access your organisation and start scheduling.
          </p>
        </div>

        <form action="" className="w-full flex flex-col mt-5 gap-4">
          {/* Email Address Input */}
          <div className="w-full flex flex-col">
            <label htmlFor="" className="font-medium">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              className="rounded-sm outline-2 outline-stone-300 px-5 py-3 mt-1 shadow-md"
              placeholder="e.g johnsmith@gmail.com"
            />
          </div>

          {/* Password Input */}

          <div className="w-full flex flex-col">
            <div className="w-full flex justify-between">
              <label htmlFor="" className="font-medium">
                PASSWORD
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
              className="flex rounded-sm outline-2 outline-stone-300 px-5 py-3 mt-1 shadow-md"
              placeholder="**************"
            />
          </div>

          <div className="flex flex-row items-center gap-2 mt-5">
            <input
              type="checkbox"
              className="accent-primary h-4 w-4 cursor-pointer"
            />
            <p>Keep me signed in for 30 Days</p>
          </div>

          <button
            type="submit"
            className="flex justify-center items-center bg-primary w-full py-4 rounded-md text-white cursor-pointer mt-5 gap-2 font-semibold text-xl"
          >
            Sign In <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </form>

        <div className="w-full flex flex-row gap-1.5 items-center justify-center text-lg mt-5">
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
