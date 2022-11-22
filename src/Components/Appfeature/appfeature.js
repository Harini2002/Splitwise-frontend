import React from "react";
import "./appfeature.css";

function AppFeature(props){
    let classname=props.className+" feature"
    return(
        <>
        <div className={classname}>
        <div>
           <h1 className="title">
            {props.title}
           </h1>
           <p className="content">
            {props.content}
           </p>
        </div>
        <div>
       <img src={props.img} className="img-feature" alt=" feature "></img>
        </div>

        </div>
        </>
    )
}
export default AppFeature;