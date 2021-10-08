import NavBar from "../../NavBar/NavBar";
import { ApiPageStyled } from "./ApiPage.styles";
import HeroApi from "./components/ApiHero/HeroApi";
import Carousel from "./components/Carousel/Carousel";


const ApiPage = () => {
  return ( 
    <ApiPageStyled>
      <NavBar/>
      <HeroApi/>
      <Carousel/>
    </ApiPageStyled>
   );
}
 
export default ApiPage;