import React from "react";
import "./dashboardfeature.css"
import profile from "../../Assets/images/avatar.png"
import { Link } from "react-router-dom";

export default function UserDisplayer({user}){
   

    let phrase="owes you Rs."
    if (user.type==="owe flex user-block"){
        phrase="you owe Rs."
    }
    user.type=`${user.type} flex user-block`
    return(
        <>
        <Link className="no-decoration">
        <div className={user.type}>
            <img src={profile} className="profile"alt=""></img>
            <div className="user-content font-12 text-black">
              {user.name}
                <p>{phrase}{user.amount}</p>
            </div>
        </div></Link>
      
        </>
    )
}



