import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navber from '../page/navber/navber'


import Footer from '../page/footer/footer';




const Layout = () => {



  return (
    <div>



      

      <Outlet />

   {/* <Footer></Footer> */}
     
    </div>
  );
}

export default Layout;
