import React from "react";
import { Link, NavLink } from "react-router";
import icon from '../assets/images (1).png'
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
             <NavLink to='/'
            className={({ isActive }) => (isActive ? "text-indigo-600 font-semibold" : "")}
          >
            Home
          </NavLink>
          <NavLink
           className={({ isActive }) => (isActive ? "text-indigo-600 font-semibold" : "")}
          >Add to Find Roommate</NavLink>
          <NavLink
           className={({ isActive }) => (isActive ? "text-indigo-600 font-semibold" : "")}
          >Browse Listing</NavLink>
          <NavLink
           className={({ isActive }) => (isActive ? "text-indigo-600 font-semibold" : "")}
          >My Listings</NavLink>
          </ul>
        </div>
        <a className="flex justify-center items-center font-extrabold text-xl p-0"><span><img className="rounded-full w-[50px] h-[50px]" src={icon} alt="" /></span> FindMyRoom</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <NavLink to='/'
            className={({ isActive }) => (isActive ? "text-indigo-600 font-semibold" : "")}
          >
            Home
          </NavLink>
          <NavLink to='/addRoommate'
           className={({ isActive }) => (isActive ? "text-indigo-600 font-semibold" : "")}
          >Add to Find Roommate</NavLink>
          <NavLink
           className={({ isActive }) => (isActive ? "text-indigo-600 font-semibold" : "")}
          >Browse Listing</NavLink>
          <NavLink
           className={({ isActive }) => (isActive ? "text-indigo-600 font-semibold" : "")}
          >My Listings</NavLink>
        </ul>
      </div>
      <div className="navbar-end space-y-1">
        <Link to='/login'>Login</Link>
<Link to='/register'>Register</Link>
        
      </div>
    </div>
  );
};

export default Navbar;
