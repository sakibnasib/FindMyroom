import React from 'react';
import Navbar from '../Component/Shared/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Component/Shared/Footer';
import Loding from '../Component/Shared/Loding';

const MainLayout = () => {
    const {state}=useNavigation();
    return (
        <div>
           <Navbar></Navbar>
           <div className="min-h-[calc(100vh-218px)]">
  {state === "loading" ? <Loding></Loding>:<Outlet></Outlet>} 
           </div>
          
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;