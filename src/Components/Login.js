import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const responseFacebook = (response) => {
    console.log(response);
    if (response.error) {
      // Handle the error and show an alert
      console.error(response.error);
      alert("Login failed. Please try again.");
    } else {
      console.log(response);
      console.log(response.accessToken);
      localStorage.setItem("token", response.accessToken);

      // Redirect to '/about' with the response data as a URL parameter
      navigate(
        "/about?" +
          new URLSearchParams({
            facebook_result: JSON.stringify(response),
          }).toString()
      );

      alert("Logged in successfully");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      alert("Logged in Successfully");
      localStorage.setItem("token", json.token);
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="row ml-1 mr-1" style={{ width: "100%" }} id="login_row">
        <div
          className="col-lg-7 col-md-7 col-sm-12 col-xs-12 d-flex flex-column align-items-center "
          style={{ position: "relative"}}
        >
          <div style={{ position: "relative" }}>
            <img className="img-fluid" src="/footer.png" style={{  width: "400px",paddingBottom:"140px",paddingTop:"80px",marginTop:"50px" }}
              alt=""
            />
           
          </div>
          <Link to="/">
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url('/login_bg.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: "0.2",
            }}
          />
           </Link>
        </div>
       
        <div className="col-lg-5  col-md-5 col-sm-12 col-xs-12">
          <div className="login_form ml-lg-5 mr-lg-5 ml-md-5 mr-md-5   p-4 rounded">
            <br />
            <form onSubmit={handleSubmit}>
              <h4 style={{ 
                color:"#1E81C4",
                fontFamily: "'Open Sans', 'sans-serif'",
                fontSize: "26px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}>
                Login
              </h4>
              <br />

              <div className="form-group">
                <label htmlFor="exampleInputEmail1"
                style={{
                  color: "#7B7B7B",
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal"
                }}>Email </label>
                <input
                  type="email"
                  className="form-control"
                  value={credentials.email}
                  required
                  onChange={onChange}
                  id="exampleInputEmail1"
                  name="email"
                  aria-describedby="emailHelp"
                  style={{ 
                    borderRadius: "4px",
                    border: "1px solid #E4E4E4",
                    background: "#F1F1F1"
                  }}                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1"
                style={{
                  color: "#7B7B7B",
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal"
                }}>Password</label>
                <input
                  type="password"
                  value={credentials.password}
                  required
                  onChange={onChange}
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  style={{ 
                    borderRadius: "4px",
                    border: "1px solid #E4E4E4",
                    background: "#F1F1F1"
                  }}                />
              </div>
              <div className="d-flex">
              <div className="col-8" style={{marginLeft:"-15px"}} >

              <button type="submit" className="btn btn-primary pl-4 pr-4"
              style={{borderRadius: "23px",background: "var(--Manor-Blue-xx, #1E81C4)",
              color: "#FFF",
              textAlign: "center",
              fontFamily: "'Open Sans', 'sans-serif'",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
    }}>
                Login
              </button>
              </div>
              <div className="col-6 ml-lg-3 " >
              <Link to="/forgot_pass" id="forgot_pass_btn">
                {" "}
                Forgot Password?
              </Link>
              </div>
              </div>
            </form>
            <br />

            <div class=" pt-3">
              <small class="text-muted">
                Don't have an Account?
                <Link class="ml-2"  to="/signup" style={{
                  color:" var(--Manor-Blue-xx, #1E81C4)",
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHheight: "normal",
                }}>
                  Sign Up
                </Link>
              </small>
              <br />
              <hr />
              <p>or</p>
              <h6>Log In with</h6>
              <br />
              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 col-10">
                <div className="fb_btn" id="facebook-button">
                  <FacebookLogin
                    appId="1049550859826712"
                    fields="name,email,picture"
                    scope="email"
                    callback={responseFacebook}
                    textButton="SignIn With Facebook"
                    buttonStyle={{
                      fontSize: "11px",
                    }}
                  />
                </div>
              </div>

              <br />
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-10">
                <GoogleOAuthProvider clientId="102818848537-ge0s7qpe3cb8219ik61hls07qd2p1tsu.apps.googleusercontent.com">
                  <GoogleLogin
                    autoLoad={false}
                    onSuccess={(credentialResponse) => {
                      var decoded = jwt_decode(credentialResponse.credential);
                      console.log(decoded);

                      localStorage.setItem("token", decoded.sub);

                      // Redirect to '/about' with the credentialResponse data as a URL parameter
                      navigate(
                        "/about?" +
                          new URLSearchParams({
                            google_result: JSON.stringify(decoded),
                          }).toString()
                      );

                      alert("Login successfully!!");
                    }}
                    onError={() => {
                      alert("Login failed! Try again");
                      console.log("Login Failed");
                    }}
                    buttonText="Login with google" // Change the button text
                    style={{
                      fontSize: "16px", // Change the font size
                      color: "green", // Change the text color
                      backgroundColor: "yellow", // Change the background color
                    }}
                  />
                </GoogleOAuthProvider>
              </div>

              <br />
            </div>
          </div>
        </div>
      </div>
     
  
      
    </>
  );
}

export default Login;
