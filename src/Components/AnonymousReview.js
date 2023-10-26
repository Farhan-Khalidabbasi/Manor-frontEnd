import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Tippy from "@tippyjs/react";
import { FaStar } from "react-icons/fa";
import TopNavbar from "./TopNavbar";
import { Link } from "react-router-dom";

const AnonymousReview = () => {
  const [communicationRating, setCommunicationRating] = useState(0);
  const [hoverCommunicationRating, sethoverCommunicationRating] = useState(0);

  const [maintanenceRating, setMaintanenceRating] = useState(0);
  const [hovermaintanenceRating, sethoverMaintanenceRating] = useState(0);

  const [agreementRating, setagreementRating] = useState(0);
  const [hoveragreementRating, sethoverAgreementRating] = useState(0);

  const [noiseRating, setnoiseRating] = useState(0);
  const [hovernoiseRating, sethoverNoiseRating] = useState(0);

  const [cleanlinessRating, setcleanlinessRating] = useState(0);
  const [hovercleanlinessRating, sethoverCleanlinessRating] = useState(0);

  const handleStarClick = (rating, category) => {
    if (category === "communication") {
      setCommunicationRating(rating);
      console.log("comm", rating);
    } else if (category === "maintenance") {
      setMaintanenceRating(rating);
    } else if (category === "agreement") {
      setagreementRating(rating);
    } else if (category === "cleanliness") {
      setcleanlinessRating(rating);
    } else if (category === "noise") {
      setnoiseRating(rating);
    }
  };

  const handleStarMouseEnter = (rating, category) => {
    if (category === "communication") {
      sethoverCommunicationRating(rating);
    } else if (category === "maintenance") {
      sethoverMaintanenceRating(rating);
    } else if (category === "agreement") {
      sethoverAgreementRating(rating);
    } else if (category === "cleanliness") {
      sethoverCleanlinessRating(rating);
    } else if (category === "noise") {
      sethoverNoiseRating(rating);
    }
  };

  const handleStarMouseLeave = (category) => {
    if (category === "communication") {
      sethoverCommunicationRating(0);
    } else if (category === "maintenance") {
      sethoverMaintanenceRating(0);
    } else if (category === "noise") {
      sethoverNoiseRating(0);
    } else if (category === "cleanliness") {
      sethoverCleanlinessRating(0);
    } else if (category === "agreement") {
      sethoverAgreementRating(0);
    }
  };
  // const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  // const [formData, setFormData] = useState({
  //   communicationRating: 0,
  //   maintenanceRating: 0,
  //   leaseAgreementRating: 0,
  //   noiseRating: 0,
  //   cleanlinessRating: 0,
  //   recommend: "",
  //   review: "",
  //   publicPostingAccepted: false,
  //   captchaVerified: false,
  // });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  // const clicked = () => {
  //   console.log("clicked");
  // };

  // const handleRatingChange = (category, rating) => {
  //   setFormData({
  //     ...formData,
  //     [category]: rating,
  //   });
  // };

  // const handleCaptchaVerify = (captchaValue) => {
  //   setFormData({
  //     ...formData,
  //     captchaVerified: true,
  //   });
  // };

  const handleCaptchaVerify = (response) => {
    // Log the reCAPTCHA response in the console
    console.log("reCAPTCHA Response:", response);

    // You can also perform further actions based on the response
    if (response) {
      // reCAPTCHA was verified
      // Add your verification logic here
    } else {
      // reCAPTCHA was not verified
      // Handle this case as needed
    }
  };

  // // Handle CAPTCHA verification
  // const handleCaptchaVerify = (response) => {
  //   if (response) {
  //     setIsCaptchaVerified(true);
  //   } else {
  //     setIsCaptchaVerified(false);
  //   }
  // };

  // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (isCaptchaVerified) {
  //     // CAPTCHA is verified, you can proceed with form submission
  //     // Your form submission logic here
  //   } else {
  //     alert("Please complete the CAPTCHA to submit the form.");
  //   }
  // };
  return (
    <>
      <TopNavbar />
      <div className="container-fluid pt-4" style={{backgroundColor: "rgba(217, 217, 217, 0.10)"}}>
        <form>
          <div
            style={{
              borderRadius: "10px",
              border: "0.5px solid rgba(0, 0, 0, 0.20)",
              background: "#FFF",
            }}
          >
            <div className="row ml-lg-5 mt-5">
              <div className="col-lg-9 col-md-9 col-sm-8 col-xs-8 col-8 mt-3">
                <h6 className="anonymous_heading">
                  You are anonymously reviewing:
                </h6>
                <p className="anonymous_para">
                  2011 Sacramento Street, San Francisco, CA, USA
                </p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4">
                <img
                  src="/high_five.png"
                  className="img-fluid"
                  width={"150px"}
                  alt=""
                />
              </div>
            </div>
            <hr
              className="ml-5 mr-5"
              style={{ marginTop: "-1px", background: "rgba(0, 0, 0, 0.50)" }}
            />
            <br />
            <div
              className="ml-lg-5 mr-lg-5"
              style={{
                borderRadius: "10px",
                border: "0.5px solid rgba(0, 0, 0, 0.20)",
                background: "#FFF",
              }}
            >
              <div className="row ml-lg-5 mr-3" id="anonymous_review">
                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-3 ml-lg-4 mr-lg-3 ml-1 mr-1 mt-3">
                  <img src="/talk.png" style={{ marginTop: "-50px" }} alt="" />
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 ml-lg-5 mt-5"
                  id="review_note"
                >
                  Note this is a forum for information in all it’s forms, so
                  praise and constructive feedback are equally welcomed.
                </div>
              </div>
              <hr style={{marginTop:"-20px"}} />
              

              <div className="row ml-3 mr-3" id="anonymous_review">
                <div className="d-flex col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12 mt-2">
                  <img
                    src="/response.png"
                    width={"40px"}
                    height={"44px"}
                    alt=""
                  />
                  <h6 className="ml-3 mt-2" id="anonymous_review_heading">
                    Response to Tenant issues
                  </h6>
                  <div className="tooltip_container">
                    <Tippy
                      interactive={true}
                      content={
                        <div id="tooltip">
                          <h6>
                            How timely and reliable is their responsiveness? Are
                            they prompt in replying to emails, texts or
                            returning phone calls? Particular regarding repairs
                            and safety concerns.
                          </h6>
                        </div>
                      }
                    >
                      <img src="info.png" width="10px" height="10px" alt="" />
                    </Tippy>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-12"></div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 mt-2 mb-3">
                  {[...Array(5)].map((star, index) => {
                    const currentRate = index + 1;

                    return (
                      <label key={currentRate}>
                        <input
                          required
                          type="radio"
                          style={{ display: "none" }}
                          name="communicationRating"
                          value={currentRate}
                          onClick={() =>
                            handleStarClick(currentRate, "communication")
                          }
                        />
                        <FaStar
                          className="ml-3"
                          size={20}
                          color={
                            currentRate <=
                            (hoverCommunicationRating || communicationRating)
                              ? "gold"
                              : "lightgrey"
                          }
                          onMouseEnter={() =>
                            handleStarMouseEnter(currentRate, "communication")
                          }
                          onMouseLeave={() =>
                            handleStarMouseLeave("communication")
                          }
                        />
                      </label>
                    );
                  })}
                </div>
              </div>

              <hr
                style={{
                  marginLeft: "90px",
                  marginTop: "-12px",
                  background: "rgba(0, 0, 0, 0.20)",
                }}
              />
              <div className="row ml-3 mr-3 " id="anonymous_review">
                <div className=" d-flex col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12 mt-2">
                  <img
                    src="/maintenance.png"
                    width={"40px"}
                    height={"44px"}
                    alt=""
                  />
                  <h6 className="ml-3  mt-2" id="anonymous_review_heading">
                    Maintenance and Repairs
                  </h6>
                  <div className="tooltip_container">
                    <Tippy
                      interactive={true}
                      content={
                        <div id="tooltip">
                          <h6>
                            How timely and reliable is their responsiveness? Are
                            they prompt in replying to emails, texts or
                            returning phone calls? Particular regarding repairs
                            and safety concerns.
                          </h6>
                        </div>
                      }
                    >
                      <img src="info.png" width="10px" height="10px" alt="" />
                    </Tippy>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-12"></div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 mt-2 mb-3">
                  {[...Array(5)].map((star, index) => {
                    const currentRate = index + 1;

                    return (
                      <label key={currentRate}>
                        <input
                          required
                          type="radio"
                          style={{ display: "none" }}
                          name="maintanenceRating"
                          value={currentRate}
                          onClick={() =>
                            handleStarClick(currentRate, "maintenance")
                          }
                        />
                        <FaStar
                          className="ml-3"
                          size={20}
                          color={
                            currentRate <=
                            (hovermaintanenceRating || maintanenceRating)
                              ? "gold"
                              : "lightgrey"
                          }
                          onMouseEnter={() =>
                            handleStarMouseEnter(currentRate, "maintenance")
                          }
                          onMouseLeave={() =>
                            handleStarMouseLeave("maintenance")
                          }
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
              <hr
                style={{
                  marginLeft: "90px",
                  marginTop: "-12px",
                  background: "rgba(0, 0, 0, 0.20)",
                }}
              />
              <div className="row ml-3 mr-3 " id="anonymous_review">
                <div className=" d-flex col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12 mt-2">
                  <img
                    src="/agreement.png"
                    width={"40px"}
                    height={"44px"}
                    alt=""
                  />
                  <h6 className="ml-3  mt-2" id="anonymous_review_heading">
                    Lease Agreement Adherence
                  </h6>
                  <div className="tooltip_container">
                    <Tippy
                      interactive={true}
                      content={
                        <div id="tooltip">
                          <h6>
                            How timely and reliable is their responsiveness? Are
                            they prompt in replying to emails, texts or
                            returning phone calls? Particular regarding repairs
                            and safety concerns.
                          </h6>
                        </div>
                      }
                    >
                      <img src="info.png" width="10px" height="10px" alt="" />
                    </Tippy>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-12"></div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 mt-2 mb-3">
                  {[...Array(5)].map((star, index) => {
                    const currentRate = index + 1;

                    return (
                      <label key={currentRate}>
                        <input
                          required
                          type="radio"
                          style={{ display: "none" }}
                          name="agreementRating"
                          value={currentRate}
                          onClick={() =>
                            handleStarClick(currentRate, "agreement")
                          }
                        />
                        <FaStar
                          className="ml-3"
                          size={20}
                          color={
                            currentRate <=
                            (hoveragreementRating || agreementRating)
                              ? "gold"
                              : "lightgrey"
                          }
                          onMouseEnter={() =>
                            handleStarMouseEnter(currentRate, "agreement")
                          }
                          onMouseLeave={() => handleStarMouseLeave("agreement")}
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
              <hr
                style={{
                  marginLeft: "90px",
                  marginTop: "-12px",
                  background: "rgba(0, 0, 0, 0.20)",
                }}
              />
              <div className="row ml-3 mr-3 " id="anonymous_review">
                <div className=" d-flex col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12 mt-2">
                  <img src="/noise.png" width={"40px"} height={"44px"} alt="" />
                  <h6 className="ml-3  mt-2" id="anonymous_review_heading">
                    Property Noise Levels
                  </h6>
                  <div className="tooltip_container">
                    <Tippy
                      interactive={true}
                      content={
                        <div id="tooltip">
                          <h6>
                            How timely and reliable is their responsiveness? Are
                            they prompt in replying to emails, texts or
                            returning phone calls? Particular regarding repairs
                            and safety concerns.
                          </h6>
                        </div>
                      }
                    >
                      <img src="info.png" width="10px" height="10px" alt="" />
                    </Tippy>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-12"></div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 mt-2 mb-3">
                  {[...Array(5)].map((star, index) => {
                    const currentRate = index + 1;

                    return (
                      <label key={currentRate}>
                        <input
                          required
                          type="radio"
                          style={{ display: "none" }}
                          name="noiseRating"
                          value={currentRate}
                          onClick={() => handleStarClick(currentRate, "noise")}
                        />
                        <FaStar
                          className="ml-3"
                          size={20}
                          color={
                            currentRate <= (hovernoiseRating || noiseRating)
                              ? "gold"
                              : "lightgrey"
                          }
                          onMouseEnter={() =>
                            handleStarMouseEnter(currentRate, "noise")
                          }
                          onMouseLeave={() => handleStarMouseLeave("noise")}
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
              <hr
                style={{
                  marginLeft: "90px",
                  marginTop: "-12px",
                  background: "rgba(0, 0, 0, 0.20)",
                }}
              />
              <div className="row ml-3 mr-3 " id="anonymous_review">
                <div className=" d-flex col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12 mt-2">
                  <img src="/clean.svg" width={"40px"} height={"44px"} alt="" />
                  <h6 className="ml-3  mt-2" id="anonymous_review_heading">
                    Property Cleanliness
                  </h6>
                  <div className="tooltip_container">
                    <Tippy
                      interactive={true}
                      content={
                        <div id="tooltip">
                          <h6>
                            How timely and reliable is their responsiveness? Are
                            they prompt in replying to emails, texts or
                            returning phone calls? Particular regarding repairs
                            and safety concerns.
                          </h6>
                        </div>
                      }
                    >
                      <img src="info.png" width="10px" height="10px" alt="" />
                    </Tippy>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-12"></div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 mt-2 mb-3">
                  {[...Array(5)].map((star, index) => {
                    const currentRate = index + 1;

                    return (
                      <label key={currentRate}>
                        <input
                          required
                          type="radio"
                          style={{ display: "none" }}
                          name="cleanlinessRating"
                          value={currentRate}
                          onClick={() =>
                            handleStarClick(currentRate, "cleanliness")
                          }
                        />
                        <FaStar
                          className="ml-3"
                          size={20}
                          color={
                            currentRate <=
                            (hovercleanlinessRating || cleanlinessRating)
                              ? "gold"
                              : "lightgrey"
                          }
                          onMouseEnter={() =>
                            handleStarMouseEnter(currentRate, "cleanliness")
                          }
                          onMouseLeave={() =>
                            handleStarMouseLeave("cleanliness")
                          }
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
              <hr
                style={{
                  marginLeft: "90px",
                  marginTop: "-12px",
                  background: "rgba(0, 0, 0, 0.20)",
                }}
              />
              <div className="row ml-3 mr-3 " id="anonymous_review">
                <div className=" d-flex col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12 mt-2">
                  <img src="/photo.svg" width={"40px"} height={"44px"} alt="" />
                  <h6 className="ml-3  mt-2" id="anonymous_review_heading">
                    Post a photo or video
                  </h6>
                  <div className="tooltip_container">
                    <Tippy
                      interactive={true}
                      content={
                        <div id="tooltip">
                          <h6>
                            How timely and reliable is their responsiveness? Are
                            they prompt in replying to emails, texts or
                            returning phone calls? Particular regarding repairs
                            and safety concerns.
                          </h6>
                        </div>
                      }
                    >
                      <img src="info.png" width="10px" height="10px" alt="" />
                    </Tippy>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12 mt-2 mb-3 ">
                  <div className="d-flex mt-1" style={{ gap: "25px" }}>
                    <img
                      src="/post.svg"
                      style={{ marginLeft: "-20px" }}
                      className="mt-3"
                      width={"25px"}
                      height={"25px"}
                      alt=""
                    />
                    <div
                      className="pl-3 pr-3 pt-3 mt-1 "
                      style={{ borderRadius: "5px", background: "#F4F4F4" }}
                    >
                      <p
                        style={{
                          color: "#000",
                          fontFamily: "'Open Sans', 'sans-serif'",
                          fontSize: "11px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineheight: "normal",
                        }}
                      >
                        Please post media according to our{" "}
                        <Link to="\policy" id="policy">
                          {" "}
                          policy guidelines{" "}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row ml-3 mr-3" id="prefer_friend">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mr-5 col-12 mt-3">
                  <p
                    className="ml-5"
                    style={{
                      color: "#000",
                      fontFamily: "'Open Sans', 'sans-serif'",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    }}
                  >
                    Would you like to recommend this property to your friend?
                  </p>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 col-12  mt-2">
                  <div className="d-flex">
                    <input
                      required
                      type="radio"
                      id="recommendYes"
                      name="recommend"
                      value="yes"
                      style={{ width: "20px" }}
                    />
                    <label
                      for="recommendYes"
                      className="ml-2 mt-1"
                      style={{
                        color: " #000",
                        fontFamily: "'Open Sans', 'sans-serif'",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                      }}
                    >
                      Yes
                    </label>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 col-12 mt-2">
                  <div className="d-flex">
                    <input
                      type="radio"
                      id="recommendNo"
                      name="recommend"
                      value="no"
                      style={{ width: "20px" }}
                    />
                    <label
                      for="recommendNo"
                      className="ml-2 mt-1"
                      style={{
                        color: " #000",
                        fontFamily: "'Open Sans', 'sans-serif'",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                      }}
                    >
                      No
                    </label>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12 mt-2">
                  <div className="d-flex">
                    <input
                      type="radio"
                      id="recommendPreferNottoSay"
                      name="recommend"
                      value="PreferNottoSay"
                      style={{ width: "20px" }}
                    />
                    <label
                      for="recommendPreferNottoSay"
                      className="ml-2 mt-1"
                      style={{
                        color: " #000",
                        fontFamily: "'Open Sans', 'sans-serif'",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                      }}
                    >
                      Prefer Not to Say
                    </label>
                  </div>
                </div>
              </div>
              <div className="row ml-5 mr-5" id="anonymous_review">
                <div className="col-12 ml-2 mt-3 mb-3">
                  <p
                    className="ml-2"
                    style={{
                      color: "#000",
                      fontFamily: "'Open Sans', 'sans-serif'",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    }}
                  >
                    Provide detailed review. This section should include any
                    details or narrative to describe your experiences. Please be
                    fair and honest in your review. <br />
                  </p>
                  
                  <p
                    
                    style={{
                      color: "#000",
                      fontFamily: "'Open Sans', 'sans-serif'",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    }}
                  >
                  <img src="/hashtag.svg" alt="" />
                    Our website accepts hashtags for search indexing, so feel
                    free to hashtag key terms. Eg, #noise, #sanfrancisco,
                    #repairs, #lease.
                  </p>
                  <textarea
                    rows={"4"}
                    style={{
                      width: "100%",
                      borderRadius: "20px",
                      background: "#EDF5F4",
                      border: "1px solid rgba(0, 0, 0, 0.50)",
                      padding: "16px",
                      color: "rgba(0, 0, 0, 0.50)",
                      fontFamily: "'Inter',sans-serif",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    }}
                    type="text"
                    placeholder="Enter written review here"
                  />{" "}
                  <br />
                  <p
                    className="ml-2"
                    style={{
                      color: "#000",
                      fontFamily: "'Open Sans', 'sans-serif'",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    }}
                  >
                    Note: Any malicious or defamatory language may result in the
                    review being edited or removed. <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="row ml-5 mr-5">
              <div className="col-lg-12 col-md-12 col-sm-10 col-xs-10 col-10 mt-5  d-flex">
                <input
                  required
                  type="checkbox"
                  width={"20px"}
                  id="myCheckbox"
                  className="custom-checkbox "
                />
                <p
                  className="mt-1 ml-3"
                  style={{
                    color: "#000",
                    fontFamily: "'Open Sans', 'sans-serif'",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  I understand that my posting on ManorLane is public and may be
                  viewed by my landlord, HOA or property management company
                </p>
              </div>
            </div>
            <div className="row ml-5 mr-5">
              <div className="col-lg-12 col-md-12 col-sm-10 col-xs-10 col-10   d-flex">
                <input
                  required
                  type="checkbox"
                  width={"20px"}
                  id="myCheckbox"
                  className="custom-checkbox "
                />
                <p
                  className="mt-1 ml-3"
                  style={{
                    color: "#000",
                    fontFamily: "'Open Sans', 'sans-serif'",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  I understand that my posting on ManorLane is public and may be
                  viewed by my landlord, HOA or property management company
                </p>
              </div>
            </div>

            <div className="row ml-5 mr-5">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 ">
                <ReCAPTCHA
                  sitekey="6LfkvbMoAAAAAKee4tq1CEo4KEgfBBj3RcV03xFB"
                  onChange={handleCaptchaVerify}
                />
              </div>
            </div>

            <div className="row ml-3 mr-3  " id="anonymous_review">
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12 "></div>
              <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 col-12  mt-5 mb-5 d-flex ">
                <button
                  className="btn pl-lg-5 pr-lg-5 pl-md-5 pr-md-5"
                  style={{
                    background: "#FFF",
                    borderRadius: "50px",
                    color: "#191847",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    border: "1px solid #000",
                  }}
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="btn pl-lg-5 pr-lg-5 pl-md-5 pr-md-5"
                  style={{
                    backgroundColor: " #4267B2",
                    borderRadius: "50px",
                    color: "#FFF",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    marginLeft: "20px",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AnonymousReview;
