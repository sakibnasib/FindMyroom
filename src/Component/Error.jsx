import React from 'react';
import Prror from '../assets/404.gif'
import { Link, useLocation } from 'react-router';
const Error = () => {
    const location=useLocation();
     const message=location?.pathname
     console.log(message)
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={Prror} className='' alt="" />
             <p className="text-red-600 font-bold text-[2.3rem]">
          {" "}
          we cannot fount this : <span>{message}</span>
        </p>
         <Link
          to="/"
          className="btn btn-wide bg-violet-600 text-white w-full rounded-3xl mt-2 "
        >
          Go Back Home
        </Link>
        </div>
    );
};

export default Error;