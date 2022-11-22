import React from "react";
import { LinkTag } from "../Button/button";
import "./body.css";

export default function Body(){
    return(
        <>
        <div className="contact-body">
            <div className="contact-container flex flex-col">
                <h1>Contact support</h1>
                <div className="flex">
                    <div className=" width-50">
                       <h3> ✉️ Email</h3>
                       <p>
                           <LinkTag classname="contact-links" value="support@splitwise.com"/>
                       </p>
                       <p className="contact-email-description">
                       We aim to reply to most support requests within 1 business day.
                       </p>
                    </div>
                    <div className=" width-50">
                    <h3>❓ Frequently asked questions</h3>
                       <p>
                           <LinkTag classname="contact-links" to="http://feedback.splitwise.com"value="http://feedback.splitwise.com"/>
                       </p>
                       <p className="contact-email-description">
                       We aim to reply to most support requests within 1 business day.
                       </p>

                    </div>

                </div>

            </div>
        </div>
        </>
    )
}