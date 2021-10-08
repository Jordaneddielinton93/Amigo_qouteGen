import NavBar from "../../NavBar/NavBar";
import Carousel from "../ApiPage/components/Carousel/Carousel";
import Hero from "./components/Hero/Hero";
import MyGoal from "./components/MyGoal/MyGoal";
import OurOffer from "./components/OurOffer/OurOffer";
import Update from "./components/Update/Update";
import { LandingStyled } from "./LandingPage.styles";

const LandingPage = () => {
  return ( 
    <LandingStyled>
      <NavBar/>
      <Hero/>
      <Update/>
      <MyGoal/>
      <OurOffer/>
      <Carousel/>
    </LandingStyled>
   );
}
 
export default LandingPage;