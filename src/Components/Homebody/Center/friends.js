import React from "react";
import "./friends.css"
import profile from "../../../Assets/images/profile.jpeg"

function Friendscenter(){
    return(
        <>
        <div className="friend-header flex">
            
            <div className="friend-content flex">
            <img src={profile} className="profile-icon" alt=""></img>
            <h3 >Harini G</h3>
            </div>
            <div className="btn-div flex">  
            <button className="friend-expense-btn">Add an expense</button>
            <button className="friend-settle-btn">Settle up</button>
            </div>
           

        </div>
        </>
    )
}

export default Friendscenter;