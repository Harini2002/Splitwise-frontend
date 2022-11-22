import React from "react";

import "./body.css"
import Activitycenter from "./Center/activity";
import Dashboardcenter from "./Center/dashboard";
import Expensecenter from "./Center/expense";
import Friendscenter from "./Center/friends";
import Groupcenter from "./Center/group";
import Leftside from "./Left/leftside";


import Rightside from "./Right/rightside";


function HomeBody({to}){

     let center={
      "all":<Expensecenter/>,
      "dashboard":<Dashboardcenter/>,
      "activity":<Activitycenter/>,
      "group":<Groupcenter/>,
      "friends":<Friendscenter/>
      }
    
    
return(
    <>
    
    <div className="default">

    </div>
    <div className="container flex">
        
        <div className="leftside">
          <Leftside/>
        </div>


        <div className="center">
            {center[to]}
        </div>


        <div className="rightside">
          <Rightside to={to}/>
        </div>
    </div>
    </>
)
}

export default HomeBody;