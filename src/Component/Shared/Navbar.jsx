import React, { use, } from "react";
import { Link, NavLink} from "react-router";
import { AuthContex } from "../../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";

import Logouts from "../../Component/Logouts";
import Logo from "../Logo";

const Navbar = () => {
  const { user } = use(AuthContex);
  return (
    <div className="navbar bg-base-100  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-violet-600 underline font-semibold" : ""
              }
            >
              Home
            </NavLink>
             <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-violet-600 underline font-semibold" : ""
              }
            >
             AbotUs
            </NavLink>
             <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive ? "text-violet-600 underline font-semibold" : ""
              }
            >
            ContactUs
            </NavLink>
             {user &&  <NavLink
              to="/das"
              className={({ isActive }) =>
                isActive ? "text-blue-500 underline font-semibold" : ""
              }
            >
           Dashboard
            </NavLink>}
          </ul>
        </div>
       <p><Logo/></p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline font-semibold" : ""
            }
          >
            Home
          </NavLink>
          
           <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-500 underline font-semibold" : ""
              }
            >
             AbotUs
            </NavLink>
             <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive ? "text-violet-600 underline font-semibold" : ""
              }
            >
            ContactUs
            </NavLink>
            {user &&  <NavLink
              to="/das"
              className={({ isActive }) =>
                isActive ? "text-blue-500 underline font-semibold" : ""
              }
            >
           Dashboard
            </NavLink>}
        </ul>
      </div>
      <div className="navbar-end space-y-1">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar "
              >
                <div className="w-10 rounded-full">
                  {/* <img alt="" src={user.photoURL} /> */}
                  <p id="my-anchor-element">
                    {" "}
                    <img alt="" src={user.photoURL} />
                  </p>
                  <Tooltip
                    anchorSelect="#my-anchor-element"
                    content={user?.displayName}
                    place="left"
                  />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content ">
                <li className="font-medium btn btn-soft btn-primar rounded-full">
                  <Logouts/>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="space-x-2 flex justify-items-center">
              <Link className="btn" to="/auth/login">Login</Link>
              <Link className="btn" to="/auth/register">Register</Link>
            </div>
          </>
        )}
{/* button dark */}
        {/* <DarkMod/> */}
      </div>
    </div>
  );
};

export default Navbar;
