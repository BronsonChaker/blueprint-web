import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

export default function Register() {
  return (
    <div className="flex w-screen h-screen">
      <title>Register</title>
      {/*  */}
      <div className="w-1/2 bg-primary flex justify-center flex-col px-20">
        <h3 className="text-white text-3xl font-semibold">Blueprint</h3>
        <p className="mt-3 text-stone-300 text-sm">
          Built by builders with industry knowledge and experience. Created to
          enhance operational efficiency and hit deadlines seamlessly.
        </p>
      </div>

      {/* Register Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-30 text-sm">
        <div className="w-full">
          <h1 className="text-primary text-2xl font-bold">
            Register Business Account
          </h1>
          <p className="text-stone-600 text-sm">
            Start organising projects and hitting deadlines with ease!
          </p>
        </div>

        <form action="" className="w-full flex flex-col mt-5 gap-4">
          {/* Account Owner Input */}
          <div className="w-full flex flex-row gap-4">
            <div className="w-1/2 flex flex-col">
              <label htmlFor="" className="font-medium">
                First Name
              </label>
              <input
                type="text"
                className="rounded-sm outline-2 outline-stone-300 focus:outline-primary px-5 py-2 mt-1 shadow-md w-full"
                placeholder="John"
              />
            </div>

            <div className="w-1/2 flex flex-col">
              <label htmlFor="" className="font-medium">
                Last Name
              </label>
              <input
                type="text"
                className="rounded-sm outline-2 outline-stone-300 focus:outline-primary px-5 py-2 mt-1 shadow-md w-full"
                placeholder="Smith"
              />
            </div>
          </div>

          {/* Email Input */}

          <div className="w-full flex flex-col">
            <label htmlFor="" className="font-medium">
              Business Email
            </label>
            <input
              type="email"
              className="rounded-sm outline-2 outline-stone-300 focus:outline-primary active: px-5 py-2 mt-1 shadow-md w-full"
              placeholder="johnsmith@gmail.com"
            />
          </div>

          {/* Password Input */}

          <div className="w-full flex flex-col">
            <div className="w-full flex justify-between">
              <label htmlFor="" className="font-medium">
                Password
              </label>
            </div>

            <input
              type="password"
              className="flex rounded-sm outline-2 outline-stone-300 focus:outline-primary px-5 py-2 mt-1 shadow-md"
              placeholder="******************"
            />
          </div>

          {/* Verify Password */}
          <div className="w-full flex flex-col">
            <div className="w-full flex justify-between">
              <label htmlFor="" className="font-medium">
                Verify Password
              </label>
            </div>

            <input
              type="password"
              className="flex rounded-sm outline-2 outline-stone-300 focus:outline-primary px-5 py-2 mt-1 shadow-md"
              placeholder="******************"
            />
          </div>

          <div className="flex flex-row items-center gap-2 mt-2">
            <input
              type="checkbox"
              className="accent-primary h-4 w-4 cursor-pointer"
            />
            <p>Keep me signed in for 30 Days</p>
          </div>

          <button
            type="submit"
            className="flex justify-center items-center bg-primary w-full py-2 rounded-md text-white cursor-pointer mt-2 gap-2 font-semibold text-sm hover:opacity-85 hover:cursor-pointer hover:duration-200"
          >
            Get Started <FaArrowRight />
          </button>
        </form>

        <div className="w-full flex flex-row gap-1.5 items-center justify-center text-sm mt-5">
          <p>Already have an account?</p>
          <Link
            to="/login"
            className="text-primary font-bold hover:opacity-70 hover:duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
