import React from 'react'

const BookMarks = () => {
  return (
    <div className="bookmarks"  >
      
      <div className="bookmarks-saved-resources mb-2 mt-4  ml-3">
        <b style={{
          color: "#000",
          fontFamily: "'Open Sans', 'sans-serif'",
          fontSize: "30px",
          fontStyle: "normal",
          fontWeight: "300",
          lineHeight: "134.5%",
        }}> Bookmarks </b> 
        <p style={{ 
              color: "#000",

              fontFamily: "'Open Sans', 'sans-serif'",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              marginTop:"7px"
             }}>
             Bookmarks are organization tool to help keep track of articles, reviews you like, and even your own reviews. Stay tuned for more as our platform grows. More ideas? Send them <a href="/">our way!</a>
              
            </p>
            <br />
            <h6 style={{
              color: "#000",
              fontFamily: "'Open Sans', 'sans-serif'",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "300",
              lineHeight: "normal",
            }}>Come back to this page for saved:</h6>
            <ul className="comm_ideas">
              <li><img src="/si_Check_circle.png" width={"14px"} style={{marginTop:"-4px"}} alt="" /> Reviews from others you want to save</li>
              <li><img src="/si_Check_circle.png" width={"14px"} style={{marginTop:"-4px"}} alt="" /> Your own reviews you have Bookmarked</li>
              <li><img src="/si_Check_circle.png" width={"14px"} style={{marginTop:"-4px"}} alt="" /> Articles you have Bookmarked from the Learn blog</li>
              
             
            </ul>
      </div>
      
      <div class="container-fluid mb-3">
  
        <div class="row">
        
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
         
            <div class="card" >
              <img src="h1.jpg" class="card-img-top img-fluid" alt="" />
              <div class="card-body">
                <button class="btn btn-outline-warning  ">Inspiration</button>
                <br />
                <br />
                <p class="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                  a repellat, harum nulla odio amet iusto voluptatem unde ullam
                  nam autem perspiciatis nobis ipsa sit!
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
            <div class="card">
              <img src="h2.jpg" class="card-img-top img-fluid" alt="" />
              <div class="card-body">
                <button class="btn btn-outline-warning  ">Inspiration</button>
                <br />
                <br />
                <p class="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                  a repellat, harum nulla odio amet iusto voluptatem unde ullam
                  nam autem perspiciatis nobis ipsa sit!
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <br />
        <div class="row">
          
          <div class="col-12 mt-3">
          <div className="review-box">
                  <div className="icon">
                    <img className="group-icon img-fluid" alt="" src="/hoa-icon-1.svg" />
                    <div className="heading_review">
                      
                      <p><b >123 Main Street</b></p>
                      <p style={{marginTop:"-22px"}}><b >{`San Francisco, CA `}</b></p>
                      <p style={{marginTop:"-22px"}}>{`Landlord `}</p>
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
                  <input
                    type="text"
                    className="leave_comment ml-4 "
                    placeholder="Leave a comment"
                    style={{
                      color: "rgba(0, 0, 0, 0.50)",
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "11px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "101.023%"
                    }}
                  />
                  <div className="icons d-flex ml-4">
                    <img className="love-icon img-fluid" alt="" src="/love-icon.svg" />
                    <img
                      className="vector-icon4 mx-3 img-fluid"
                      alt=""
                      src="/vector4.svg"
                    />
                  </div>
                </div>
          </div>
          

        </div>
        <br />

        {/* <!-- Second row with one icon and three more cards --> */}
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
            <div class="card">
              <img src="h2.jpg" class="card-img-top img-fluid"  alt="" />
              <div class="card-body">
                <button class="btn btn-outline-warning  ">Inspiration</button>
                <br />
                <br />
                <p class="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                  a repellat, harum nulla odio amet iusto voluptatem unde ullam
                  nam autem perspiciatis nobis ipsa sit!
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
            <div class="card">
              <img src="h2.jpg" class="card-img-top img-fluid" alt="" />
              <div class="card-body">
                <button class="btn btn-outline-warning  ">Inspiration</button>
                <br />
                <br />
                <p class="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                  a repellat, harum nulla odio amet iusto voluptatem unde ullam
                  nam autem perspiciatis nobis ipsa sit!
                </p>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default BookMarks
