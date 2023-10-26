import React from "react";
import TopBar from "./TopNavbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <TopBar />
      <div style={{width:"100%"}}>
        <div
          className="container-fluid"
          style={{ backgroundImage: `url('/Vector.png')`,backgroundPosition :"top",backgroundSize : "100% 125%" }}
        >
          <div>
            <div className="row ml-3 mt-3 mr-3">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 mt-3">
                <h2 id="empowering">Empowering</h2>
                <h2 id="residents">Renters & Residents</h2>
                <p id="info_text">
                  We are a tenant-focused portal where <mark>reviews</mark>, <mark>community</mark>, and <mark>learning</mark>  band together for the greater good.
                </p>
                <a href="#search_reviews_div_home">
                  <div className="rectangle-parent mt-4">
                    <button
                      className="btn"
                      style={{
                        backgroundColor: " #1E81C4",
                        borderRadius: "23px",
                        color: "white",
                        paddingLeft: "18px",
                        paddingRight: "18px",
                        marginLeft: "10px",
                      }}
                    >
                      Review and Search*
                    </button>
                    <br />
                    <br />
                  </div>
                </a>
                <p
                  style={{
                    color: "#000",
                    fontFamily: "'Open Sans', 'sans-serif'",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  *No account required and completely anonymous.
                </p>{" "}
                
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  col-12 align-items-center justify-content-center">
                <img
                  src="/g.gif"
                  className="img"
                  style={{ marginTop: "-40px", marginLeft: "-35px",width:"100%" }}
                  alt=""
                />{" "}
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{ backgroundColor: "#DFFBED" }}>
          <div className="row  ml-3 mr-3">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 mt-2">
              <img
                src="/community.gif"
                className="img-fluid mt-3 "
                width={"90%"}
                alt=""
              />{" "}
              <br /> <br />
              <br />
            </div>
            <div className="col-lg-1 col-md-1 col-12"></div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12 mt-2">
              <h2 id="community_support" className="mt-5">
                Community & Support
              </h2>
              <p id="community_support_text">
                A <mark>social space*</mark> where Renters, HOA members and other residents
                gather for connection, mutual support and camaraderie.
              </p>

              <br />
              <p id="community_support_text2">
                *An account is required to participate in private Communities.
                No account required for public Communities. All free and
                confidential, of course.
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>

        <div
          className="container-fluid"
          style={{ backgroundImage: `url('/Vector.png')`,backgroundPosition :"top",backgroundSize : "100% 125%" ,marginBottom:"-30px"  }}
        >
          <div className="row ml-3 mr-3">
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12 mt-lg-4 mt-md-0 mt-4">
              <h2 id="empowering" style={{ marginTop: "140px" }}>
                Stay Informed
              </h2>
              <p id="info_text">
                Explore and share <mark>resources</mark> and guides for tenants’ and
                residents’ rights and advocacy.
              </p>
              <Link to="/learn">
                <button
                  className="btn mt-lg-0 mt-md-0 mt-2  mb-lg-0 mb-md-0 "
                  style={{
                    backgroundColor: " #9A3596",
                    borderRadius: "23px",
                    color: "white",
                    paddingLeft: "25px",
                    paddingRight: "25px",
                    marginLeft: "10px",
                  }}
                >
                  Learning Blog
                </button>
              </Link>
            </div>
            <div className="col-lg-1 col-md-1 col-12"></div>
            <div className="col-lg-6 mt-lg-0 mt-md-5 mt-5 col-md-6 col-sm-12 col-xs-12 col-12">
              <div className="">
                <img
                  src="/u.png"
                  className="img-fluid"
                  width={"700px"}
                  style={{ marginTop: "-100px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ backgroundColor: "#F5F5F5" }}>
          <div className="row  ml-5 mr-5" >
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 mt-5 mb-5 align-items-center justify-content-center">
              <img
                src="/score.gif"
                className="mt-5 mb-5"
                width={"100%"}
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 col-md-12 col-12"></div>
          </div>
        </div>
        <div className="container-fluid" id="search_reviews_div_home">
          <div className="row ml-lg-5 ml-md-5 ml-3 mr-3">
            <div className="col-12 mt-5">
              <h6 id="search_reviews_heading">Search or Review a Property</h6>{" "}
              <br />
            </div>
          </div>
          <div className="row ml-lg-5 ml-md-5 ml-3 mr-3">
            <div className="col-lg-3 col-md-3 col-sm-12 mr-lg-3 mr-md-3  col-xs-12 col-12 ">
              <div className="form-group">
                <label
                  htmlFor="address"
                  style={{
                    color: "var(--black-80, #333)",
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontweight: "400",
                    lineheight: "normal",
                  }}
                >
                  Address*{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  id="address"
                  name="address"
                  placeholder="Type in address of your residence"
                  style={{
                    borderRadius: "5px",
                    color: "rgba(0, 0, 0, 0.50)",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "12px",
                    fontstyle: "normal",
                    fontWeight: "400",
                    lineheight: "normal",
                    paddingLeft: "20px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    backgroundColor: "#FFFFFF",
                    border: "none",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 ml-lg-5  mr-lg-3 mr-md-3 ml-md-5 col-sm-12 col-xs-12 col-12">
              <div className="form-group">
                <label
                  htmlFor="city"
                  style={{
                    color: "var(--black-80, #333)",
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontweight: "400",
                    lineheight: "normal",
                  }}
                >
                  City*{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  id="city"
                  name="city"
                  placeholder="City"
                  style={{
                    borderRadius: "5px",
                    color: "rgba(0, 0, 0, 0.50)",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "12px",
                    fontstyle: "normal",
                    fontWeight: "400",
                    lineheight: "normal",
                    paddingLeft: "20px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    backgroundColor: "#FFFFFF",
                    border: "none",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-1 col-md-1 ml-lg-5 ml-md-5  mr-lg-5 mr-md-5 col-sm-6 col-xs-6 col-6">
              <div className="form-group">
                <label
                  htmlFor="state"
                  style={{
                    color: "var(--black-80, #333)",
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontweight: "400",
                    lineheight: "normal",
                  }}
                >
                  State*
                </label>
                <br />
                <select
                  className="state-select"
                  required
                  id="state"
                  name="state"
                  title="State"
                  style={{
                    borderRadius: "5px",
                    color: "rgba(0, 0, 0, 0.50)",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "12px",
                    fontstyle: "normal",
                    fontWeight: "400",
                    lineheight: "normal",
                    paddingLeft: "20px",
                    paddingTop: "12px",
                    paddingRight: "25px",
                    paddingBottom: "12px",
                    backgroundColor: "#FFFFFF",
                    border: "none",
                  }}
                >
                  <option value="" disabled selected>
                    Select State
                  </option>

                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                  <option value="state3">State 3</option>
                </select>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-xs-7 col-sm-7 col-7 ml-lg-5 ml-md-5  mr-lg-3 mr-md-3">
              <div className="form-group">
                <label
                  htmlFor="zip"
                  style={{
                    color: "var(--black-80, #333)",
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontweight: "400",
                    lineheight: "normal",
                  }}
                >
                  Zip*{" "}
                </label>
                <input
                  type="dropdown"
                  className="form-control"
                  required
                  id="zip"
                  name="zip"
                  placeholder="Zip Code"
                  style={{
                    borderRadius: "5px",
                    color: "rgba(0, 0, 0, 0.50)",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "12px",
                    fontstyle: "normal",
                    fontWeight: "400",
                    lineheight: "normal",
                    paddingLeft: "20px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    backgroundColor: "#FFFFFF",
                    border: "none",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row mt-2 ml-lg-5 ml-md-5 ml-3 mr-3">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-7 ">
              <div className="form-group">
                <label
                  htmlFor="management"
                  style={{
                    color: "var(--black-80, #333)",
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontweight: "400",
                    lineheight: "normal",
                  }}
                >
                  Management Type*
                </label>
                <br />
                <select
                  className="management-select"
                  required
                  id="management"
                  name="management"
                  title="management"
                  style={{
                    borderRadius: "5px",
                    color: "rgba(0, 0, 0, 0.50)",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "12px",
                    fontstyle: "normal",
                    fontWeight: "400",
                    lineheight: "normal",
                    paddingLeft: "20px",
                    paddingTop: "13px",
                    paddingRight: "64%",
                    paddingBottom: "12px",
                    backgroundColor: "#FFFFFF",
                    border: "none",
                  }}
                >
                  <option value="" disabled selected>
                    Select Management Type
                  </option>

                  <option value="management1">Management 1</option>
                  <option value="management2">Management 2</option>
                  <option value="management3">Management 3</option>
                </select>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 ml-lg-4 ml-md-4  col-sm-12 col-xs-12 col-12">
              <div className="form-group">
                <label
                  htmlFor="city"
                  style={{
                    color: "var(--black-80, #333)",
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontweight: "400",
                    lineheight: "normal",
                  }}
                >
                  Name of PMC or HOA*{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  id="city"
                  name="city"
                  placeholder="If PMC or HOA, type in name"
                  style={{
                    borderRadius: "5px",
                    color: "rgba(0, 0, 0, 0.50)",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "12px",
                    fontstyle: "normal",
                    fontWeight: "400",
                    lineheight: "normal",
                    paddingLeft: "20px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    backgroundColor: "#FFFFFF",
                    border: "none",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row mt-4  ml-lg-5 ml-md-5 ml-3 mr-3">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
              <p id="transparency_text">
                At last! Transparency and accountability to Property Managers,
                HOA’s and Landlords for all residents.
              </p>
            </div>
            <div className="col-5 d-flex">
              <div className="col-lg-3 mr-lg-5 mr-md-5 ml-lg-2 ml-md-2 col-md-3 col-sm-12 col-xs-12 col-sm-12 col-12 ">
                <button
                  className="btn pl-lg-5  pl-md-5 pr-lg-5 pr-md-5"
                  style={{
                    backgroundColor: "#FFF",
                    borderRadius: "50px",
                    color: "#000",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    border: "0.5px solid rgba(0, 0, 0, 0.50)",
                  }}
                >
                  Search
                </button>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-sm-12 col-12 ml-4 mb-5">
                <button
                  className="btn pl-lg-5  pl-md-5 pr-lg-5 pr-md-5"
                  style={{
                    backgroundColor: " var(--Manor-Blue-xx, #1E81C4)",
                    borderRadius: "50px",
                    color: "#FFF",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    marginLeft: "20px",
                  }}
                >
                  Review
                </button>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="row" style={{marginBottom:"-30px"}}>
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12"></div>
            <div
              className="col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12 ml-lg-0 ml-md-0 ml-4"
              style={{ marginTop: "-70px" }}
            >
              <p
                style={{
                  color: "#000",
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                Want to save and track your reviews?{" "}
                <Link to="/login">Login here</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ backgroundColor: "#DFFBED" }}>
          <div className="row  ml-3 mr-3" style={{ paddingTop: "15px" }}>
            <div className="col-lg-2 col-md-2 col-sm-12 colxs-12 col-12">
              <img src="/voice.png" width={"100%"} height={"300px"} alt="" />
            </div>
            <div
              className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12"
              style={{ textAlign: "center" }}
            >
              <h2 id="empowering" className="mt-5">
                Giving Tenants a Voice
              </h2>
              <p id="info_text">
                Our platform strives to make property owners accountable, and
                allow residents a safe place for open dialogue.
                <br /> <br />
                Renters, HOA members and all tenants should be able to share,
                protect and connect confidently and comfortably. <br /> 
                <br />
              </p>

              <br />
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12 colxs-12 col-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
