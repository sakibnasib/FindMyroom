import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import icon from '../assets/images (1).png'
import { AuthContex } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
  const {user,logOut}=use(AuthContex);
  const navigate = useNavigate();
  const handleLogOut=()=>{
logOut().then(() => {
  navigate('/')
  Swal.fire({
  position: "top-center",
  icon: "You Logged Out successfully",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
          })
          .catch((error) => {
            console.log(error);
          });
  }
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
            className={({ isActive }) => (isActive ? "text-orange-400 font-semibold" : "")}
          >
            Home
          </NavLink>
          <NavLink to='/addRoommate'
           className={({ isActive }) => (isActive ? "text-orange-400 font-semibold" : "")}
          >Add to Find Roommate</NavLink>
          <NavLink to='/browseListing'
           className={({ isActive }) => (isActive ? "text-orange-400 font-semibold" : "")}
          >Browse Listing</NavLink>
          <NavLink to='/myListings'
           className={({ isActive }) => (isActive ? "text-orange-400 font-semibold" : "")}
          >My Listings</NavLink>
          </ul>
        </div>
        <a className="flex justify-center items-center font-extrabold ml-3 text-xl p-0"><span><img className="rounded-full w-[50px] h-[50px]" src={icon} alt="" /></span> FindMyRoom</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <NavLink to='/'
            className={({ isActive }) => (isActive ? "text-orange-400 font-semibold" : "")}
          >
            Home
          </NavLink>
          <NavLink to='/addRoommate'
           className={({ isActive }) => (isActive ? "text-orange-400 font-semibold" : "")}
          >Add to Find Roommate</NavLink>
          <NavLink to='/browseListing'
           className={({ isActive }) => (isActive ? "text-orange-400 font-semibold" : "")}
          >Browse Listing</NavLink>
          <NavLink to='/myListings'
           className={({ isActive }) => (isActive ? "text-orange-400 font-semibold" : "")}
          >My Listings</NavLink>
        </ul>
      </div>
      <div className="navbar-end space-y-1">
    {
      user? 
      <>
       <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user?.displayName}
            >
              <div className="w-10 rounded-full" >
                <img alt="" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* <li>
                <p className="justify-between text-xs font-semibold">
                  {user && user.displayName}
                </p>
              </li> */}
              <li>
                <button
                  onClick={handleLogOut}
                  className=" mt-2 btn btn-outline btn-error"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
      </>
    
     : <>
   <div className="space-x-2">
     <Link to='/login'>Login</Link>
<Link to='/register'>Register</Link>
   </div>
    </>

    }
        
        
      </div>
    </div>
  );
};

export default Navbar;
