import React from "react";
import "./dashboardheader.css"


function Dashboardheader(){
    let totalbalance=525.50;
    let owe=25.50;
    let owed=551.00;
    let totalclass="owe block no-border"
    if (totalbalance>0){
       totalclass="owed block no-border"
    }
    return(
        <>
        <div className="dashboard-header ">
            <div className=" dashboard-content flex">

                <div className="dashboard-title ">
                <h3>Dashboard</h3>
                </div>
                
                <div className="btn-div flex">  
                <button className="expense-btn">Add an expense</button>
                <button className="settle-btn">Settle up</button>
                </div> 

            </div>
              
             <div className="dashboard-balance flex">
                <div className={totalclass}>
                   total balance
                   <p>Rs. {totalbalance}</p>
                </div>
                <div className="owe block">
                   you owe
                    <p>Rs. {owe}</p>

                </div>
                <div className="owed block">
                   you are owed
                   <p>Rs. {owed}</p>
                </div>

            </div>
       
        </div>
        


    
      
        </>
    )
}

export default Dashboardheader;