import React from "react";
import { BsList } from "react-icons/bs";
import {RiBarChartBoxLine} from "react-icons/ri";
import UserDisplayer from "../DashboardFeature/dashboardfeature";
import "./dashboardbody.css"

function DashboardBody(){
    
    let user={
        "type":"owed",
        "name":"Inirah",
        "amount":500

    }
    let user1={
        "type":"owe",
        "name":"Hari",
        "amount":200
    }
    return(
        <>
            <div className="dashboard-body">

<div className="dashboard-body-title flex">
    <p>You owe</p>
    <div className="dashboard-body-btn-div flex">
    <button className="view-list-btn flex">
        <div className="icon-holder" > <BsList/></div>
     
      view as list
    </button>
    <button className="view-right-btn flex">
     <div className="icon-holder"><RiBarChartBoxLine/></div>
     view as chart
    </button>
    </div>
    <p>you are owed</p>
</div>
<div className="flex list-holder">
<div className="db-body-owe-list">
   <UserDisplayer user={user1}/>
</div>
<div className="db-body-owed-list">
    <UserDisplayer user={user}/>
</div>
</div>



</div>
</>
    )
}

export default DashboardBody;