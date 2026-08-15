import { useState } from "react"
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
    <button onClick={toggleDropdown} className="absolute top-2 right-5 inline-block text-left px-2 py-1 hover:cursor-pointer overflow-visible">
      <div className="flex flex-col gap-2 px-2 py-1.5 rounded-lg border-2 border-stone-100 bg-white">
        <div className="flex flex-col ">

          <div className="flex items-center gap-2">
            <div>
            <p className="font-sans antialiased text-xs font-medium text-current">
              {user.username}
            </p>
            </div>
            <img
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
            alt="avatar"
            className="inline-block object-cover object-center w-8 h-8 rounded-full border-2 border-primary"
            />
          </div>


          {isOpen && (
            <div className="origin-top right-0 rounded-sm w-full mt-3 duration-300">
              <ul className="flex gap-1 flex-col text-xs w-full">

                <li className=""><Link to="/user" className="flex flex-row gap-1 rounded-md items-center hover-bg px-1.5 py-1"><FaUser className="text-md text-gray-700"/><span className="text-xs font-medium text-gray-700">Profile</span></Link></li>
                <li className=""><Link to="/user" className="flex flex-row gap-1 rounded-md items-center hover-bg px-1.5 py-1"><FaCreditCard className="text-md text-gray-700"/><span className="text-xs font-medium text-gray-700">Subscription</span></Link></li>
                <li className=""><Link to="/user" className="flex flex-row gap-1 rounded-md items-center hover-bg px-1.5 py-1"><IoIosSettings className="text-kg text-gray-700"/><span className="text-xs font-medium text-gray-700">Settings</span></Link></li>
                <li className=""><Link to="/user" className="flex flex-row gap-1 rounded-md items-center hover-bg px-1.5 py-1"><BiSolidError className="text-md text-gray-700"/><span className="text-xs font-medium text-gray-700">Suppport</span></Link></li>
                <li className=""><button onClick={logout} className="flex flex-row gap-1 rounded-md items-center hover-bg px-1.5 py-1 w-full"><MdOutlineLogout className="text-md text-gray-700"/><span className="text-xs font-medium text-gray-700">Sign Out</span></button></li>
              </ul>

            </div>
          )}
        </div>



      </div>
    </button>
  );
}
