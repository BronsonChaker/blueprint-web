import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { FaUser } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router";
import { BiSolidError } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      onClick={toggleDropdown}
      className="text-left px-2 py-1 hover:cursor-pointer overflow-visible"
    >
      <div className="flex flex-col gap-2 px-2 py-1.5 rounded-lg border-2 border-stone-100 bg-white">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <img
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
              alt="avatar"
              className="inline-block object-cover object-center w-8 h-8 rounded-full border-2 border-primary"
            />
            <div>
              <p className="font-sans antialiased text-xs font-medium text-current">
                {user.username}
              </p>
            </div>
          </div>

          <div
            className={`w-45.5 absolute left-7 bottom-18 mt-3 rounded-sm border-2 border-stone-100 bg-white
                    transition-all duration-200 ease-in-out
                    ${isOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"}`}
          >
            <ul className="flex gap-1 flex-col text-xs ">
              <li className="">
                <Link
                  to="/user"
                  className="flex flex-row gap-1 rounded-md items-center hover-bg px-1.5 py-1"
                >
                  <FaUser className="text-md text-gray-700" />
                  <span className="text-xs font-medium text-gray-700">
                    Profile
                  </span>
                </Link>
              </li>
              <li className="">
                <Link
                  to="/user"
                  className="flex flex-row gap-1 rounded-md items-center hover-bg px-1.5 py-1"
                >
                  <FaCreditCard className="text-md text-gray-700" />
                  <span className="text-xs font-medium text-gray-700">
                    Subscription
                  </span>
                </Link>
              </li>
              <li className="">
                <Link
                  to="/user"
                  className="flex flex-row gap-1 rounded-md items-center hover-bg px-1.5 py-1"
                >
                  <IoIosSettings className="text-kg text-gray-700" />
                  <span className="text-xs font-medium text-gray-700">
                    Settings
                  </span>
                </Link>
              </li>
              <li className="">
                <Link
                  to="/user"
                  className="flex flex-row gap-1 rounded-md items-center hover-bg px-1.5 py-1"
                >
                  <BiSolidError className="text-md text-gray-700" />
                  <span className="text-xs font-medium text-gray-700">
                    Suppport
                  </span>
                </Link>
              </li>
              <li className="">
                <button
                  onClick={logout}
                  className="flex flex-row gap-1 rounded-md items-center hover-bg px-1.5 py-1 w-full"
                >
                  <MdOutlineLogout className="text-md text-gray-700" />
                  <span className="text-xs font-medium text-gray-700">
                    Sign Out
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
