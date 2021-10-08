import NavBar from "../../NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import MyGoal from "./components/MyGoal/MyGoal";
import Update from "./components/Update/Update";
import { LandingStyled } from "./LandingPage.styles";

const LandingPage = () => {
  return ( 
    <LandingStyled>
      <NavBar/>
      <Hero/>
      <Update/>
      <MyGoal/>
    </LandingStyled>
   );
}
 
export default LandingPage;