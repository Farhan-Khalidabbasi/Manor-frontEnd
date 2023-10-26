import React from "react";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    
        
          <div className="reviews-tab">
           <div className="row " >
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-4 mb-2">
                <div className="d-flex mb-3 ">
                <h6 className="my_reviews mr-1 mt-1">My Reviews</h6>
                </div>
                <p style={{
                  color: "#000",

                  fontFamily: "'Open Sans'",
                  fontSize: "17px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "normal",
                }}>This page is a collection of all your written Reviews and other users’ comments. You are free to create as many Reviews as you like, and of course, all are anonymous and confidential.
                <br /><br />
                To view other users’ saved Reviews visit your <Link to="/bookmarks"
                style={{
                  "color": "#1E81C4",

                    /* Body copy */
                    fontFamily: "'Open Sans', 'sans-serif'",
                    fontSize: "17px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                }}  
                
                > Bookmarks </Link>page.
                
                </p>
               
                
                <div className="review-box">
                  <div className="icon">
                    <img className="group-icon img-fluid mb-lg-0 mb-md-0 mb-4" alt="" src="/c1.png" />
                    <div className="heading_review">
                      
                      <p style={{
                        color: "#000",
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: "800",
                        lineHeight: "101.023%"
                        }}>
                          123 Main Street</p>
                      <p style={{marginTop:"-15px",
                     color: "#000",
                     fontFamily: "'Inter',sans-serif",
                     fontSize: "12px",
                     fontStyle: "normal",
                     fontWeight: "800",
                     lineHeight: "101.023%"
                     }}>
                      {`San Francisco, CA `}
                      </p>
                      <p style={{marginTop:"-15px",
                    color: "#000",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "101.023%"}}>{`Landlord `}</p>
                      <img
                        className="star-system-1 img-fluid"
                        alt=""
                        src="/star-system-1.svg"
                      />
                      <p style={{ fontSize: "10px" }}>
                        Avg, rating, Click address for more details
                      </p>
                    </div>
                    <img className="vector-icon5 ml-4 img-fluid" alt="" src="/vector5.svg" />
                  </div>
                  <h6 className="ml-4" style={{ padding: "10px",fontFamily: "'Open Sans', 'sans-serif'",fontSize:"14px",fontStyle:"normal",width:"90%"}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia officiis cumque illum consectetur distinctio odio
                    natus magni sed dolores ab perspiciatis, eveniet corporis nam
                    rem sint amet porro deleniti ut!
                  </h6>
                  
                  
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3 mb-2">
              <div className="review-box">
                  <div className="icon">
                    <img className="group-icon img-fluid mb-lg-0 mb-md-0 mb-4" alt="" src="/c1.png" />
                    <div className="heading_review">
                      
                      <p style={{
                        color: "#000",
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: "800",
                        lineHeight: "101.023%"
                        }}>
                          123 Main Street</p>
                      <p style={{marginTop:"-15px",
                     color: "#000",
                     fontFamily: "'Inter',sans-serif",
                     fontSize: "12px",
                     fontStyle: "normal",
                     fontWeight: "800",
                     lineHeight: "101.023%"
                     }}>
                      {`San Francisco, CA `}
                      </p>
                      <p style={{marginTop:"-15px",
                    color: "#000",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "101.023%"}}>{`Landlord `}</p>
                      <img
                        className="star-system-1 img-fluid"
                        alt=""
                        src="/star-system-1.svg"
                      />
                      <p style={{ fontSize: "10px" }}>
                        Avg, rating, Click address for more details
                      </p>
                    </div>
                    <img className="vector-icon5 ml-4 img-fluid" alt="" src="/vector5.svg" />
                  </div>
                  <h6 className="ml-4" style={{ padding: "10px",fontFamily: "'Open Sans', 'sans-serif'",fontSize:"14px",fontStyle:"normal",width:"90%"}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia officiis cumque illum consectetur distinctio odio
                    natus magni sed dolores ab perspiciatis, eveniet corporis nam
                    rem sint amet porro deleniti ut!
                  </h6>
                  
                  
                </div>
              </div>
          </div>
          <div className="row  " >
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  mt-3 mb-2">
              <div className="review-box">
                  <div className="icon">
                    <img className="group-icon img-fluid mb-lg-0 mb-md-0 mb-4" alt="" src="/hoa-icon-1.svg" />
                    <div className="heading_review">
                      
                      <p style={{
                        color: "#000",
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: "800",
                        lineHeight: "101.023%"
                        }}>
                          123 Main Street</p>
                      <p style={{marginTop:"-15px",
                     color: "#000",
                     fontFamily: "'Inter',sans-serif",
                     fontSize: "12px",
                     fontStyle: "normal",
                     fontWeight: "800",
                     lineHeight: "101.023%"
                     }}>
                      {`San Francisco, CA `}
                      </p>
                      <p style={{marginTop:"-15px",
                    color: "#000",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "101.023%"}}>{`Landlord `}</p>
                      <img
                        className="star-system-1 img-fluid"
                        alt=""
                        src="/star-system-1.svg"
                      />
                      <p style={{ fontSize: "10px" }}>
                        Avg, rating, Click address for more details
                      </p>
                    </div>
                    <img className="vector-icon5 ml-4 img-fluid" alt="" src="/vector5.svg" />
                  </div>
                  <h6 className="ml-4" style={{ padding: "10px",fontFamily: "'Open Sans', 'sans-serif'",fontSize:"14px",fontStyle:"normal",width:"90%"}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia officiis cumque illum consectetur distinctio odio
                    natus magni sed dolores ab perspiciatis, eveniet corporis nam
                    rem sint amet porro deleniti ut!
                  </h6>
                  
                  
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3 mb-2">
              <div className="review-box">
                  <div className="icon">
                    <img className="group-icon img-fluid mb-lg-0 mb-md-0 mb-4" alt="" src="/hoa-icon-1.svg" />
                    <div className="heading_review">
                      
                      <p style={{
                        color: "#000",
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: "800",
                        lineHeight: "101.023%"
                        }}>
                          123 Main Street</p>
                      <p style={{marginTop:"-15px",
                     color: "#000",
                     fontFamily: "'Inter',sans-serif",
                     fontSize: "12px",
                     fontStyle: "normal",
                     fontWeight: "800",
                     lineHeight: "101.023%"
                     }}>
                      {`San Francisco, CA `}
                      </p>
                      <p style={{marginTop:"-15px",
                    color: "#000",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "101.023%"}}>{`Landlord `}</p>
                      <img
                        className="star-system-1 img-fluid"
                        alt=""
                        src="/star-system-1.svg"
                      />
                      <p style={{ fontSize: "10px" }}>
                        Avg, rating, Click address for more details
                      </p>
                    </div>
                    <img className="vector-icon5 ml-4 img-fluid" alt="" src="/vector5.svg" />
                  </div>
                  <h6 className="ml-4" style={{ padding: "10px",fontFamily: "'Open Sans', 'sans-serif'",fontSize:"14px",fontStyle:"normal",width:"90%"}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia officiis cumque illum consectetur distinctio odio
                    natus magni sed dolores ab perspiciatis, eveniet corporis nam
                    rem sint amet porro deleniti ut!
                  </h6>
                  
                  
                </div>
              </div>
          </div>
          <div className="row  " >
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3 mb-2">
              <div className="review-box">
                  <div className="icon">
                    <img className="group-icon img-fluid mb-lg-0 mb-md-0 mb-4" alt="" src="/c1.png" />
                    <div className="heading_review">
                      
                      <p style={{
                        color: "#000",
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: "800",
                        lineHeight: "101.023%"
                        }}>
                          123 Main Street</p>
                      <p style={{marginTop:"-15px",
                     color: "#000",
                     fontFamily: "'Inter',sans-serif",
                     fontSize: "12px",
                     fontStyle: "normal",
                     fontWeight: "800",
                     lineHeight: "101.023%"
                     }}>
                      {`San Francisco, CA `}
                      </p>
                      <p style={{marginTop:"-15px",
                    color: "#000",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "101.023%"}}>{`Landlord `}</p>
                      <img
                        className="star-system-1 img-fluid"
                        alt=""
                        src="/star-system-1.svg"
                      />
                      <p style={{ fontSize: "10px" }}>
                        Avg, rating, Click address for more details
                      </p>
                    </div>
                    <img className="vector-icon5 ml-4 img-fluid" alt="" src="/vector5.svg" />
                  </div>
                  <h6 className="ml-4" style={{ padding: "10px",fontFamily: "'Open Sans', 'sans-serif'",fontSize:"14px",fontStyle:"normal",width:"90%"}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia officiis cumque illum consectetur distinctio odio
                    natus magni sed dolores ab perspiciatis, eveniet corporis nam
                    rem sint amet porro deleniti ut!
                  </h6>
                  
                  
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3 mb-2">
              <div className="review-box">
                  <div className="icon">
                    <img className="group-icon img-fluid mb-lg-0 mb-md-0 mb-4" alt="" src="/hoa-icon-1.svg" />
                    <div className="heading_review">
                      
                      <p style={{
                        color: "#000",
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: "800",
                        lineHeight: "101.023%"
                        }}>
                          123 Main Street</p>
                      <p style={{marginTop:"-15px",
                     color: "#000",
                     fontFamily: "'Inter',sans-serif",
                     fontSize: "12px",
                     fontStyle: "normal",
                     fontWeight: "800",
                     lineHeight: "101.023%"
                     }}>
                      {`San Francisco, CA `}
                      </p>
                      <p style={{marginTop:"-15px",
                    color: "#000",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "101.023%"}}>{`Landlord `}</p>
                      <img
                        className="star-system-1 img-fluid"
                        alt=""
                        src="/star-system-1.svg"
                      />
                      <p style={{ fontSize: "10px" }}>
                        Avg, rating, Click address for more details
                      </p>
                    </div>
                    <img className="vector-icon5 ml-4 img-fluid" alt="" src="/vector5.svg" />
                  </div>
                  <h6 className="ml-4" style={{ padding: "10px",fontFamily: "'Open Sans', 'sans-serif'",fontSize:"14px",fontStyle:"normal",width:"90%"}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia officiis cumque illum consectetur distinctio odio
                    natus magni sed dolores ab perspiciatis, eveniet corporis nam
                    rem sint amet porro deleniti ut!
                  </h6>
                  
                  
                </div>
              </div>
          </div>
              
          </div>
        
            
            
          
  );
};

export default Reviews;
