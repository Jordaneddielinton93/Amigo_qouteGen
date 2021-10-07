import NavBar from "../../NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Update from "./components/Update/Update";
import { LandingStyled } from "./LandingPage.styles";

const LandingPage = () => {
  return ( 
    <LandingStyled>
      <NavBar/>
      <Hero/>
      <Update/>
    </LandingStyled>
   );
}
 
export default LandingPage;