import React from "react";
import "./details.css";
import profile from "../../../Assets/images/profile.jpeg"
import pro_account_logo from "../../../Assets/svg/pro-feature.svg"
import { SelectCurrency, SelectLanguages, SelectTimezone } from "../../FormSelect/select";
import { Button, Editbtn } from "../../Button/button";



function Details(){
    let userdetails={
        "name":"Harini G",
        "email":"hariini1234@gmail.com",
        "phone":"None",
        "password":"********"

    }
    
    return(
        <>
        <div className="details flex flex-col">
         <h2>Your account</h2>
         <div className="flex row-container ">
            <div className="profile-pic-holder margin-left-14 flex flex-col ">
                <img className="account-profile margin-b-5"src={profile} alt=""></img>
               <p>Choose your avatar</p>
                <div className="flex margin-t-5 ">
                    <input className="font-sixe-9 padding-4 margin-r-5" type="file"></input>
                {/* <button className="font-sixe-9 padding-4 margin-r-5">Choose file</button> */}
                </div>
            </div>
            <div className="primary-details margin-left-14 width-25">
               <label>Your name</label>
               <div className="static-value margin-b-10 margin-t-5">
                <p><strong>{userdetails.name}</strong><Editbtn/></p>
                </div>
               <div className="input-value hide margin-b-10 margin-t-5">
                <input type="text" placeholder={userdetails.name}></input>
               </div>
               <label>Your email address</label>
               <div className="static-value margin-b-10 margin-t-5">
                <p><strong>{userdetails.email}</strong><Editbtn/></p>
                </div>
               <div className="input-value hide margin-b-10 margin-t-5">
                <input type="text" placeholder={userdetails.email}></input>
               </div>
               <label>Your phone number</label>
               <div className="static-value margin-b-10 margin-t-5">
                <p><strong>{userdetails.phone}</strong><Editbtn/></p>
                </div>
               <div className="input-value hide margin-b-10 margin-t-5">
                <input type="text" placeholder={userdetails.phone}></input>
               </div>
               <label>Your password</label>
               <div className="static-value margin-b-10 margin-t-5">
                <p>{userdetails.password}<Editbtn/></p>
                </div>
               <div className="input-value flex flex-col hide margin-b-10 margin-t-5">
                <label>Your current password</label>
                <input type="password" ></input>
                <label>Create new password</label>
                <input type="password" ></input>
               </div>

            </div>
            <div className="additional-details flex flex-col margin-left-16 width-25">
                <label>Your default currency</label>
                 <p></p>
                <SelectCurrency className="acc-select"/>
                <label>Your time zone</label>
                <SelectTimezone className="acc-select"/>
                <label>Language</label>
                <SelectLanguages className="acc-select"/>
                <label>You are connected with Google</label>
                <button className="google-connect">Disconnect you external accounts</button>

            </div>
            <div className="flex flex-col margin-left-16 width-25">
                <div className="pro-account-ad ">
                    <div  className="flex">
                        <img src={pro_account_logo} alt=""></img>
                        <h4>
                            GET SPLITWISE PRO!
                        </h4>
                        
                    </div>
                    <div  >
                        Subscribe to <strong>Splitwise Pro</strong> for charts, search, an ad-free experience, and more!
                    </div>
                    <Button to="" value="Get Splitwise Pro!" classname="get-pro-violet"/>

                </div>
             

            </div>
              
         </div>
         <div className="save-btn">
                    <Button to="" value="Save" classname="save-btn-orange"/>
                </div>
        </div>
        </>
    )
}

export default Details;