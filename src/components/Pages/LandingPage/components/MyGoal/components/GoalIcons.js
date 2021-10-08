const GoalIcons = ({title,icon}) => {
  return ( 
    <span className="mainGoal__container">
      <h3 className="mainGoal__container-title">{title}</h3>
      <p className="mainGoal__container-Subtitle">
        {icon}
      </p>
    </span>
   );
}
 
export default GoalIcons;