import React from "react";
import "./notification.css";
import { Button } from "../../Button/button";
import mail_icon from "../../../Assets/images/mail.png"

export default function AccountNotification(){
    return (
        <>
        <div className="notification">
            <h2>Notifications</h2>
            <div className="notification-row-wrap flex">
                <div className="notify-row-1 notify-row">
                 <h4>GROUPS AND FRIENDS</h4>
                 <ul>
                    <li><span>When someone adds me to a group</span>
                         <label>  
                         <input type="checkbox" value="1"></input>
                         <img src={mail_icon} alt="" className="mail-icon"></img>
                         </label>
                    </li>
                    <li><span>When someone adds me as a friend</span>
                    <label>  
                         <input type="checkbox" value="1"></input>
                         <img src={mail_icon} alt="" className="mail-icon"></img>
                         </label>
                    </li>
                 </ul>
                </div>
                <div className="notify-row-2 notify-row ">
                    <h4>EXPENSE</h4>
                    <ul>
                        <li><span>When an expense is addded</span>
                        <label>  
                         <input type="checkbox" value="1"></input>
                         <img src={mail_icon} alt="" className="mail-icon"></img>
                         </label>
                        </li>
                        <li><span>When an expense is edited/deleted</span>
                        <label>  
                         <input type="checkbox" value="1"></input>
                         <img src={mail_icon} alt="" className="mail-icon"></img>
                         </label>
                        </li>
                        <li><span>When someone comments on an expense</span>
                        <label>  
                         <input type="checkbox" value="1"></input>
                         <img src={mail_icon} alt="" className="mail-icon"></img>
                         </label>
                         </li>
                        <li><span>When an expense is due</span>
                        <label>  
                         <input type="checkbox" value="1"></input>
                         <img src={mail_icon} alt="" className="mail-icon"></img>
                         </label>
                        </li>
                        <li><span>When someone pays me</span>
                        <label>  
                         <input type="checkbox" value="1"></input>
                         <img src={mail_icon} alt="" className="mail-icon"></img>
                         </label>
                        </li>
                    </ul>
                </div>
                <div className="notify-row-3 notify-row">
                    <h4>NEWS AND UPDATES</h4>
                    <ul>
                        <li><span>Monthly summary of my activity</span>
                        <label>  
                         <input type="checkbox" value="1"></input>
                         <img src={mail_icon} alt="" className="mail-icon"></img>
                         </label>
                        </li>
                        <li><span>Major Splitwise news or updates</span>
                        <label>  
                         <input type="checkbox" value="1"></input>
                         <img src={mail_icon} alt="" className="mail-icon"></img>
                         </label>
                        </li>
                    </ul>
                    <div className="save-btn">
                    <Button to="" value="Save" classname="save-btn-orange"/>
                   </div>
                </div>

            </div>

        </div>
        </>
    )
}