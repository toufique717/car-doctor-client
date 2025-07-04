import React, { useContext } from 'react';
import icon from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom';
import { Authcontext } from '../../provider/Authprovider';

const Header = () => {

  const {user,logout} = useContext(Authcontext);

  const handlelogout = () =>
  {
    logout()
    .then(() => {})
    .catch(error => console.log(error))
  }

    const link =
    <>
    
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
      

    {
      user?.email ? 
      
      <>

      <li><NavLink to="/bookings">Bookings</NavLink></li>

       <li onClick={handlelogout}><button>Logout</button></li>
      </> 
      : <li><NavLink to="/login">Login</NavLink></li>
    }
    <li><NavLink to="/signup">Signup</NavLink></li>
    
    </>

    
    return (
        <div>

            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {link}
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
   <img className='hidden md:block' src={icon} alt="Description of image" />




  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {link}
    </ul>
  </div>
  <div className="navbar-end">
    <a className=" btn btn-outline btn-warning ">Appointment</a>
  </div>
</div>
              
        </div>
    );
};

export default Header;