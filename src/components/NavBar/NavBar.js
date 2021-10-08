import { useState } from "react";
import { Link } from "react-router-dom";
import ListItems from "./components/ListItems";
import { amigoLogo } from "./Images/AmigoLogo";
import { NavBarStyled } from "./NavBar.styles";

const NavBar = () => {

  let [showMobileNavBar,setShowMobileNavBar] = useState(false)


  return ( 
    <NavBarStyled>
      <nav className="Nav">
        <div className="Nav_IMGContainer">
         <Link to="/">{amigoLogo}</Link>
        </div>

        <ul className="Nav_Desk-list">
          <ListItems ClassNameUsed={"Desk"} text="Api's"/>
          <ListItems ClassNameUsed={"Desk"} text="Platfrom"/>
          <ListItems ClassNameUsed={"Desk"} text="Resources"/>
          <ListItems ClassNameUsed={"Desk"} text="Contact"/>
          <ListItems ClassNameUsed={"Desk"} text="Podcast"/>
        </ul>

        <div>
          <div className="burger" 
            onClick={()=>
            setShowMobileNavBar(showMobileNavBar?false:true)}>

            <span 
            style={showMobileNavBar?{
              transform:"rotate(30deg)",
              top: "15px"
            }:{}}

            className="burger--lineTop"></span>

            <span style={showMobileNavBar?{
              transform:"rotate(-30deg)",
              width: "100%",
              top: "15px"
              
            }:{}}
            className="burger--lineBttm"></span>
          </div>
          <ul className="Nav_Mobi-list" 

          style={showMobileNavBar?{display: "flex"}:{display:"none"}
        }>

          <ListItems ClassNameUsed={"Mobi"} text="Api's"/>
          <ListItems ClassNameUsed={"Mobi"} text="Platfrom"/>
          <ListItems ClassNameUsed={"Mobi"} text="Resources"/>
          <ListItems ClassNameUsed={"Mobi"} text="Contact"/>
          <ListItems ClassNameUsed={"Mobi"} text="Podcast"/>
          </ul>

        </div>
      </nav>
    </NavBarStyled>
   );
}
 
export default NavBar;

