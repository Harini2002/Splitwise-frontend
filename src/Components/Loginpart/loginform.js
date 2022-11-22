import React from "react";
import "./loginform.css";
import {Loginbtn,LinkTag, Googlelogin} from "../Button/button.js"
import{HrRule} from "../Horizondal rule/hr.js"
// import {logo} from "../../Assets/images/logo png"

function LoginForm(){
  

    return (
        <>
        <div className="logindiv" >
            <div className="innerlogin" >
              <div className="formdiv">
              <div className="loginname">
                    Log in
                </div>
            <form className="login-form">
              
              <label>Email address</label>
             
              <div>
              <input type="text" id="email" name="Email address" ></input>     
                </div>
                <div>
                <label>Password</label>
                </div>
                <div>
                <input type="text" id="password" name="Password" ></input> 
                </div>
                <div className="loginbtndiv">
                  <Loginbtn/>
                </div>
            </form>
            <div>
              <LinkTag to="/resetpassword" classname="forgotpassword" value="Forgot your password ?"/>
            </div>
            <div className="hrorhr">
            <div>
              <HrRule/>
            </div>
            <div>
              or
            </div>
            <div>
              <HrRule/>
            </div>
            </div>
            <div>
              <Googlelogin/>
            </div>

              </div>
      
            </div>
         
        </div>
        </>
    )
}

export default LoginForm;