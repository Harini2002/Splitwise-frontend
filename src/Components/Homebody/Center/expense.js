import React from "react";
import Expenseheader from "../../Expenseheader/expenseheader";
import "./expense.css"

function Expensecenter(){
    return(
        <>
         <div className="expense-header flex">
          <Expenseheader/>
           

        </div>
        </>
    )
}

export default Expensecenter;