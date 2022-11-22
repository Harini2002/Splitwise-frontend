import React from "react";
import "./groupright.css";
import {FaCalendarAlt,FaAlignJustify} from "react-icons/fa";
import {RiBarChartBoxLine} from "react-icons/ri";
import {AiTwotoneMessage,AiFillSetting} from "react-icons/ai";


function Groupright(){
    return(
        <>
         <div className="flex expense-menu">
        <button className="menu-btn"><FaCalendarAlt/></button>
        <button className="menu-btn"><FaAlignJustify/></button>
        <button className="menu-btn"><RiBarChartBoxLine/></button>
        <button className="menu-btn"><AiTwotoneMessage/></button>
        <button className="menu-btn"><AiFillSetting/></button>
        
        
        

    </div>
            </>
    )
}

export default Groupright;