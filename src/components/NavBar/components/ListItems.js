import { Link } from "react-router-dom";

const ListItems = ({ClassNameUsed,text}) => {
  return ( 
    <li className={`Nav_${ClassNameUsed}-list--li`}><Link to="/Apis">{text}</Link></li>
   );
}
 
export default ListItems;