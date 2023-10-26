import React from "react";

const Communities = () => {
  return (
  
      <div className="communities_comp mb-5">
        <div className="row mr-1 ml-1  mb-1 ">
          <div className="col-12 mt-4 ">
            <div className="d-flex">
              <h3 className="public_comm">Public & Private Communities</h3>
              
            </div>
            
            <p style={{ 
              color: "#000",

              fontFamily: "'Open Sans', 'sans-serif'",
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
             }}>
              The communities page is your safe place for open dialogue, easy sharing and compassionate communication with others in your chosen cohort.
              
            </p>
            <hr style={{background: "rgba(0, 0, 0, 0.30)"}}/>

            <h6 style={{
              color: "#000",
              fontFamily: "'Open Sans', 'sans-serif'",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
            }}>Some ideas for Communities:</h6>
            <ul className="comm_ideas">
              <li><img src="/si_Check_circle.png" width={"14px"} style={{marginTop:"-4px"}} alt="" /> Join a public community to get/share advice and insights for your living situation</li>
              <li><img src="/si_Check_circle.png" width={"14px"} style={{marginTop:"-4px"}} alt="" /> Create a private community for roommates, neighbors, friends</li>
              <li><img src="/si_Check_circle.png" width={"14px"} style={{marginTop:"-4px"}} alt="" /> Create a private community for your region</li>
              <li><img src="/si_Check_circle.png" width={"14px"} style={{marginTop:"-4px"}} alt="" /> Create a private community for a particular topic or interest</li>
             
            </ul>
          </div>
        </div>
        <div  style={{borderRadius:"10px",  border:"0.5px solid rgba(0, 0, 0, 0.20"}}>

        <div className="row mr-1 ml-1">
          <div className="col-12 mt-3">
          <h3 className="public_comm">Public Communities</h3>
          <p style={{ 
              color: "#000",

              fontFamily: "'Open Sans', 'sans-serif'",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
             }}>
              
              These Communities are available all visitors to the site. No
              account needed to browse. if you would like to post comment, an{" "}
              <a href="/signup">account</a> is needed. 
            </p>
          </div>
        
        </div>
        <div className="row mr-1 ml-1">
          
        <div
            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 mt-2 mb-2 d-flex"
            id="landlord_tenants"
            style={{borderRadius:"10px",  border:"0.5px solid rgba(0, 0, 0, 0.10"}}
          >
            <div>
              <img
                src="/c2.svg"
                style={{ width: "40px" }}
                alt=""
                className="mt-2 ml-1 mr-2"
              />
            </div>
            <div className=" mr-1">
              <h3 className="landlord_tenants">Landlord-owned Tenanats</h3>
              <button
                className="btn "
                style={{
                  width: "100%",
                  backgroundColor: "lightblue",
                  color: "#252525",
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Join Group
              </button>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 mt-2 mb-2 d-flex"
            id="landlord_tenants"
            style={{borderRadius:"10px",  border:"0.5px solid rgba(0, 0, 0, 0.10"}}
          >
            <div>
              <img
                src="/c1.png"
                style={{ width: "40px" }}
                alt=""
                className="mt-2 ml-1 mr-2"
              />
            </div>
            <div className=" mr-1">
              <h3 className="landlord_tenants">Landlord-owned Tenanats</h3>
              <button
                className="btn "
                style={{
                  width: "100%",
                  backgroundColor: "lightblue",
                  color: "#252525",
                  fontFamily: "'Open Sans', 'sans-serif'",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Join Group
              </button>
            </div>
          </div>
        </div>
        <div className="row mr-1 ml-1">
          
          <div
              className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 mt-2 mb-2 d-flex"
              id="landlord_tenants"
              style={{borderRadius:"10px",  border:"0.5px solid rgba(0, 0, 0, 0.10"}}
            >
              <div>
                <img
                  src="/c2.svg"
                  style={{ width: "40px" }}
                  alt=""
                  className="mt-2 ml-1 mr-2"
                />
              </div>
              <div className=" mr-1">
                <h3 className="landlord_tenants">Landlord-owned Tenanats</h3>
                <button
                  className="btn "
                  style={{
                    width: "100%",
                    backgroundColor: "lightblue",
                    color: "#252525",
                    fontFamily: "'Open Sans', 'sans-serif'",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                  }}
                >
                  Join Group
                </button>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 mt-2 mb-2 d-flex"
              id="landlord_tenants"
              style={{borderRadius:"10px",  border:"0.5px solid rgba(0, 0, 0, 0.10"}}
            >
              <div>
                <img
                  src="/c1.png"
                  style={{ width: "40px" }}
                  alt=""
                  className="mt-2 ml-1 mr-2"
                />
              </div>
              <div className=" mr-1">
                <h3 className="landlord_tenants">Landlord-owned Tenanats</h3>
                <button
                  className="btn "
                  style={{
                    width: "100%",
                    backgroundColor: "lightblue",
                    color: "#252525",
                    fontFamily: "'Open Sans', 'sans-serif'",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                  }}
                >
                  Join Group
                </button>
              </div>
            </div>
          </div>
        <br />
        </div>
        
        <div style={{
            backgroundColor: "rgba(147, 39, 143, 0.20)",
            borderRadius: "10px",
            marginTop:"20px"
          }}>
            <div className="row ml-1 mr-1">
          <div className="col-12">
            <div className="d-flex mt-4">
              <h3 className="public_comm">Private Communities</h3>
              <img className="img ml-5" id="comm_img" src="/Group.png" alt="" />
            </div>
          </div>
        </div>

        
        <div
          className="row ml-1 mr-1"
          
        >
          <div className="col-12 mt-3 mb-3 mr-3" id="form_comm">
            <h5 className="private_comm">Create a Private Community:</h5>
            <p>
              Share a social space with your neighbors, roommates, HOA cohort or
              anyone that you want to communicate, kvetch or conspire with!
            </p>
            <form action="">
              <input
                className="comm_input"
                type="text"
                placeholder="Community Name"
                style={{
                  color: "rgba(0, 0, 0, 0.50)",
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "101.023%"
                }}
              />
              <input
                className="comm_input"
                type="text"
                placeholder="Description"
                style={{
                  color: "rgba(0, 0, 0, 0.50)",
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "101.023%"
                }}
              />
              <input
                className="comm_input"
                type="text"
                placeholder="Invite Friends"
                style={{
                  color: "rgba(0, 0, 0, 0.50)",
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "101.023%",
                  
                }}
              />
              <button type="submit" className="btn btn-dark mt-2" style={{float:"inline-end"}}>
                Create Communtiy
              </button>
            </form>
            <br />
            <br />
          </div>
        </div>
        </div>
        <h3 className="mt-5 ml-1 mr-1" id="comm_feed">
          Communities Feed
        </h3>
        <div id="comm_feed_posts" className="row mb-3  ml-1 mr-1">
          <div className="col-9">
            <div className="d-flex mt-3 mb-3">
              <img
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                src="/my_polls.png"
                alt=""
              />
              <div>
                <h6 className="ml-2 mt-1" style={{ fontWeight: "bold" }}>
                  Jessica Alba
                </h6>
                <p
                  className="ml-2"
                  style={{ marginTop: "-10px", color: "#999",fontSize:"12px" }}
                >
                  Upper Pacific Heights | Edited 10 hr ago |
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <a
              href="/"
              class="three-dots-link"
              style={{
                fontSize: "xx-large",
                marginLeft: "40%",
                color: "black",
                fontWeight: "bolder",
              }}
            >
              ...
            </a>
          </div>
          <div className="comm_feed_post_content col-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              laboriosam suscipit ratione, eum quis voluptas porro voluptatum
              provident alias reprehenderit inventore corporis laborum possimus
              praesentium sed veniam pariatur ad? Vitae!
            </p>
          </div>
          <div className="post-actions col-12 d-flex" >
            
            <div className="col-lg-3 col-md-3 col-6 d-flex" style={{marginLeft:"-10px"}}>
             
                <img src="/heart.png"  width={"18px"} height={"20px"} alt="" /> <p className="ml-1" style={{fontSize:"12px"}}>2 Likes</p> 
            
            </div>
              <div className="col-lg-5 col-md-5 col-6 ml-1 d-flex">
              
              <i className="fa fa-comment "></i> <p style={{fontSize:"12px"}}>&nbsp; 6 Comments</p> 
           
            
              </div>
            
            

            
          </div>
        </div>
      </div>
  
  );
};

export default Communities;
