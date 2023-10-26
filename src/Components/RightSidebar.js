import React from "react";
import "../App.css";

const RightSidebar = () => {
  return (
    <div className="container-fluid mt-3 ml-3 d-none d-md-block d-lg-block" style={{borderRadius:"10px",border:"0.5px solid rgba(0, 0, 0, 0.20)",backgroundColor:"#FFF"}}>
      <div className="row" >
      <div className="row mt-3 ">
        <div className="col-12">
        <div className="search-box ml-lg-3"  >
              <div className="input-wrapper ml-lg-1">
                <img className="search-icon" src="/vector2.svg" alt="" />
                <input
                  className="search_input pt-4 pb-4 mb-2"
                  type="text"
                  id="input"
                  name="search"
                  placeholder="Search properties and reviews"
                />
              </div>
            </div>
        </div>
      </div>
        <div className="col-12">
          <img src="/1.png" className="img-fluid" alt="" />
        </div>
        
      </div>
      <br />
      <div className="row mb-3" >
        <div className="col-12 ">
          <img src="/2.png" className="img-fluid" alt="" />
        </div>
        
      </div>
      
     
    </div>
  );
};

export default RightSidebar;
