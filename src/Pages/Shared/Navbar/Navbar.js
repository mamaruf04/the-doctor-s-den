import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)
  const handleSignOut = () => {
    logOut()
    .then(res => {
      toast.success('SignOut successful!')
    })
    .catch(err => toast.error('Something went wrong! please try again.'))
  }

  const navItems = (
    <React.Fragment >
      <li className='font-medium'><Link to={"/"}>Home</Link></li>
      <li className='font-medium'><Link to={"/appointment"}>Appointment</Link></li>
      <li className='font-medium'><Link to={"/about"}>About</Link></li>
      {/* <li className='font-medium'><Link to={"/review"}>Review</Link></li> */}
      <li className='font-medium'><Link to={"/dashboard"}>Dashboard</Link></li>
      { user?.uid ?
       <> 
          <li className='font-medium'><button onClick={handleSignOut}>SignOut</button></li>
       </>
        : 
       <li className='font-medium'><Link to={"/login"}>Login</Link></li>
      }
    </React.Fragment>
  );

    return (
      <div className="navbar bg-base-100 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">Doctor's Den</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
      </div>
    );
};

export default Navbar;