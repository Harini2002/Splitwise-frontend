import React from "react";
import "./featurediv.css"
import planeicon from "../../Assets/svg/home-plane-icon.svg";
import homeicon from "../../Assets/svg/home-house-icon.svg";
import hearticon from "../../Assets/svg/home-heart-icon.svg";
import staricon from "../../Assets/svg/home-star-icon.svg";
import applelogo from "../../Assets/svg/applelogo.svg";
import androidlogo from "../../Assets/svg/androidlogo.svg";
import planegif from "../../Assets/gif/plane.gif";
import { Link } from "react-router-dom";
import { Button } from "../Button/button";



export default function Featurediv(){
    return(
        <> 
        <div className="flex feature-div">
            <div className="feature-div-content">
                <h1>
                <span>
                Less stress when sharing expenses </span>
                <span>on trips.</span>
                </h1>
               
                <ul className="flex">
                <li>
                     <Link to=""><img src={planeicon} className="icon"alt=""></img></Link>
                </li>
                <li>
                    <Link to=""><img src={homeicon} className="icon"alt=""></img></Link>
                </li>
                <li>
                    <Link to=""><img src={hearticon}className="icon" alt=""></img></Link>
                </li>
                <li>
                     <Link to=""><img src={staricon} className="icon"alt=""></img></Link>
                </li>
               </ul>
               
           
                <p>
                Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.
                </p>
                <Button to="/signup" classname="changing-signup" value="Sign up"/>
                <div className="app-availablity">
                    <p>Free for
                        <Link to="" className="linktag"><img src={applelogo} alt=""></img>iphone</Link>
                        <Link to=""  className="linktag"><img src={androidlogo} alt=""></img>Android</Link>
                        ,and web.

                    </p>

                </div>
           </div>
           <div className="feature-div-img">
              <img src={planegif} className="image"alt=""></img>
           </div>
        </div>
         
        </>
    )
}