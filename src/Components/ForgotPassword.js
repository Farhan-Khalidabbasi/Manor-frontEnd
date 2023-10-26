import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Send a request to your server to initiate the password reset process
    try {
      const response = await fetch(
        "http://localhost:5000/api/user/forget_pass",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(
          "An email has been sent to your email address with reset password instructions"
        );
      } else {
        alert(data.error || "Failed to send reset password request");
      }
    } catch (error) {
      alert("An error occurred while sending the request");
    }
  };

  return (
    <>
      <div className="row  ml-2" style={{ width: "100%" }} id="login_row">
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
            className="login_form p-4 ml-lg-5 mr-lg-5 ml-md-5 mr-md-5 rounded ml-2 "
            style={{ marginTop: "150px" }}
          >
            <h4 
            style={{ 
              color:"#1E81C4",
              fontFamily: "'Open Sans', 'sans-serif'",
              fontSize: "26px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal"}}>
              Forgot Password? <br />
              <br />
            </h4>
            <form onSubmit={handleResetPassword}>
              <div className="form-group mr-4">
                <label  style={{
                  color: "#7B7B7B",
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal"
                }} htmlFor="email">
                  Enter Your Email to Recover Password{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
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
                Recover Password
              </button>
            </form>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br />
      <br />
      <br />
      <br />
      
    </>
  );
};

export default ForgotPassword;
