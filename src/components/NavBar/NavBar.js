import { useState } from "react";
import { Link } from "react-router-dom";
import { amigoLogo } from "./Images/AmigoLogo";
import { NavBarStyled } from "./NavBar.styles";

const NavBar = () => {

  let [showMobileNavBar,setShowMobileNavBar] = useState(false)


  return ( 
    <NavBarStyled>
      <nav className="Nav">
        <div className="Nav_IMGContainer">
          {amigoLogo}
        </div>

        <ul className="Nav_Desk-list">
          <li className="Nav_Desk-list--li"><Link to="/">Services</Link></li>
          <li className="Nav_Desk-list--li"><Link to="/">Platfrom</Link></li>
          <li className="Nav_Desk-list--li"><Link to="/">Resources</Link></li>
          <li className="Nav_Desk-list--li"><Link to="/">Contact</Link></li>
          <li className="Nav_Desk-list--li"><Link to="/">Podcast</Link></li>
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

            <li className="Nav_Mobi-list--li"><Link to="/">Services</Link></li>
            <li className="Nav_Mobi-list--li"><Link to="/">Platfrom</Link></li>
            <li className="Nav_Mobi-list--li"><Link to="/">Resources</Link></li>
            <li className="Nav_Mobi-list--li"><Link to="/">Contact</Link></li>
            <li className="Nav_Mobi-list--li"><Link to="/">Podcast</Link></li>
          </ul>

        </div>
      </nav>
    </NavBarStyled>
   );
}
 
export default NavBar;

