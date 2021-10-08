import { MyGoalStyled } from "./MyGoal.style";
import { BsClockHistory } from 'react-icons/bs';
import { IoHammerOutline } from 'react-icons/io5';
import { AiOutlineUnlock } from 'react-icons/ai';
const MyGoal = () => {
  return ( 
    <MyGoalStyled>
      <main className="mainGoal">

        <span className="mainGoal__container">
          <h3 className="mainGoal__container-title">On Time</h3>
          <p className="mainGoal__container-Subtitle">
            <BsClockHistory/>
          </p>
        </span>

        <span className="mainGoal__container">
        <h3 className="mainGoal__container-title">Hard Working</h3>
          <p className="mainGoal__container-Subtitle">
            <IoHammerOutline/>
          </p>
        </span>

        <span className="mainGoal__container">
        <h3 className="mainGoal__container-title"> No risk </h3>
        <p className="mainGoal__container-Subtitle">
          <AiOutlineUnlock/>
        </p>
          
        </span>
        
      </main>
    </MyGoalStyled>
   );
}
 
export default MyGoal;