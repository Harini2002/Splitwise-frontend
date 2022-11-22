import React from "react";

import splitlogotext from '../../Assets/svg/splitlogotext.svg'
import {Button,LinkTag} from "../Button/button.js"
import "./navbar.css"

function Navbar(){
 
return (
    <>
    <div>
    <header>
    <div className="navbar">
        <div className="flex splitlogo-div">
            <img src={splitlogotext} alt="splitlogo" className="split-logo"></img>
         
        </div>
        <div>
        
             <LinkTag to="/login" classname="loginlink" value="Log in"/>
             <Button to="/signup" classname="signupbtn" value="Sign up"/> 
         
        </div>
         
    </div>
    </header>
  
</div>
    </>

)
}

export default Navbar;