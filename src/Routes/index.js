import React from "react";
// import  {HashRouter} from "react-router-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import AccountSetting from "../Pages/Account_setting.js"

import Landing from "../Pages/Landing.js"

import Group from "../Pages/Group.js"
import Login from "../Pages/Login.js"

import SignUp from "../Pages/Sign_up.js"
import Home from "../Pages/Home.js"
import Contact from "../Pages/Contact.js"
import Calculator from "../Pages/Calculator.js"


function Index() {

  return (
    <>
    
     
    <BrowserRouter>
      <Routes>
        <Route path='/account/settings' element={< AccountSetting />} />
        <Route path='/group/new' element={<Group />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/calculator' element={<Calculator />} />
        
        <Route path='/:id' element={<Home/>} />
       
      </Routes>
      </BrowserRouter>
      {/* <HashRouter>
          <Routes>
            <Route path='/:id' element={<Home/>} />
            
          </Routes>
      </HashRouter> */}
    </>
  )
}

export default Index;