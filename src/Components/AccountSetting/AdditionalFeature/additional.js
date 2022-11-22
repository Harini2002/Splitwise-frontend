import React from "react";
import "./additional.css";
import { Button } from "../../Button/button";

export default function AdditionalFeature(){
    return(
        <>
        <div className="add-feature">
            <h2>Additional Feature</h2>
            <div className="add-feature-content">
                <p>Most users don't need these features - but here they are in case you do!</p>
                <div className="add-feature-btn flex ">
                    <div className=" width-25">
                     <Button classname="add-feature-pro-btn"value="Get Splitwise Pro!"/>
                    </div>
                     <div className="width-25 flex flex-col">
                        <Button classname="add-feature-merge-btn" value="Merge with another account"/>
                        <Button classname="add-feature-delete-btn" value="Delete your account"/>
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