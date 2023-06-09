import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Nav = () => {

	    //!  Current User
      const { user, logOut} = useContext(AuthContext)


  console.log(user);








    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
     
    </div>
    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Batch-7</Link>
  </div>




  
  {/* <div className="navbar-end">
    <Link to={'/login'} className="btn mx-5">Login</Link>
    <Link to={'/signup'} className="btn mx-5">Signup</Link>
  </div> */}








  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         {
          user?
          <img alt='img' src={user?.photoURL} />
          :
          <img alt='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV3Vh51cuPQh3Z1Nl1nAWegvzFsteeMfNdXA&usqp=CAU" />
         }
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a href='#h' className="justify-between">
            {user?.displayName}
            <span className="badge">{user?.displayName}</span>
          </a>
        </li>
        {
          user?.uid?
          <li><Link to='' onClick={logOut()}>Logout</Link></li>
          :
          <>
          <li><Link to={'/login'} className="">Login</Link></li>
          <li><Link to={'/signup'} className="">Signup</Link></li>
          </>
        }
      </ul>
    </div>


    

</div>
        </div>
    );
};

export default Nav;