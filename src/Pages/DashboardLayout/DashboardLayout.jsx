import React, { useState } from "react";
import {  NavLink, Outlet } from "react-router";
import { Menu, X } from "lucide-react";
import Logo from "../../Component/Logo";
import Logouts from "../../Component/Logouts";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Navbar */}
      <div className="bg-gray-800 text-blacke flex justify-between items-center px-4 py-3 md:hidden">
       <div >
    <p className="text-xl font-bold"><Logo/> </p>
       </div>
        
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-base-300 text-black p-5 space-y-4 absolute md:relative z-50 md:z-auto`}
      >
        <ul className="flex flex-col space-y-3">
          <li>
            <Logo/>
          </li>
          <NavLink
            to="/das"
            end
             className={({ isActive }) =>
                isActive ? "text-blue-500 underline font-semibold" : " "
              }
            onClick={() => setIsOpen(false)}
          >
        🏠 Home
          </NavLink>
          <NavLink
            to="/das/addRoommate"
             className={({ isActive }) =>
                isActive ? "text-blue-500 underline font-semibold" : ""
              }
            onClick={() => setIsOpen(false)}
          >
            ➕ Add Roommate
          </NavLink>
          <NavLink
            to="/das/browseListing"
           className={({ isActive }) =>
                isActive ? "text-blue-500 underline font-semibold" : ""
              }
            onClick={() => setIsOpen(false)}
          >
            📃 Browse Listings
          </NavLink>
          <NavLink
            to="/das/my-listings"
           className={({ isActive }) =>
                isActive ? "text-blue-500 underline font-semibold" : ""
              }
            onClick={() => setIsOpen(false)}
          >
            🗂 My Listings 
          </NavLink>
 <NavLink
            to="/das/myPofile"
            className={({ isActive }) =>
                isActive ? "text-blue-500 underline font-semibold" : ""
              }
            onClick={() => setIsOpen(false)}
          >
            🙍‍♂️ My Profile
          </NavLink>
         
          <Logouts/>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto mt-14 md:mt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
