import React from "react";
import AdditionalFeature from "./AdditionalFeature/additional";
import "./body.css";
import Details from "./Details/details";
import AccountNotification from "./Notification/notification";
import PrivacySection from "./PrivacySecurity/privacy";

function Body(){
    return(
        <>
        <div className="account-container flex flex-col">

        <Details/>
        <hr className="hr"></hr>
        <AccountNotification/>
        <hr className="hr"></hr>
        <PrivacySection/>
        <hr className="hr"></hr>
        <AdditionalFeature/>
        </div>
        </>
    )
}

export default Body;