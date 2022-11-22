import React from "react";
import "./activity.css";
import activity_profile from "../../../Assets/images/dept.png"
import user_profile from "../../../Assets/images/profile.jpeg"


function Activitycenter(){
    let activity={
        "type":"added",
        "user":"You",
        "to":"",
        "description":"Settle all balance",
        "amount":500,
        "time":"yesterday",
        "amount_type":"owe"
    }
    let phrase
    let amount_description

    if (activity.type==="added"){
        phrase=`  added  "${activity.description}"`
        amount_description=`You owe Rs. ${activity.amount}`
    }
    else if(activity.type==="paid"){
        phrase=` paid ${activity.to}`
    }
    else if(activity.type==="added-group"){
        phrase=`added ${activity.description} in ${activity.group}`
    }

    return(
        <>
           <div className="activity-header flex">
            <div className="activity-content ">
            <h3>Recent activity</h3>
            </div>
            </div>

             <div className="activity-body">
                <div className="activity-details flex">
                <div className="relative margin-left-20"> 
                <img src={activity_profile} className="activity-profile" alt=""></img>
                <img src={user_profile} alt="" className="user_profile absolute"></img>
                </div>

                <div>
                    <p className="font-14 font-3-black"><b>{activity.user}</b> {phrase}</p>
                    <p className="font-14 font-orange margin-bottom-5">{amount_description}</p>
                    <p className="font-11 font-grey">{activity.time}</p>
                </div>

                </div>
           

             </div>
        </>
    )
}
export default Activitycenter;