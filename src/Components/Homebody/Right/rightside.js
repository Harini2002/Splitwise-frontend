import React from "react";
import "./rightside.css";
import Commonright from "./commonright";
import Expenseright from "./expenseright";
import Friendright from "./friendright";
import Groupright from "./groupright";
import {ImFacebook,ImTwitter} from "react-icons/im"

function Rightside({to}){

    let right={
        "all":<Expenseright/>,
        "dashboard":<Commonright/>,
        "activity":<Commonright/>,
        "group":<Groupright/>,
        "friends":<Friendright/>
        
      }
    return(
        <>
        <div >
            
            {right[to]}

            <div className="add-content-div">
                <h2>HEY THERE!</h2>
                <div className="add-content">
                  <p>
                It looks like you use an ad blocker. That,s cool! So do we :)
                </p>
                <p>
                Please support Splitwise by telling your friends about us!
                </p>
                <div className="right-side flex flex-col">
                <button className="fbbtn ">
                    <ImFacebook/>
                     Share</button>
                <button className="tweetbtn">
                    <ImTwitter/> 
                    Tweet</button>

                </div>
                </div>
                
            </div>  
        </div>
       
        </>
    )
}
 export default Rightside;