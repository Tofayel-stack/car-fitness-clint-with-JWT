
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../Assets/mainLogo.jpg'
import { AuthContext } from '../../ContextApi/ContextApi';

const Header = () => {

  const {user,userLogOut} = useContext(AuthContext);
  // console.log(user);

  function handleLogOut(){

    const SingOutConfirm = window.confirm("Are u sure to SignOut")

    if(SingOutConfirm === true){
      userLogOut()
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
   
  }
 
    return (
    
                 <div className="navbar bg-slate-100 sticky top-0  z-40 shadow-lg shadow-slate-500/50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/services'>services</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/author'>Author section</Link></li>
            </ul>
          </div>
          <Link href='#' className="btn btn-ghost normal-case text-xl overflow-hidden"><img className='w-20 rounded-full' src={mainLogo} alt="pic" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
                <li><Link to='/'>Home</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/services'>services</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/author'>Author section</Link></li>
              <li><Link to='/userOrder'>My order</Link></li>
              <li><b>user name : <span className='text-green-500'>{user?.email}</span></b> </li>
        
            
          </ul>
        </div>
        <div className="navbar-end">
          {
            user? <button className='btn' onClick={handleLogOut}>Sign out</button> :  <Link to='/signIn' className="btn">Get Appointment</Link>
          }
          
        </div>
      </div>
        
    )
};

export default Header;