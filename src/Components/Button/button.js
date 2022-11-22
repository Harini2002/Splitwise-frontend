import React from "react";
import "./button.css";
import {Link} from "react-router-dom"
import googlelogo from "../../Assets/images/googlelogo.png"
import {FaPen} from "react-icons/fa"



export function Button(props){
    return(
        <>
        <Link to={props.to}>
        <button className={props.classname}>{props.value}</button></Link>
        </>
    )
}
export function LinkTag(props){
    return(
        <>
        <Link className={props.classname} to={props.to}>{props.value}
        </Link>
        </>
    )
}

export function Loginbtn(){
    return(
        <>
        <Link  to="/login" className="loginbtnlink"><button className="loginbtn">Log in</button></Link>
        </>
    )
}

export function GoogleSignup(){
    return(
        <>
        <Link className="googlebtnlink" >
            <button className="googlesignbtn">
                <span><img src={googlelogo} alt='google-icon' className="googleimg-min"></img> </span> 
            <span>Sign up with Google</span></button></Link>
        </>
    )
}
export function Googlelogin(){
    return(
        <>
        <Link className="googlebtnlink" >
            <button className="googleloginbtn">
                <span><img src={googlelogo} alt='google-icon' className="googleimg"></img> </span> 
            <span>Sign up with Google</span></button></Link>
        </>
    )
}

export function Reviewbtn(props){
    return(
        <>
        <div className="flex review-box">
        <Link className="review" >
            <div className="flex inner-review-box">
                <p>
                 {props.content}
                </p>
                <div className="flex flex-end">
                    <img className="profile"src={props.profile} alt="">
                    </img>
                    <span>
                      {props.name}
                    </span>
                </div>
            </div>
        </Link>
        </div>

        </>
    )
}
export function Editbtn(){
    return(
        <>
        <button className="edit-btn">
            <FaPen/> Edit
        </button>
        </>
    )
}