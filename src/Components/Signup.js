import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Signup() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    fname: "",
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const responseFacebook = (response) => {
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cpassword) {
      alert("Password fields must be equal.");
      return;
    }
    const response = await fetch("http://localhost:5000/api/user/create_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      alert("Account created Successfully");

      navigate("/login");
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
          className="col-lg-7 col-md-7 col-sm-12 col-xs-12  d-flex flex-column align-items-center "
          style={{ width: "100%" }}
        >
          <div className="mt-lg-5" >
            <a className="nav-link ml-lg-4 ml-md-4" href="/"> <img src="/footer.png" className="img-fluid" style={{ width: "350px",cursor:"pointer",marginTop:"30px" }} alt=""/></a>
          </div>
          <div className="instructions ml-lg-5  mr-lg-5 ml-md-5 mr-md-5 ml-1 mr-1">
            <div className="ml-5 mr-5 mt-5 mb-5">
              <h6 style={{ fontWeight: "bold", paddingTop: "10px" }}>
                If you have an account:
              </h6>
              <li style={{ fontSize: "16px", listStyle: "none" }}>
                <img src="/si_Check_circle.png" width={"16px"} alt="" /> Track
                and view your Reviews
              </li>
              <li style={{ fontSize: "16px", listStyle: "none" }}>
                <img src="/si_Check_circle.png" width={"16px"} alt="" /> Comment
                and Like other users’ Reviews
              </li>
              <li style={{ fontSize: "16px", listStyle: "none" }}>
                <img src="/si_Check_circle.png" width={"16px"} alt="" />{" "}
                Bookmark Reviews and Resources
              </li>
              <li style={{ fontSize: "16px", listStyle: "none" }}>
                <img src="/si_Check_circle.png" width={"16px"} alt="" /> Flag
                Reviews
              </li>
              <li style={{ fontSize: "16px", listStyle: "none" }}>
                <img src="/si_Check_circle.png" width={"16px"} alt="" /> Join
                public Communities
              </li>
              <li style={{ fontSize: "16px", listStyle: "none" }}>
                <img src="/si_Check_circle.png" width={"16px"} alt="" /> Create
                and join private Communities
              </li>
              <li style={{ fontSize: "16px", listStyle: "none" }}>
                <img src="/si_Check_circle.png" width={"16px"} alt="" /> Send
                and Receive Messages
              </li>
              <br />
              Accounts are always free. Always confidential. <br />
              <br />
              <h6 style={{ fontWeight: "bold" }}>
                No account? Still access these features:
              </h6>
              <li style={{ fontSize: "16px", listStyle: "none" }}>
                <img src="/si_Check_circle2.png" width={"16px"} alt="" /> Write
                and search Reviews
              </li>
              <li style={{ fontSize: "16px", listStyle: "none" }}>
                <img src="/si_Check_circle2.png" width={"16px"} alt="" />{" "}
                Resource Blog
              </li>
              <li style={{ fontSize: "16px", listStyle: "none" }}>
                <img src="/si_Check_circle2.png" width={"16px"} alt="" /> Browse
                public Communities
              </li>
            </div>
          </div>
          <br /><br />
          <Link to="/">
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url('/signup_bg.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: "0.2",
            }}
          />
          </Link>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <div className="signup_form ml-lg-5 mr-lg-5 ml-md-5 mr-md-5  p-4 rounded">
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
                Sign Up
              </h4>
              <br />
              <div className="form-group">
                <label htmlFor="name" style={{
                  color: "#7B7B7B",
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal"
                }}>Full Name(Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  id="fname"
                  value={credentials.fname}
                  onChange={onChange}
                  name="fname"
                  style={{ 
                    borderRadius: "4px",
                    border: "1px solid #E4E4E4",
                    background: "#F1F1F1"
                  }}                />
              </div>
              <div className="form-group">
                <label htmlFor="name" style={{
                  color: "#7B7B7B",
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal"}}>Username (this will be displayed publicly)</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  id="name"
                  value={credentials.name}
                  onChange={onChange}
                  name="name"
                  style={{ 
                    borderRadius: "4px",
                    border: "1px solid #E4E4E4",
                    background: "#F1F1F1"
                  }}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" style={{
                  color: "#7B7B7B",
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal"}}>Email (emails will remain anonymous) </label>
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
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1" style={{
                  color: "#7B7B7B",
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal"}}>Password</label>
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
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword2" style={{
                  color: "#7B7B7B",
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal"}}>Confirm Password</label>
                <input
                  type="password"
                  value={credentials.cpassword}
                  required
                  onChange={onChange}
                  name="cpassword"
                  className="form-control"
                  id="exampleInputPassword2"
                  style={{ 
                    borderRadius: "4px",
                    border: "1px solid #E4E4E4",
                    background: "#F1F1F1"
                  }}
                />
              </div>

              <button type="submit" style={{borderRadius: "23px",background: "var(--Manor-Blue-xx, #1E81C4)",
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: "'Open Sans', 'sans-serif'",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
            }}
             className="btn pl-4 pr-4">
                Sign Up
              </button>
            </form>
            <br />

            <div className=" pt-3">
              <small className="text-muted">
                <p STYLE={{
                  color: "#000",
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "21px",
                }}>
                  By signing up, you agree to our
                  <Link to="/terms-of-service" style={{
                    color: "#5858FA",
                    fontFamily: "'Open Sans', 'sans-serif'",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textDecoration: "underline"
                  }}> Terms of Service</Link> and
                  <Link to="/privacy-policy" 
                  style={{
                    color: "#5858FA",
                    fontFamily: "'Open Sans', 'sans-serif'",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "21px",
                    textDecoration: "underline"
                  }}> Privacy Policy</Link> and confirm that
                  you are at least 18 years old.
                </p>
                Already have an account?
                <Link className="ml-2"  to="/login" style={{
                  color:" var(--Manor-Blue-xx, #1E81C4)",
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHheight: "normal",
                }}>
                  Log In
                </Link>
              </small>
              <br />
              <hr />
              <p>or</p>
              <h6 style={{
                color: "#595959",
                fontFamily: "'Open Sans', 'sans-serif'",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal"
              }}>Sign Up with</h6>
              <br />
              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12">
                <div className="fb_btn" id="facebook-button">
                  <FacebookLogin
                    appId="1049550859826712"
                    fields="name,email,picture"
                    scope="email"
                    callback={responseFacebook}
                    textButton="Sign Up With Facebook"
                    buttonStyle={{
                      fontSize: "10px",
                    }}
                  />
                </div>
              </div>

              <br />

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-9">
                <GoogleOAuthProvider clientId="102818848537-ge0s7qpe3cb8219ik61hls07qd2p1tsu.apps.googleusercontent.com">
                  <GoogleLogin
                    buttonText="google"
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
                    style={{
                      fontSize: "16px", // Change the font size
                      color: "green", // Change the text color
                      backgroundColor: "yellow", // Change the background color
                    }}
                  />
                </GoogleOAuthProvider>
              </div>

              
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  );
}

export default Signup;
