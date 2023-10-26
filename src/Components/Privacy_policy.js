import React from "react";
import TopNavbar from "./TopNavbar";
import { Link } from "react-router-dom";

const Privacy_policy = () => {
  return (
    <>
      <TopNavbar />
      <div className="container mt-4 mb-5" style={{backgroundColor: "rgba(217, 217, 217, 0.10)"}}>
        <div
          className="ml-lg-0 ml-md-0 ml-2 mr-2"
          style={{
            borderRadius: "10px",
            border: "0.5px solid rgba(0, 0, 0, 0.20)",
            background: "#FFF",
          }}
        >
          <div className="row mb-3 ">
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
                Privacy Policy
              </h6>

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
                Last Updated: December 2023 <br />
                ManorLane ("we," "us," or "our") is committed to protecting your
                privacy. This Privacy Policy is designed to help you understand
                how we collect, use, and safeguard your information when you use
                our website and services. By accessing or using our website, you
                consent to the practices described in this Privacy Policy.
              </p>
              <h6
                style={{
                  color: "#000",
                  fontFamily: "'Open Sans',sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "206.682%",
                }}
              >
                1. Information We Collect:
              </h6>

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
                We collect the following types of information from users of our
                website: <br />
                a. Personal Information: When you register for an account, we
                may collect personal information such as your name, email
                address, and any other information you choose to provide. <br />
                b. Reviews and Content: Users may submit reviews and other
                content related to landlord-owned properties and property
                managers, which may include personal experiences, opinions, and
                ratings. <br />
                c. Usage Data: We collect information about how you use our
                website, including your interactions with content, messages, and
                other users. <br />
                d. Device Information: We collect information about the devices
                you use to access our website, such as your IP address, browser
                type, and operating system.
              </p>
              <h6
                style={{
                  color: "#000",
                  fontFamily: "'Open Sans',sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "206.682%",
                }}
              >
                2. How We Use Your Information:
              </h6>

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
                We use the information we collect for the following purposes:{" "}
                <br />
                a. Providing Services: We use your personal information to
                create and manage your account, and to provide you with access
                to our services, including the ability to submit reviews,
                communicate with other users, and access content. <br />
                b. Communications: We may use your email address to send you
                updates, notifications, and important information related to our
                services. <br />
                c. Improving and Customizing Services: We use your information
                to understand how our website is used and to improve the user
                experience. This may include personalizing content and features.{" "}
                <br />
                d. Safety and Security: We may use your information to verify
                your identity, monitor and prevent fraudulent or illegal
                activities, and ensure the safety and security of our community.
              </p>
              <h6
                style={{
                  color: "#000",
                  fontFamily: "'Open Sans',sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "206.682%",
                }}
              >
                3. Sharing Your Information:
              </h6>

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
                We may share your information with the following parties: <br />
                a. Other Users: Certain information, such as your reviews,
                username, and profile picture, may be visible to other users of
                our website. <br />
                b. Service Providers: We may share your information with
                third-party service providers who assist us in providing our
                services, including hosting, analytics, and customer support.{" "}
                <br />
                c. Legal Compliance: We may share your information in response
                to legal requests or as required by law to protect our rights,
                privacy, safety, or property. <br />
                d. Business Transfers: In the event of a merger, acquisition, or
                sale of all or a portion of our assets, your information may be
                transferred as part of the transaction.
              </p>
              <h6
                style={{
                  color: "#000",
                  fontFamily: "'Open Sans',sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "206.682%",
                }}
              >
                4. Your Choices:
              </h6>

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
                You have the following choices regarding your information:{" "}
                <br />
                a. Account Information: You can access and update your account
                information by logging into your account settings. b.
                Communications: You can opt out of receiving certain email
                communications by following the instructions in those emails.{" "}
                <br />
                c. Deactivation: You may deactivate your account by contacting
                us. Please note that certain information may be retained in our
                archives.
              </p>
              <h6
                style={{
                  color: "#000",
                  fontFamily: "'Open Sans',sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "206.682%",
                }}
              >
                5. Data Security:
              </h6>

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
                We take reasonable measures to protect your information, but no
                method of transmission over the internet or electronic storage
                is 100% secure. We cannot guarantee the security of your
                information.
              </p>
              <h6
                style={{
                  color: "#000",
                  fontFamily: "'Open Sans',sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "206.682%",
                }}
              >
                6. Changes to this Privacy Policy:
              </h6>

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
                We may update this Privacy Policy to reflect changes to our
                practices or for other operational, legal, or regulatory
                reasons. If we make material changes, we will provide notice on
                our website or through other means.
              </p>
              <h6
                style={{
                  color: "#000",
                  fontFamily: "'Open Sans',sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "206.682%",
                }}
              >
                7. Contact Us:
              </h6>

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
                If you have any questions, concerns, or feedback about this
                Privacy Policy, please &nbsp;
                <Link
                  to="/contact"
                  style={{
                    color: "#1E81C4",
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "206.682%",
                    textDecoration: "underline",
                  }}
                >
                  Contact us.
                </Link>
              </p>
              <h6
                style={{
                  color: "#000",
                  fontFamily: "'Open Sans',sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "206.682%",
                }}
              >
                8. Consent to Privacy Policy:
              </h6>

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
                By using our website, you agree to the terms and conditions of
                this Privacy Policy. If you do not agree to this Privacy Policy,
                please do not use our website. <br />
                Thank you for using ManorLane. We value your trust and are
                committed to protecting your privacy. <br />
                ManorLane, LLC
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy_policy;
