import React from "react";
import "./body.css";
import house from "../../Assets/images/cal_house.png";
import house_fire from "../../Assets/images/cal_house_fire.png";
import tax from "../../Assets/images/cal_tax.png";
import furniture from "../../Assets/images/cal_furniture.png";
import guest from "../../Assets/images/cal_guest.png";
import noise from "../../Assets/images/cal_noise.png";
import plane from "../../Assets/images/cal_travel.png";
import {MdDoubleArrow} from "react-icons/md";
import { LinkTag } from "../Button/button";


export default function Body(){
    return(
        <>
        <div className="calculator-container flex flex-col">
            <div className="calculator-title">
            <h2>Fairness calculator</h2>
            <h3>Wondering what's fair? Let us help:</h3>
            </div>


            <div className="calculator-question-col flex">
                <button  className="calculator-question-btn">
                <div className="flex align-center">
                    <img src={house} alt="" className="cal-que-img"></img>
                  <p>How should you <br></br> <strong>split the rent</strong><br></br>in the apartment?</p>
                   
                    
                </div>
                </button>
                <button  className="calculator-question-btn">
                <div className="flex align-center">
                    <img src={house_fire} alt="" className="cal-que-img"></img>
                    <div><p>Should you get <br></br><strong>renters insurance ?</strong> </p></div>
                    
                </div>
                 </button>
                
            </div>


            <div className="calculator-feature-col flex">

               <button className="calculator-feature-btn">
                    <p className="cal-feature-title">
                    What would be a fair US tax code?
                    </p>
                   <img src={tax} alt="" className="cal-feature-img"></img>
                   <p className="cal-feature-description">
                   Decide for yourself with our
                   </p>
                   <p className="cal-feature-pointer">
                    Tax Calculator <MdDoubleArrow size="8px"/></p>
                </button>

                <button className="calculator-feature-btn">
                <p className="cal-feature-title">Buying or selling used furniture?
                </p>
                <img src={furniture} alt="" className="cal-feature-img"></img>
                <p className="cal-feature-description">
                Set a price with our
                </p>
                <p className="cal-feature-pointer">
                Furniture Calculator<MdDoubleArrow size="8px"/>
                </p>
                </button>

                <button className="calculator-feature-btn">
                <p className="cal-feature-title">
                Staying over at a friend's place?
                </p>
                <img src={guest} alt="" className="cal-feature-img"></img>
                <p className="cal-feature-description">
                Couch-surf fairly with our
                </p>
                <p className="cal-feature-pointer">
                Guest Calculator<MdDoubleArrow size="8px"/>
                </p>
                </button>
             
                <button className="calculator-feature-btn">
                <p className="cal-feature-title">
                Loud neighbors? Can’t sleep at night?
                </p>
                <img src={noise} alt="" className="cal-feature-img"></img>
                <p className="cal-feature-description">
                Find out the cost with our 
                </p>
                <p className="cal-feature-pointer">
                Noise Calculator<MdDoubleArrow size="8px"/>
                </p>
                   
                </button>

                <button className="calculator-feature-btn">
                <p className="cal-feature-title">
                    Going on a trip with friends?
                </p>
                   <img src={plane} alt="" className="cal-feature-img"></img>
                   <p className="cal-feature-description">
                   Share travel costs with our 
                   </p>
                   <p className="cal-feature-pointer">
                   Travel Calculator<MdDoubleArrow size="8px"/>
                   </p>
                   
                </button>
                
            </div>

            <div className="calculator-ask-splitwise flex">
              <p>
      Have a different sharing problem that needs solving?
      <LinkTag to="" classname="calculator-ask-btn"value="Ask Splitwise" />! </p>
      
            </div>
         

        </div>
        </>
    )
}