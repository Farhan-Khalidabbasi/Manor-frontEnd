import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import video from "../img/Group 36617.png";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const { userId, token } = useParams();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  let navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/user/reset_pass/${userId}/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Password reset successful. You can now log in with your new password.');
        navigate("/login")
        
      } else {
        alert(data.error || 'Password reset failed.');
      }
    } catch (error) {
      alert('An error occurred while resetting the password.');
    }
  };

  return (
    <>
    <div className="row  " style={{ width: "100%" }} id="login_row">
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center align-items-center"
          style={{ background: "#5858FA", height: "650px" }}
        >
          <div>
            <Link to="/">
            <img src="/chello.png" width={"250px"} alt="chello" /></Link>
          </div>
          <div style={{ marginTop: "-80px", color: "white" }}>
            <h3>Creator+Fans= Manor</h3>
            <p style={{ textAlign: "center" }}>#LetsGO</p>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
          <div
            className="login_form ml-lg-5 mr-lg-5 ml-md-5 mr-md-5 rounded ml-5 "
            style={{ marginTop: "150px" }}
          >
            <h4 style={{ 
              color:"#1E81C4",
              fontFamily: "'Open Sans', 'sans-serif'",
              fontSize: "26px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal"}}>
            Reset Password<br />
              <br />
            </h4>
            <form onSubmit={handlePasswordReset}>
              <div className="form-group mr-4">
                <label style={{
                  color: "#7B7B7B",
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal"
                }} htmlFor="email">
                New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
            required
                  id="password"
                  name="password"
                  style={{ 
                    borderRadius: "4px",
                    border: "1px solid #E4E4E4",
                    background: "#F1F1F1"
                  }}
                />
              </div>
              <div className="form-group mr-4">
                <label id="label" htmlFor="email">
                Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            
                  id="cpassword"
                  name="cpassword"
                  style={{ 
                    borderRadius: "4px",
                    border: "1px solid #E4E4E4",
                    background: "#F1F1F1"
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn"
                style={{borderRadius: "23px",background: "var(--Manor-Blue-xx, #1E81C4)",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "'Open Sans', 'sans-serif'",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
      }}
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="row " style={{ marginTop: "80px" }}>
        <div className="col-lg-3 col-sm-12 col-md-3 col-xs-12"></div>
        <div className="col-lg-8 col-sm-12 col-md-8 col-xs-12">
          <img src={video} alt="manor" width={"100%"} />
        </div>
        <div className="col-lg-1 col-sm-12 col-md-1 col-xs-12"></div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default PasswordReset;
