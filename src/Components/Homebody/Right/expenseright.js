import React from "react";
import "./expenseright.css"
import {FaCalendarAlt,FaAlignJustify} from "react-icons/fa";
import {RiBarChartBoxLine} from "react-icons/ri";

function Expenseright(){
    let balance=526.25;
    let balancedetails={
        "id":"owe",
        "para":"you are owe"
    } 
    if (balance>0){
        balancedetails.id="owed"
        balancedetails.para="you are owed"
    }
    
    function handleclick(e){
   
      console.log(e.target.id)


        
    }

    return(
        <>
    <div className="flex expense-menu">
        <button id="Balance-btn" className="menu-btn" onClick={e=>handleclick(e)} ><FaAlignJustify/></button>
        <button id="Upcoming-expense-btn" className="menu-btn"><FaCalendarAlt/></button>
        <button id="Trends-btn" className="menu-btn"><RiBarChartBoxLine/></button>
    </div>
    <div id="Balance" className="balance-div">
        <p className="title">YOUR TOTAL BALANCE</p>
        <div id={balancedetails.id}  className="balance">
            <p>{balancedetails.para}</p>
            <p className="amount">Rs. {balance}</p>

        </div>
    </div>
    <div id="Upcoming-expense" className="upcoming-expense">

    </div>
    <div id="Trends" className="trends">

    </div>
        </>
    )
}

export default Expenseright;