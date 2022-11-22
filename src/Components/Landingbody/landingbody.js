import React from "react";
import "./landingbody.css";
import feature1 from "../../Assets/images/feature1.png"
import feature2 from "../../Assets/images/feature2.png"
import feature3 from "../../Assets/images/feature3.png"
import feature4 from "../../Assets/images/feature4.png"
import feature5 from "../../Assets/images/feature5.png"
import review1 from "../../Assets/images/review1.png"
import review3 from "../../Assets/images/review3.png"
import review5 from "../../Assets/images/review5.png"
import Featurediv from "./featurediv.js"


import AppFeature from "../Appfeature/appfeature";
import { Button, Reviewbtn } from "../Button/button";
import { Corefeature, Profeature } from "../Homefeature/corefeature";

function Landingbody(){
    return(
        <>
        <div className="homediv">
           <Featurediv/>

        </div>
        <div className="flex f-holder">
        <AppFeature className="feature1" title="Track balance" 
           content="Keep track of shared expenses, balances, and who owes who."
           img={feature1}/>
        <AppFeature className="feature2" title="Organize expenses" 
           content="Split expenses with any group: trips, housemates, friends, and family."
           img={feature2}/>
        </div>
        <div className="flex">
        <AppFeature className="feature3" title="Add expenses easily" 
           content="Quickly add expenses on the go before you forget who paid."
           img={feature3}/>
        <AppFeature className="feature4" title="Pay friends back" 
           content="Settle up with a friend and record any cash or online payment."
           img={feature4}/>
        </div>
        <div className="flex feature5 ">
            <div className="feature-content">
            <h1 className="title">Get even more with PRO</h1>
          <p className="content">
          Get even more organized with receipt scanning, charts and graphs, currency conversion, and more!
          </p>
          <Button to="/signup" classname="home-signup" value="Sign up"/>
            </div>
            <div className="img-div flex">
            <img className="img-feature" src={feature5} alt="feature"></img>
            </div>
          
        </div>
        <div className="core-pro flex">
            <h1  >The whole nine yards</h1>
            <div className="flex feature-list">
            <ul>
                <li><Corefeature value="Add groups and friends"/></li>
                <li><Corefeature value="Split expenses, record debts"/></li>
                <li><Corefeature value="Equal or unequal splits"/></li>
                <li><Corefeature value="Split by % or shares"/></li>
                <li><Corefeature value="Calculate total balances"/></li>
                <li><Corefeature value="Suggested repayments"/></li>
                <li><Corefeature value="Simplify debts"/></li>
                <li><Corefeature value="Recurring expenses"/></li>
            </ul>
            <ul>
                <li><Corefeature value="Offline mode"/></li>
                <li><Corefeature value="Cloud sync"/></li>
                <li><Corefeature value="Spending totals"/></li>
                <li><Corefeature value="Categorize expenses"/></li>
                <li><Corefeature value="Easy CSV exports"/></li>
                <li><Corefeature value="7+ languages"/></li>
                <li><Corefeature value="100+ currencies"/></li>
                <li><Corefeature value="Payment integrations"/></li>
            </ul>
            <ul>  
                <li><Profeature value="A totally ad-free experience"/></li>
                <li><Profeature value="Currency conversion"/></li>
                <li><Profeature value="Receipt scanning"/></li>
                <li><Profeature value="Itemization"/></li>
                <li><Profeature value="Charts and graphs"/></li>
                <li><Profeature value="Expense search"/></li>
                <li><Profeature value="Save default splits"/></li>
                <li><Profeature value="Early access to new features"/></li>
            </ul>
            </div>
            <div className="flex feature-type">
                <div className="padding-r"><Corefeature value="Core feature"/></div>
                <div className="padding-l" ><Profeature value="Pro feature"/></div>
         
                
            </div>


        </div>
        <div className="review-div flex">
          <div className="review-list flex">
            <Reviewbtn content="“Fundamental” for tracking finances. As good as WhatsApp for containing awkwardness."
             profile={review1} name="Financial Times"/>
            <Reviewbtn content="Life hack for group trips. Amazing tool to use when traveling with friends! Makes life so easy!!" 
             name="Ahah S, iOS"/>
            <Reviewbtn content="Makes it easy to split everything from your dinner bill to rent." 
            profile={review3} name="NY Times"/>
        </div>
        <div className="review-list flex">
            <Reviewbtn content="So amazing to have this app manage balances and help keep money out of relationships. love it!" 
            name="Haseena C, Android"/>
            <Reviewbtn content="I never fight with roommates over bills because of this genius expense-splitting app"
             profile={review5} name="Business Insider"/>
            <Reviewbtn content="I use it everyday. I use it for trips, roommates, loans. I love splitwise." 
            name="Trickseyus, iOS"/>

          </div>
        </div>
        
    
        
        </>
    )
}

export default Landingbody;