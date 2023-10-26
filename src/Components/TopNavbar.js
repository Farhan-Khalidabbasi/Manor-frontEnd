import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css"
const TopNavbar = () => {
  
  
  let navigate = useNavigate();
  function handleLogout() {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    navigate('/login')

}

  const location = useLocation(); 
  return (
   
    <>
    <nav className="navbar fixed-top  navbar-expand-lg navbar-light " style={{marginTop:"0px",backgroundColor:"white",paddingTop:"15px"}}>
      <Link className="navbar-brand" to="/">
        <img
          className="logoartboard-1-copy-3 ml-3"
          alt=""
          src="/manor_logo.png"
        />
      </Link>

      <button
        className="navbar-toggler mr-3"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav1"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{marginLeft:"0%",marginTop:"0%"}}

      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse mt-1" id="navbarNav1">
        <ul className="navbar-nav ml-auto  mr-3">
        
       
        <div id="google_translate_element" style={{backgroundColor:"black"}}></div>

            

        
        <li className={`nav-item ${location.pathname === "/communities" ? "active" : ""}`}>
            <Link className={`nav-link ${location.pathname === "/communities" ? "active" : ""}`} to="/communities" 
            >
              Communities
            </Link>
        </li>
        <li className={`nav-item ${location.pathname === "/learn" ? "active" : ""}`}>
            <Link className={`nav-link ${location.pathname === "/learn" ? "active" : ""}`} to="/learn">
              Learn
            </Link>
          </li>
        <li className={`nav-item ${location.pathname === "/faq" ? "active" : ""}`}>
            <Link className={`nav-link ${location.pathname === "/faq" ? "active" : ""}`} to="/faq">
              FAQ
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">
              About
            </Link>
          </li>
          {!localStorage.getItem("token") ?(
            <>
          <li className={`nav-item ${location.pathname === "/login" ? "active" : ""}`}>
            <Link className={`nav-link ${location.pathname === "/login" ? "active" : ""}`} to="/login">
              Login
            </Link>
            
          </li>
          <li className={`nav-item ${location.pathname === "/signup" ? "active" : ""}`}>
            <Link className={`nav-link ${location.pathname === "/signup" ? "active" : ""}`} to="/signup">
              Signup
            </Link>
          </li>
          
          </>
            ): (
              <>
              <li className={`nav-item ${location.pathname === "/my_notifications" ? "active" : ""}`}>
            <Link className={`nav-link ${location.pathname === "/my_notifications" ? "active" : ""}`} to="/my_notifications">
              <img src="/notify.png" alt="" />
            </Link>
          </li>
          <li className="nav-item">
          
          <p className="nav-link"  onClick={handleLogout}>
                Logout
          </p>
          </li>
          <li>
            <img
          className="top-banner-xx-item  mb-2 ml-3 mr-3"
          alt=""
          src="/group-37023.svg"/>
          </li>
        
          </>
          )}
          
        </ul>
      </div>
      
    </nav>
    <div className="container-fluid">
      <div className="row " style={{marginTop:"70px",marginBottom:"-10px"}}>
        <div className="col-12 mt-1">
        <img className="top-banner-xx-child img-fluid " style={{width:"100%"}} alt="" src="/line-51.svg" />

        </div>
      </div>

    </div>
    
   </>
  );
};

export default TopNavbar;
