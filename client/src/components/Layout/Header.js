import React from 'react'
import {NavLink,Link} from 'react-router-dom';
import '../../../src/App.css'
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast'
const Header = () => {
  const [auth,setAuth]=useAuth();
  const handleLogout=()=>{
    setAuth({
      ...auth,
      user:null,
      token:''
    })

    localStorage.removeItem("auth");
    toast.success("Successfully Logged out")
  }
  if(auth?.user?.role===1){
    console.log("Admin")
  }else{
    console.log("User")
  }
  return (
    
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <div className="navbar-brand" >Employee Dashboard</div>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {!auth.user ? (
          <>
            <li className="nav-item">
          <NavLink to='/' className="nav-link" >Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/login' className="nav-link" >Login</NavLink>
        </li>
          </>
        ):(
          <>
          <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {auth?.user?.name}
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to={`/dashboard/${auth?.user?.role===1?"admin":"user"}`} className="dropdown-item" >Dashboard</NavLink></li>
            <li><NavLink onClick={handleLogout} to="/login" className="dropdown-item" >Logout</NavLink></li>
          </ul>
        </li>
            <li className="nav-item">
          
        </li>
          </>
        )}
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Header