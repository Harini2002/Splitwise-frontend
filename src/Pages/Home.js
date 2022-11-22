import { useParams } from "react-router-dom";
import HomeBody from "../Components/Homebody/body";
import SetupPage from "../Components/Homebody/Newuser/page";




import NavbarDashboard from "../Components/NavbarDashboard/navbardb";

function Home(){
    
    let newuser=localStorage.getItem("newuser")
    const {id}=useParams()
    let body=<HomeBody to={id}/>
    
    
  
    if (id==="dashboard" && newuser===true)
    {
        console.log()
        body=<SetupPage/>
    }
    
return (
   
    <div>
    
        <NavbarDashboard/>
        {body}

    </div>
)
}

 export default Home;