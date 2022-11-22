import React from "react";
import splitwiselogo from "../../../Assets/svg/splitwhitetextlogo.svg"
import "./navbar.css"
import profile from "../../../Assets/images/avatar-orange.png"
import { LinkTag } from "../../Button/button";


 function Navbar(){
    function dropdown() {
        document.getElementById("Dropdown-list").classList.toggle("show");
      }
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
    return(
        <>
        <div className="navbar-db ">
            <div className="flex navbar-content">
            <div>
                <img src={splitwiselogo} className="splitlogo-img"alt="splitlogo"></img>
            </div>
            <div className="dropdown-div flex">
                     <LinkTag to="/#/home" classname="homelink" value="Home"/>
                     <img src={profile} alt="" className="profile-img"></img>
                     <div id="Dropdown-list" className="dropdown-content">
                           <ul>
                            <li><LinkTag to="account/settings" classname="dropdown-btn"value="Your account"/></li>
                            <li><LinkTag to="/account/new" classname="dropdown-btn"value="Create a group"/></li>
                            <li><LinkTag to="/calculator" classname="dropdown-btn"value="Fairness calculators"/></li>
                            <li><LinkTag to="/contact" classname="dropdown-btn"value="Contact support"/></li>
                            <li><LinkTag to="/landing" classname="dropdown-btn"value="Log out"/></li>
                           </ul>
                        </div>
                     <button type="button"
                     className="dropbtn" onClick={dropdown}>Inirah</button>
                   
            </div>
            </div>
         

        </div>
        </>
    )
 }

 export default Navbar;