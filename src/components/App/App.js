
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import LandingPage from '../Pages/LandingPage/LandingPage';
import ApiPage from "../Pages/ApiPage/ApiPage";

function App() {
 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/Apis" component={ApiPage}/>
          {/* <Route component={Land}/>
          <Route component={Land}/> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
