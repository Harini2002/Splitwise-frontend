import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"
import facebook from "../../Assets/images/fb.png";
import twitter from "../../Assets/images/twitter.png"

export default function AccountFooter(){
    return(
        <>
        <div className="acc-footer flex">
            <div className="acc-footer-content flex">

                <div className="flex flex-col">
                    <div className="acc-footer-made-smile">Made with ☻ in Providence, RI, USA</div>
                    <div className="acc-footer-copyrights">Copyright © 2022 Splitwise, Inc. All rights reserved.</div>
                </div>
    
                <div className="acc-footer-links">
                    <div className=" flex justify-right">
                        <Link><img src={facebook} className="account-footer-icon" alt=""></img></Link>
                        <Link><img src={twitter} className="account-footer-icon" alt=""></img></Link>
                    </div>
                    <div className="flex margin-t-5 justify-right">
                        <Link className="acc-footer-links-Link">About</Link>
                        <hr></hr>
                        <Link className="acc-footer-links-Link">Jobs</Link>
                        <hr></hr>
                        <Link  className="acc-footer-links-Link">Calculators</Link>
                        <hr></hr>
                        <Link  className="acc-footer-links-Link">Blog</Link>
                        <hr></hr>
                        <Link  className="acc-footer-links-Link">Terms</Link>
                        <hr></hr>
                        <Link  className="acc-footer-links-Link">Press</Link>
                        <hr></hr>
                        <Link  className="acc-footer-links-Link">API</Link>
                        <hr></hr>
                        <Link  className="acc-footer-links-Link">Contactus</Link>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}