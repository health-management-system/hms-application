import React,{ useState } from "react"
import "./Navbar.css"

function NavBar (){
    const [active,setActive] = useState("nav__menu");
    const navToggle= () => {
    active === "nav__menu" ? setActive("nav__menu nav__active") : setActive("nav__menu");
    };
        return(
                <nav  className="Nav">
                    
                    <a href="#" className="nav__brand" >Logo</a> 
                    
                    <ul className={active}>
                        <li className="#nav_item"><a href="" className="nav_link">Home</a></li>
                        <li className="#nav_item"><a href="" className="nav_link">History</a></li>
                        <li className="#nav_item"><a href="" className="nav_link">Appointments</a></li>
                        <li className="#nav_item"><a href="" className="nav_link">Settings</a></li>
                        <li className="#nav_item"><a href="" className="nav_link">Contact Us</a> </li>
                    </ul>
                    <div onClick={navToggle} className="nav__toggler">
                        <div className="#"></div>
                        <div className="#"></div>
                        <div className="#"></div>
                    </div>
                   
                
                </nav>
        )
}

export default  NavBar