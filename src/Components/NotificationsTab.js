import React from 'react'
import TopBar from './TopNavbar'
import RightBar from './RightSidebar'
import Sidebar from './SideBar'
import Notifications from './Notifications'

const NotificationsTab = () => {
  return (
    <>
    <TopBar/>
      <div className="container-fluid pt-4" style={{backgroundColor: "rgba(217, 217, 217, 0.10)"}}>
                
          <div className="row" style={{width:"100%"}}>
            <div className="col-lg-3 col-md-3 "style={{width:"100%"}} >
              <Sidebar/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 ml-lg-0 ml-md-0 ml-3"  style={{width:"100%"}}>
               <Notifications/>
                
            </div>
            <div className="col-lg-3 col-md-3 " >
              <RightBar/>
            </div>
            
            
          </div>
      </div>
      </>
  )
}

export default NotificationsTab
