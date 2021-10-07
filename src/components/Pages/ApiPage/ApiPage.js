import NavBar from "../../NavBar/NavBar";
import { ApiPageStyled } from "./ApiPage.styles";
import HeroApi from "./components/ApiHero/HeroApi";


const ApiPage = () => {
  return ( 
    <ApiPageStyled>
      <NavBar/>
      <HeroApi/>
    </ApiPageStyled>
   );
}
 
export default ApiPage;