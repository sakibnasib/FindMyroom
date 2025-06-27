import React from 'react';
import logoimg from '../assets/images (1).png'
import { NavLink } from 'react-router';
const Logo = () => {
    return (
       <div className="">
         <NavLink to='/' className="flex justify-center items-center font-extrabold ml-3 text-xl p-0">
          <span>
            <img className="rounded-full w-[50px] h-[50px]" src={logoimg} alt="" />
          </span>{" "}
          FindMyRoom
        </NavLink>
       </div>
    );
};

export default Logo;