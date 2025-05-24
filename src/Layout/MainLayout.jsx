import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Component/Footer';
import Loding from '../Component/Loding';

const MainLayout = () => {
    const {state}=useNavigation();
    return (
        <div>
           <Navbar></Navbar>
           <div className="min-h-[calc(100vh-218px)]">
  {state === "loding" ? <Loding></Loding>:<Outlet></Outlet>} 
           </div>
          
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;