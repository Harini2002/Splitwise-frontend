import React from "react";
import appstore from "../../../Assets/images/dashboard-appstore.png"
import android from "../../../Assets/images/dashboard-android.png"
import { LinkTag } from "../../Button/button";
import "./commonright.css"


function Commonright(){
    return(
        <>

<div className="rightside-content">
<h2>SPLITWISE  ON THE GO</h2>
<p>
Get the free Splitwise app and add IOUs from anywhere:</p>
<img src={appstore} className="appstore-img" alt=""></img>
<img src={android} className="android-img" alt=""></img>

<div className="thirdparty flex flex-col">
   <p>+ third-party apps for</p>
   <LinkTag to="" classname="windows-phone" value="Windows Phone"/>
</div>

</div>
        </>
    )
}

export default Commonright;