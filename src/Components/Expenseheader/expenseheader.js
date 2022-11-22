import React from "react";
import "./expenseheader.css";
import { IoMdArrowDropdown } from "react-icons/io";

function Expenseheader(){
    return(
        <>
          <div className="expense-content ">
            <h3>All expense</h3>
          

            </div>
            <div className="btn-div flex">  
            <div className="flex">
            <button className="expense-expense-btn">Add an expense</button>
            <button className="expense-part"><IoMdArrowDropdown/></button>
            </div>
            
            <button className="settle-btn">Settle up</button>
            </div>
        </>
    )
}

export default Expenseheader;