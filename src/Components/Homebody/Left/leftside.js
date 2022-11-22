import React from "react";
import { Link } from "react-router-dom";
import splitwiselogo from "../../../Assets/svg/splitwiselogo.svg"
import {HiFlag} from  "react-icons/hi2";
import { VscListUnordered,VscAdd } from "react-icons/vsc";
import "./leftside.css"
import {BsTagFill,BsPersonFill} from "react-icons/bs";
import {ImFacebook,ImTwitter} from "react-icons/im"
import axios from "axios";

function Leftside(){

    axios.get()
    return(
        <>
        <div className="flex flex-col">
        <Link to="/dashboard">
                <button  className="plainbtn dashboardbtn button-white"><img src={splitwiselogo} alt="" className="splitlogo-img"></img>Dashboard</button>
          </Link>
          <Link to="/activity">
            <button  className="plainbtn recentbtn button-white"><HiFlag/><span>  Recent activity</span></button>
          </Link>
            <div className="expense">
                <Link to="/all">
                <button  className="plainbtn allexpbtn button-white"><VscListUnordered/> All Expense</button>
                </Link>
                <div className="group flex flex-col">
                    <div className="header flex">
                    Group
                   <button className="addbtn plainbtn button-white ">
                    <VscAdd/>
                    add
                   </button>
                    </div>
                    <div className="content-grp">
                        <Link to="/group"><button className="plainbtn button-white">
                         <BsTagFill/>
                         Simplyfy</button></Link>
                     
                    
                    </div>
                  
                </div>
                <div className="friends">
                <div className="header flex">
                     Friends
                   <button className="addbtn button-white plainbtn ">
                    <VscAdd/>
                    add
                   </button>
                    </div>
                    <div className="content-frnd">
                        <Link to="/friends">     <button className="plainbtn button-white">
                         <BsPersonFill/>
                         Harini G</button></Link>
                
                    
                    </div>

                </div>
            </div>
            <div className="invite-friends">
               <div className="header-frnd">
                  Invite friends
               </div>
               <div className="invite-details">
                <input className="input-invite" placeholder="Enter the email address"></input>
                <button className="send-invite"> Send invite</button>

               </div>
            </div>
            <div className="flex btns-sm">
                <button className="fbbtn ">
                    <ImFacebook/>
                     Share</button>
                <button className="tweetbtn">
                    <ImTwitter/> 
                    Tweet</button>

            </div>
        </div>
         
        </>
    )
} 

export default Leftside;