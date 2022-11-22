import React from "react";
import orange_mascort from  "../../../Assets/images/orange_mascort.png";
import splitwiselogo from  "../../../Assets/svg/splitwiselogo.svg"
import {  LinkTag } from "../../Button/button";
import {IoHome} from "react-icons/io5"
import {GoGlobe} from "react-icons/go"
import "./page.css";
import { Link } from "react-router-dom";

export default function SetupPage(){
   

    const handleskip=()=>{
        localStorage.setItem("newuser",false);
    }
    return(
        <>
        <div className="setup-page-container">
            <div className="setup-page flex">
                
                <img src={orange_mascort} alt="" className="setup-orange-mascort"></img>
                <div className=" flex flex-col item-center">
                    <h1>
                        <img src={splitwiselogo} alt="" className="setup-logo"></img>
                        Welcome to Splitwise!
                    </h1>
                    <div className=" flex flex-col item-center">
                    <p>What would you like to do first?</p>
                    <Link to="/group/new" ><button className="setup-btn btn-orange"><IoHome/> Add your apartment </button></Link>
                    <Link to="/group/new" ><button className="setup-btn btn-orange"><GoGlobe/> Add a group trip </button></Link>
                    <Link  to="/dashboard"><button className="setup-btn btn-grey" onClick={handleskip}>Skip setup for now </button></Link>

                   

     <p className="linkholder">Looking for our fairness calculators? 
      <LinkTag to="/calculator" value="Click here" classname="setup-clickhere"/>.</p> 
                    </div>
                    
                </div>

            </div>


        </div>
        </>
    )
}
