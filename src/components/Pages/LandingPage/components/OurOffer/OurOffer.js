import { OurOfferStyled } from "./OurOffer.styles";
import QuoteHands from "../../../../images/QuoteFingers.png"
import SpanGreenText from "../../../../SpanGreenText/SpanGreenText";
import { Link } from "react-router-dom";
const OurOffer = () => {
  return ( 
    <OurOfferStyled>
      <div className="OurOffer__Container">
        <h1 className="OurOffer__Container--OurOffer">
        <SpanGreenText spanText="Daily Quota" Backcolor="white"/>
        </h1>
        <h1 className="OurOffer__Container--OurAimTitle">We aim to give you your daily dose of <br /> Quotes</h1>
        <p className="OurOffer__Container--Para">Creating transparent shared information. We focus on nothing but the finer Quotes, because it’s what we know best. Technology now allows us to put the power back in the hands... <SpanGreenText spanText="finger's" Backcolor="white"/> of people.</p>
        
          <button className="OurOffer__Container--Button">
          <Link to="/Apis">
          Quote Now
          </Link>
          </button> 
        

        <div className="OurOffer__Container__textIMGContainer">
          <q className="OurOffer__Container__textIMGContainer--bigText">
            Only Quotes
          </q>
          <img className="OurOffer__Container__textIMGContainer--HandsIMG"
           alt="" srcset={QuoteHands} height="20%" />
        </div>

      </div>
    </OurOfferStyled>
   );
}
 
export default OurOffer;