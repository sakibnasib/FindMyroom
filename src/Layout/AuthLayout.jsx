import React from 'react';
import Logo from '../Component/Logo';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div style={{
    backgroundImage:
      "url(https://i.ibb.co/XrjMnbby/pexels-elijahsad-3473569.jpg)",
  }}>
            <div className=" text-white mb-2"><Logo/></div>
            <div className="pb-5">
                <Outlet/>
            </div>
        </div>
    );
};

export default AuthLayout;