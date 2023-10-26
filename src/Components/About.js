import React from "react";
import TopNavbar from "./TopNavbar";
const About = () => {
  return (
    <>
      <TopNavbar />
      <div
        className="container mt-4 mb-5 "
        style={{backgroundColor: "rgba(217, 217, 217, 0.10)"}}
       
      >
        <div className="ml-lg-0 ml-md-0 ml-2 mr-2"  style={{
          borderRadius: "10px",
          border: "0.5px solid rgba(0, 0, 0, 0.20)",
          background: "#FFF",
        }}>

       
        <div className="row mb-5 ">
          <div className="col-12 pl-5 pr-5 pt-4 pb-4">
            <h6
              style={{
                color: "#000",
                fontFamily: "'Open Sans',sans-serif",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "206.682%",
              }}
            >
              About Manorlane
            </h6>
            <br />
            <p
              style={{
                color: "#000",
                fontFamily: "'Open Sans',sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "206.682%",
              }}
            >
              When I was 13 years old, some friends and I built a makeshift fort
              in the woods. We “constructed” it out of found plywood, moldy
              carpet, and some rusty nails we found at an abandoned construction
              site.
              <br />
              <br />
              The fort was where found solace away from our hostile homelives; a
              place where a 13-year-old kid in the 80’s could drink, smoke, or
              listen to whatever they pleased. We lovingly called this place
              “The Manor”. The Manor was our castle, our kingdom, our domain
              where we were the lords. At The Manor, we made the rules, lived
              free, and escaped the perceived tyranny of our domestic lives.
              <br />
              <br />
              Having been a lifelong renter, I have seen my fair share of both
              good and bad living environments, landlords and neighbors. My
              mother, a senior who lived under a faceless HOA for decades saw
              virtually no return on her monthly expense.
              <br />
              <br />
              ManorLane is a dream of mine. To create a forum for full
              transparency and accountability, where it should exist first and
              foremost, in the home. Home: our biggest expense of money, time,
              and emotion. We can read reviews about restaurants before we dine,
              we can crowdsource a set of headphones or TV, yet, with our homes,
              we go in virtually blind.
              <br />
              <br />
              ManorLane is here is provide renters, HOA members and anyone
              living at the mercy of other people’s governance, a platform for
              information, transparency, accountability and community.
              <br />
              <br />
              We hope you share your lived experiences from the past and
              present, and learn from others on the site. Let’s create a level
              playing field together so we can all live like nobility, and
              become the lords of our manor.
              <br />
              <br />
              D.C.
              <br />
              ManorLane Founder
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default About;
