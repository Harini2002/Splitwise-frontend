import React from "react";
import "./group.css";
import avatar from "../../../Assets/images/avatar.png"

function Groupcenter(){
    return(
        <>
      <div className="group-header flex">
            
            <div className="group-content flex">
            <img src={avatar} className="group-icon" alt=""></img>
            <h3 >Simplyfy</h3>
            </div>
            <div className="btn-div flex">  
            <button className="group-expense-btn">Add an expense</button>
            <button className="group-settle-btn">Settle up</button>
            </div>
           

        </div>
      
        </>
    )
}
export default Groupcenter;