import React from 'react'
import {Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();

    function handleLogout() {
        // Clear the token from localStorage
        localStorage.removeItem("token");
        alert("Log out successfully")
        navigate('/login')

    }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to="/">Manor</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link class="nav-link" to="/">Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About</Link>
      </li>
     
      
    </ul>
    {!localStorage.getItem("token") ? (
        <>
          <Link to="/login">
            <button className="btn btn-success mx-1">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-warning mx-1">Signup</button>
          </Link>
        </>
      ) : (
        <button
          className="btn btn-primary mx-1"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}

  </div>
</nav>
  )
}

export default Navbar
