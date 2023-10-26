import React from "react";
import TopNavbar from "./TopNavbar";

const FAQ = () => {
  return (
    <>
      <TopNavbar />

      <div
        className="container mt-4 mb-5"
        style={{ backgroundColor: "rgba(217, 217, 217, 0.10)" }}
      >
        <div
          className="ml-lg-0 ml-md-0 ml-2 mr-2 pb-4"
          style={{
            borderRadius: "10px",
            border: "0.5px solid rgba(0, 0, 0, 0.20)",
            background: "#FFF",
          }}
        >
          <h6
            className="pt-2 pl-4 ml-1"
            style={{
              color: "#000",
              fontFamily: "'Open Sans',sans-serif",
              fontSize: "22px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "206.682%",
            }}
          >
            Frequently Asked Questions:
          </h6>
          <hr />
          <div class="accordion pl-4 pr-4" id="accordionExample">
            <div
              class="card mb-4"
              style={{
                borderRadius: "10px",
                border: "0.5px solid rgba(0, 0, 0, 0.20)",
                background: "#FFF",
              }}
            >
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{
                      color: "#000",
                      fontFamily: "'Open Sans',sans-serif",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "206.682%",
                      textDecoration: "none",
                    }}
                  >
                    What is Manor?
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div
                  class="card-body"
                  style={{
                    color: "#000",
                    fontFamily: "'Open Sans',sans-serif",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "206.682%",
                  }}
                >
                  ManorLane is here is provide renters, HOA members and anyone living at the mercy of other people’s governance, a platform for information, transparency, accountability and community.
                </div>
              </div>
            </div>
            <div class="card mb-2" style={{
                borderRadius: "10px",
                border: "0.5px solid rgba(0, 0, 0, 0.20)",
                background: "#FFF",
              }}>
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{
                      color: "#000",
                      fontFamily: "'Open Sans',sans-serif",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "206.682%",
                      textDecoration: "none",
                    }}
                  >
                    What's the history of Manor?
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div
                  class="card-body"
                  style={{
                    color: "#000",
                    fontFamily: "'Open Sans',sans-serif",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "206.682%",
                  }}
                >
                  ManorLane is a dream of mine. To create a forum for full transparency and accountability, where it should exist first and foremost, in the home. Home: our biggest expense of money, time, and emotion. We can read reviews about restaurants before we dine, we can crowdsource a set of headphones or TV, yet, with our homes, we go in virtually blind.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
