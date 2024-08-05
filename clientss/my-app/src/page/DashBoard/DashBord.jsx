import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';



const DashBOrd = () => {

    // console.log(isadmin)
    

    const navs = <>
    
            
                    <li>
                        <NavLink to='/dashbord/adminhome'>
                  
                            Admin Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/dashbord/additem'>
                        
                            Add Items
                        </NavLink>
                    </li>
                
                    <li>
                        <NavLink to='/dashbord/manageItem'>
                         
                            Manage Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashbord/cart'>
                           
                            Manage Bookings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashbord/user'>
                          
                            All Users
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                   
                            Home
                        </NavLink>
                    </li>
           
       
                <>
                  

                    <li>
                        <NavLink to='/dashbord/history'>
                    
                            Payment History
                        </NavLink>
                    </li>




                    <li>
                        <NavLink to='/dashbord/cart'>
                          
                            Booking: 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'>
                       
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Contact'>
                         
                            Contact
                        </NavLink>
                    </li>
                </>
       


    
    </>
    return (
        <div className='flex p-10'>
   
            <div className='  w-64 min-h-screen bg-green-400 rounded-lg'>
                <ul className='menu  space-y-3'>
                    {navs}

                </ul>
            </div>

            <div className='flex-1 p-10'>
            

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBOrd;