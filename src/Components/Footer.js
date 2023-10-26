import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid"
        id="footer"
        style={{ background: "#EAEAFD" }}
      >
        <div className="row pt-4 ">
          <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 d-flex flex-column align-items-center pb-5">
           <Link to="/">
           <img
              className="img-fluid mt-5 "
              width={"250px"}
              src="/footer.png"
              alt=""
            />
            </Link>
          </div>
          <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 mt-5 d-flex flex-column justify-content-center pb-4" >
            <p 
              style={{
                color: "#000",
                fontFamily: "'Open Sans', 'sans-serif'",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                textAlign:"center"
              }}
            >
              Subscribe to our news letter
            </p>
            <div className="d-flex ">
              <input
                type="email"
                style={{
                  borderRadius: "5px",
                  background: "#FFF",
                  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                  color: "rgba(0, 0, 0, 0.50)",
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "9px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
                placeholder="Enter your Email"
              />
              <button
              
                type="submit"
                style={{
                  backgroundColor: "#1E81C4",
                  color: "#FFF",
                  textAlign: "center",
                  


                  /* Nav items */
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "17px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                  border: "none",
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  paddingLeft: "20px",
                  paddingRight:"20px"
                }}
              >
                SUBSCRIBE
              </button>
            </div>
            <div className="d-flex social-media-icons align-items-center justify-content-center  mt-4" >
              <div className="d-flex social-media-icons ">
                <a href="/" className="social-icon ">
                  <i className="fa fa-facebook" style={{ color: "black" }}></i>
                </a>
                <a href="/" className="social-icon ml-4">
                  <i className="fa fa-twitter" style={{ color: "black" }}></i>
                </a>
                
                <a href="/" className="social-icon ml-4">
                  <i className="fa fa-linkedin" style={{ color: "black" }}></i>
                </a>
                <a href="/" className="social-icon ml-4">
                  <i className="fa fa-instagram" style={{ color: "black" }}></i>
                </a>
              </div>
            </div>
          </div>
          <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12  d-flex  justify-content-center align-items-center" style={{marginTop:"-20px"}}>
            <div className="col-lg-3 col-md-3 col-6 footer_links ml-lg-5 ml-md-5">
              <Link to="/faq">
                {" "}
                <li style={{ listStyle: "none" }}>FAQs</li>
              </Link>
              <Link to="/about">
                {" "}
                <li style={{ listStyle: "none" }}>About</li>
              </Link>
              <Link to="/donate">
                <li style={{ listStyle: "none" }}>Donate</li>
              </Link>
            </div>
            <div className="col-lg-9 col-md-9 col-6 footer_links">
              <Link to="/feedback">
                <li style={{ listStyle: "none" }}>Feedback</li>
              </Link>
              <Link to="/terms_of_services">
                <li style={{ listStyle: "none" }}>Terms of Services</li>
              </Link>
              <Link to="/privacy_policy">
                <li style={{ listStyle: "none" }}>Privacy Policy</li>
              </Link>
            </div>
          </div>
        </div>
        <div className="row" >
          <div className="col-12 mt-lg-0 mt-md-1 mt-2">
          <p className="copyright" style={{
            color: "rgba(0, 0, 0, 0.50)",
            fontFamily: "Open Sans",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            textAlign:"center"
            
          }}>Copyright © 2023, ManorLane, LLC</p>

          </div>
          
        </div>
      </div>
    </>
  );
};

export default Footer;
