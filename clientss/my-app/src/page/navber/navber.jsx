
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../../provider/Provider';
const Navbar = () => {
  const {user,logout} = useContext(AuthContext)
  const navigate = useNavigate()

  const logouts = ()=>{
    logout()
    navigate('/login')


  }

  return(
    <div>
      <div className="navbar bg-base-100">
  <div className="flex-1">
   <Link to={'/'}>
   <a className="btn btn-ghost text-xl">Booking-App</a>
   </Link>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
     
      
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://c8.alamy.com/comp/TC2FPE/young-man-avatar-cartoon-character-profile-picture-TC2FPE.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
         <Link to={'/dashbord'}>
         DashBoad
         </Link>
        </li>
        {user ? (
  <>
    <span className="text-sm mr-1"></span>
    <button onClick={logouts} className="btn ">
      Logout
    </button>
  </>
) : (
  <Link to="/login">
    <button className="btn">LOGIN</button>
  </Link>
)}     


      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar;
  



