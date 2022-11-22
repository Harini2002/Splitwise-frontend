import React from "react";
import coreicon from "../../Assets/svg/core-feature.svg"
import proicon from "../../Assets/svg/pro-feature.svg"

export  function Corefeature(props){
    return(
        <>
           <div>
                <img src={coreicon} alt="core-icon"></img>
                <span>{props.value}</span>
            </div>
        </>
    )
}
export  function Profeature(props){
    return(
        <>
           <div>
                <img src={proicon} alt="core-icon"></img>
                <span>{props.value}</span>
            </div>
        </>
    )
}
