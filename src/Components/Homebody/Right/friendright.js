import React from "react";
import "./friendright.css";
import {FaCalendarAlt,FaAlignJustify} from "react-icons/fa";
import {RiBarChartBoxLine} from "react-icons/ri";
import {AiFillSetting} from "react-icons/ai";

function Friendright(){
       

    return(
        <>
          <div className="flex expense-menu">
        <button className="menu-btn"><FaCalendarAlt/></button>
        <button className="menu-btn"><FaAlignJustify/></button>
        <button className="menu-btn"><RiBarChartBoxLine/></button>
        <button className="menu-btn"><AiFillSetting/></button>
        
        
        

    </div>
        </>
    )
}
export default Friendright;