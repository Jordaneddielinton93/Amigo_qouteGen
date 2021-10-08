import { SpanGreenTextStyle } from "./SpanGreenText.style";

const SpanGreenText = ({spanText,Backcolor}) => {
  return ( 
    <SpanGreenTextStyle>
      
    <span className="changing">{spanText}</span> 
    <span className="greenline" style={{backgroundColor:Backcolor}}></span>


    </SpanGreenTextStyle>
   );
}
 
export default SpanGreenText;