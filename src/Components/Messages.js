import React from "react";

const Messages = () => {
  return (
    <div className="messages_comp">
              <h6 className="my_messages mb-4 ml-3 mt-4">Messages</h6>

        <div className="row  ml-1 mr-1">

          <div className="col-6">

            <div >
              <div className="messages_links mb-5" style={{ height: "500px" }}>
                <div className="mt-3">
                <a className="inbox mr-4 "  href="/inbox">
                  Inbox
                </a>
                <a className="archive " href="/archive">
                  Archive
                </a>
                <a href="/write_msg"><img src="/msg_icon.png" className="msg_icon img-fluid " alt="" /></a>
              </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              className="d-flex flex-column justify-content-center align-items-center mb-5"
              id="msg"
              style={{ height: "500px" }}
            >
              <img src="/chat-icon.png" className="chat_icon img-fluid" alt="" /><br />
              <b style={{fontSize:"16px",textAlign:"center"}}>No messages yet</b><br />
              <p className="ml-2">Send a message to get the conversation started</p>
              <button className="btn btn-success" style={{width:"70%"}}>Send Message</button>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Messages;
