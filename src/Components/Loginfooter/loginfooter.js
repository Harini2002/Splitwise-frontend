import React from "react";
import mountain from '../../Assets/svg/loginfooter.svg';
import prologo from '../../Assets/svg/pro-feature.svg';
import instalogo from '../../Assets/svg/insta.svg';
import fblogo from '../../Assets/svg/facebook.svg';
import twitterlogo from '../../Assets/svg/twitter.svg';
import googleplay from '../../Assets/svg/googleplay.svg';
import appstore from '../../Assets/svg/appstore.svg';
import { Link } from "react-router-dom";
import { LinkTag } from "../Button/button";
import   './loginfooter.css';

function Loginfooter(){
    return (
        <>
            <footer>
                <div className="footerrow flex">
                    <div className="lists flex">
                        <div className="splitwise">
                        <p>Splitwise</p>
                        <ul>
                           <li><LinkTag to="/about" classname="listvalue" value="About"/></li>
                           <li><LinkTag to="/press" classname="listvalue" value="Press"/></li>
                           <li><LinkTag to="/blog" classname="listvalue" value="Blog"/></li>
                           <li><LinkTag to="/jobs" classname="listvalue" value="Jobs"/></li>
                           <li><LinkTag to="/calculator" classname="listvalue" value="Calculators"/></li>
                           <li><LinkTag to="/api" classname="listvalue" value="API"/></li>
                        </ul>
                        </div>
                        <div className="account ">
                        <p>Account</p>
                        <ul>
                           <li><LinkTag to="/about" classname="listvalue" value="Log in"/></li>
                           <li><LinkTag to="/about" classname="listvalue" value="Sign up"/></li>
                           <li><LinkTag to="/about" classname="listvalue" value="Reset password"/></li>
                           <li><LinkTag to="/about" classname="listvalue" value="Settings"/></li>
                           <li><img src={prologo} alt="diamond"></img><LinkTag to="/about" classname="listvalue" value="Splitwise Pro"/></li>
                        </ul>
                        </div>
                        <div className="more">
                        <p>More</p>
                        <ul>
                           <li><LinkTag to="/contact" classname="listvalue" value="Contact us"/></li>
                           <li><LinkTag to="/about" classname="listvalue" value="FAQ"/></li>
                           <li><LinkTag to="/about" classname="listvalue" value="Terms of Service"/></li>
                           <li><LinkTag to="/about" classname="listvalue" value="Privacy Policy"/></li>
                           <li><LinkTag to="/calculator" classname="listvalue" value="Calculators"/></li>
                           <li><Link to="https://twitter.com/splitwise" ><img src={twitterlogo}  style={{paddingRight:"4px"}} alt='twitterlogo'></img></Link>
                               <Link to="https://www.facebook.com/splitwise"><img src={fblogo}  style={{paddingRight:"4px"}} alt='facebook logo'></img></Link> 
                               <Link to="https://www.instagram.com/splitwise/"><img src={instalogo} style={{paddingLeft:"4px"}} alt='insta logo'></img></Link>
                           </li>
                        </ul>
                        
                        </div>

                    </div>
                    <div className="applist flex">
                        <div className="apps">
                            <Link to=""><img src={googleplay} alt="google play logo" style={{marginRight:"4px"}}></img></Link>
                            <Link to=""><img src={appstore} alt="app store logo" style={{marginLeft:"4px"}}></img></Link>
                        </div>
                        <p className="appspara flex"> Made with :) in Providence, RI, USA</p>

                    </div>

                </div>
                <div>
                <img src={mountain} alt='mountain'></img>
                </div>
            </footer>
        </>
    )
}


export default Loginfooter;