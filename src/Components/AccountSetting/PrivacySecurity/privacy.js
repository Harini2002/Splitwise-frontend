import React from "react";
import "./privacy.css";
import { Button } from "../../Button/button";

export default function PrivacySection(){
    return(
        <>
        <div className="privacy">
        <h2>Privacy & Security </h2>
        <div className="flex privacy-col ">
            <div className="privacy-btn-div">
             <button className="privacy-btn">Your apps</button>
            </div>
            <div className="privacy-btn-div">
             <button className="privacy-btn">Recent visits</button>              
            </div>
            <div className="privacy-btn-div">
             <button className="privacy-btn">Logout of all devices</button>
            </div>
            <div className="privacy-btn-div">
             <button className="privacy-btn">Manage your blocklist</button>
            </div>
        </div>
        <div className="flex privacy-checkbox">
            <input type="checkbox" className="smallcheckbox"></input>
            <label>
              Allow other Splitwise users who have my email address or phone number in their contact book to see that I use Splitwise
            </label>
        </div>
        <div className="save-btn">
        <Button to="" value="Save" classname="save-btn-orange"/>
        </div>

        </div>
        </>
    )
}