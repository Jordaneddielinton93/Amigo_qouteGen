import { MyGoalStyled } from "./MyGoal.style";
import { BsClockHistory } from 'react-icons/bs';
import { IoHammerOutline } from 'react-icons/io5';
import { AiOutlineUnlock } from 'react-icons/ai';
import GoalIcons from "./components/GoalIcons";
const MyGoal = () => {
  return ( 
    <MyGoalStyled>
      <main className="mainGoal">

        <GoalIcons title="On Time" icon={<BsClockHistory/>} />
        <GoalIcons title="On Time" icon={<IoHammerOutline/>} />
        <GoalIcons title="On Time" icon={<AiOutlineUnlock/>} />
        
      </main>
    </MyGoalStyled>
   );
}
 
export default MyGoal;