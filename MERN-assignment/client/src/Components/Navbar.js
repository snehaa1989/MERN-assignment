import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Anchor from './Anchor.png'
const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(null);
  const [name, setName] = useState("");
    useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    const userName = localStorage.getItem("Name");
    if (loggedInUser) {
    setAuthenticated(loggedInUser);
    setName(userName);
    }
    }, []);
    const handleLogout = () => {
      localStorage.removeItem("authenticated");
      setAuthenticated(false);
    }

    if(authenticated) {
      return (    
        <nav className ="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className ="container-fluid">
          <a className ="navbar-brand" href="#">
          <img src={Anchor} width={180} height={30} alt=""></img>
          </a>
          <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className ="navbar-toggler-icon"></span>
          </button>
          <div className ="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarSupportedContent">
            <ul className ="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                  <p className='nav-link-active' style={{color : "white", paddingTop : "8px"}}>Welcome {name}</p>
              </li>
              <li>
              <NavLink className ="nav-link active" aria-current="page" to ="/" onClick={handleLogout}>Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>              
      );
    };
  return (
    <>
      <nav className ="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className ="container-fluid">
        <a className ="navbar-brand" href="#">
          <img src={Anchor} height={30} width={180} alt=""></img>
          </a>
          <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className ="navbar-toggler-icon"></span>
          </button>
          <div className ="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarSupportedContent">
            <ul className ="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className ="nav-item">
                <NavLink className ="nav-link active" aria-current="page" to ="/">Home</NavLink>
              </li>
              <li className ="nav-item">
                <NavLink className ="nav-link" to ="/signup">Signup</NavLink>
              </li>
              <li className ="nav-item">
                <NavLink className ="nav-link" to ="/login">Login</NavLink>
              </li>
              <li className ="nav-item">
                <NavLink className ="nav-link" to ="/profile">Profile</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
