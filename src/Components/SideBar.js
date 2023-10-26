import { useCallback } from "react";
import "../App.css";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  const onReviewsContainerClick = useCallback(() => {
    // Please sync "Review Results" to the project
  }, []);

  const onCommunitiesContainerClick = useCallback(() => {
    // Please sync "Communities" to the project
  }, []);

  const onMessagesContainerClick = useCallback(() => {
    // Please sync "Messages" to the project
  }, []);

  const onNotificationsContainerClick = useCallback(() => {
    // Please sync "Messages" to the project
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    // Please sync "Bookmarks" to the project
  }, []);

  // const onResourcesContainerClick = useCallback(() => {
  //   // Please sync "Resources" to the project
  // }, []);

  const onReviewSearchBtnContainerClick = useCallback(() => {
    // Please sync "Search - Form" to the project
  }, []);

  return (
    <div className="container-fluid">
      <div className="row" >
        {/* <div > */}
          <div className="col-2.5 sidebar d-none d-xl-block d-md-block d-lg-block" >
            <div className="rectangle-parent mt-3 pb-2 ml-lg-3 ">
              <Link to="/search_reviews">
                {" "}
                <button
                  className="btn pt-2 pb-2 pl-lg-3 pr-lg-3 "
                  style={{
                    backgroundColor: " #9A3596",
                    borderRadius: "23px",
                    color: "white",
                    fontSize: "1vw",

                    marginLeft: "-10px",
                    fontWeight: "510",
                  }}
                >
                  <img src="/invite.png" alt="" width={"20px"} />+ Invite a
                  friend or neighbor
                </button>
              </Link>
            </div>
            <div
              className=" mb-3 mt-2"
              style={{
                borderRadius: "10px",
                border: "0.5px solid rgba(0, 0, 0, 0.20)",
                paddingLeft: "13px",
                backgroundColor:"#FFF"
              }}
            >
              <div
                className={`reviews mr-2 d-flex mt-3 side-link ${
                  location.pathname === "/my_reviews" ? "active" : ""
                }`}
                onClick={onReviewsContainerClick}
              >
                <img
                  className="carbonuser-favorite-icon "
                  alt=""
                  src="/nav_reviews.svg"
                  height={"40px"}
                  width={"40px"}
                />

                <Link to="/my_reviews" style={{ textDecoration: "none" }}>
                  <div
                    className={`my-reviews mx-2 mt-2 side-link nav-item ${
                      location.pathname === "/my_reviews" ? "active" : ""
                    }`}
                  >
                    My Reviews
                  </div>
                </Link>
              </div>
              <div
                className={`communities mr-2 d-flex mt-2 side-link ${
                  location.pathname === "/communities" ? "active" : ""
                }`}
                onClick={onCommunitiesContainerClick}
              >
                <img
                  className="akar-iconspeople-group mx-1"
                  alt=""
                  src="/nav_communities.svg"
                  height={"40px"}
                  width={"30px"}
                />
                <Link to="/communities" style={{ textDecoration: "none" }}>
                  {" "}
                  <div
                    className={`communities1 mx-2 mt-2  side-link nav-item ${
                      location.pathname === "/communities" ? "active" : ""
                    }`}
                  >
                    Communities
                  </div>
                </Link>
              </div>
              <div
                className={`messages mr-2 d-flex mt-2 side-link ${
                  location.pathname === "/messages" ? "active" : ""
                }`}
                onClick={onMessagesContainerClick}
              >
                <img
                  className="charmmessages-icon mx-1"
                  alt=""
                  src="/nav_messages.svg"
                  height={"40px"}
                  width={"30px"}
                />

                <Link to="/messages" style={{ textDecoration: "none" }}>
                  {" "}
                  <div
                    className={`messages1 mx-2 mt-2 side-link nav-item ${
                      location.pathname === "/messages" ? "active" : ""
                    }`}
                  >
                    Messages
                  </div>{" "}
                </Link>
              </div>
              <div
                className={`notifications_navbar mr-2 d-flex mt-2 side-link ${
                  location.pathname === "/my_notifications" ? "active" : ""
                }`}
                onClick={onNotificationsContainerClick}
              >
                <img
                  className="notifications-child mx-1"
                  alt=""
                  src="/nav_notifications.svg"
                  height={"40px"}
                  width={"30px"}
                />

                <Link to="/my_notifications" style={{ textDecoration: "none" }}>
                  <div
                    className={`notifications1 mx-2 mt-2 side-link nav-item ${
                      location.pathname === "/my_notifications" ? "active" : ""
                    }`}
                  >
                    Notifications
                  </div>
                </Link>
              </div>
              <div
                className={`bookmarks-parent mr-2 d-flex mt-2 side-link ${
                  location.pathname === "/bookmarks" ? "active" : ""
                }`}
                onClick={onGroupContainer1Click}
              >
                <img
                  className="bibookmark-icon mx-1 pt-2"
                  alt=""
                  src="/nav_bookmarks.svg"
                  height={"40px"}
                  width={"30px"}
                />

                <Link to="/bookmarks" style={{ textDecoration: "none" }}>
                  <div
                    className={`bookmarks_navbar mx-2 mt-2 side-link nav-item ${
                      location.pathname === "/bookmarks" ? "active" : ""
                    }`}
                  >
                    Bookmarks
                  </div>
                </Link>
              </div>
              <div
                className={`resources mr-2 d-flex mt-2 side-link ${
                  location.pathname === "/learn" ? "active" : ""
                }`}
                onClick={onGroupContainer1Click}
              >
                <img
                  className="resources mx-1 pt-1"
                  alt=""
                  src="/nav_learn.svg"
                  height={"40px"}
                  width={"30px"}
                />

                <Link to="/learn" style={{ textDecoration: "none" }}>
                  <div
                    className={`bookmarks_navbar mx-2 mt-2 side-link nav-item ${
                      location.pathname === "/learn" ? "active" : ""
                    }`}
                  >
                    Learn
                  </div>
                </Link>
              </div>

              <div
                className="review-search-btn d-flex"
                onClick={onReviewSearchBtnContainerClick}
              >
                <div className="rectangle-parent mt-4 ml-4">
                  <Link to="/search_reviews">
                    {" "}
                    <button
                      className="btn"
                      style={{
                        fontSize:"1vw",
                        backgroundColor: " #1E81C4",
                        borderRadius: "23px",
                        color: "white",
                        paddingLeft: "25px",
                        paddingRight: "25px",
                        marginLeft: "-10px",
                        fontWeight: "600",
                      }}
                    >
                      Write a Review{" "}
                      <img src="/right_arrow.png" className="ml-2" alt="" />
                    </button>
                  </Link>
                  <br />
                  <br />
                  
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
