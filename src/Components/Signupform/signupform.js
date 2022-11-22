import React from "react";
import './signupform.css';
import { Link, Navigate } from "react-router-dom";
import axios from"axios";

import logo from '../../Assets/svg/splitwiselogo.svg'
import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { GoogleSignup, LinkTag} from "../Button/button";
import { SelectCurrency } from "../FormSelect/select";



 function SignupForm(){

  const sendreq=()=>{
    console.log("inside axios",email,password,username,currency)
        axios.post("http://localhost:5000/auth/signup",{
        user_name:username,
        password:password,
        email:email,
        currency:currency,
       }).then((res)=>{
        
        localStorage.setItem("jwt",res.data.accessToken);
        localStorage.setItem("user_details", JSON.stringify(res.data.userdetails));
        localStorage.setItem("account_details", JSON.stringify(res.data.account_details));
        localStorage.setItem("notification_details", JSON.stringify(res.data.notification_details));
        localStorage.setItem("newuser",res.data.userdetails.newuser);
    
       
        
        
        setRender(true)
        // navigate("/#/dashboard", {
          
        // })
      })
      .catch((error)=> {
        console.log(error);
      });
  }
    
  const [username, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword]=useState();
  const [currency,setCurrency]=useState();
  const [render,setRender]=useState(false)

  // const navigate = useNavigate();

  const validateEmail=(email)=> {

    let regularExpression  =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if(!regularExpression.test(email)) {
        alert("Invalid Email");
        return false;
       
    }
      return true
    
   }
   const validateUsername=(user_name)=> {
    let regularExpression  = /^[a-z0-9_-]{3,16}$/;
    if(!regularExpression.test(user_name)) {
        alert("Invalid Username");
       return false
    }
  
      return true;
    
}
const validatePassword=(password)=> {

    let regularExpression  =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(!regularExpression.test(password)) {
        alert("Invalid password");
        return false
       
    }
    return true;
}


  const handleName=(e)=>{
     setName(e.target.value)
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleCurrency=(e)=>{
    setCurrency(e.target.value)
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    if (validateEmail(email) && validatePassword(password) && validateUsername(username) ){
        sendreq();
        console.log("valid")

  }}


    return(
    <>
    <div className="wrapper flex">
    <Link to="/home"> <img  src={logo} alt="splitwise logo" style={{marginRight:"25px"}}></img></Link>
    <div className="formblock">
        <h2>INTRODUCE YOURSELF</h2>
        <form className="sign-up">
            <div className="greeting">
            Hi there! My name is
            </div>
            <input type="text" onChange={handleName} name="user[name]" id="user_name"></input>
            <div className="secondaryDetails font-14">
                <div>
                Here's My <strong>email address</strong> : 
               <br/>
               <input  type="email" onChange={handleEmail} name="user[email]" id="user_email"></input>
                </div>
             
               <div>
           And here's my <strong>password</strong>:
           <br/>
          <input  type="password" onChange={handlePassword} name="user[password]" id="user_password"></input>
          </div>
            </div>
           
          <div className="font-14" id='currency'>
            And here's the <strong>currency</strong> that I use:
            <br/>
            <SelectCurrency className="signup" onChange={handleCurrency}/>
          </div>
          <div className="flex ">
            <div>
            <input type="submit" onClick={handleSubmit} value="Sign me up!"></input>
            </div>
            <div className="flex item-center">
               <p style={{fontSize:"11px" ,color:"#999",marginRight:"5px",marginLeft:"15px"}}>or</p>
                <GoogleSignup />
            </div>
          </div>
          <div>
             <LinkTag classname="tos" to="/terms" value="By signing up, you accept the Splitwise Terms of Service.
             "/>
          </div>
          <div style={{fontSize:"12px",color:"#999999"}}className="flex">
          Don't use USD for currency?
          <LinkTag to="/login" classname="clickhere" value="Click here."/>
          </div>
        </form>
        {
          render?<Navigate to='/dashboard' replace={true}/>:<></>
        }
        

    </div>
    </div>
        </>
    )
}

export default SignupForm;