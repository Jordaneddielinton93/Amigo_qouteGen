
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import LandingPage from '../Pages/LandingPage/LandingPage';

function App() {
 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          {/* <Route component={Land}/>
          <Route component={Land}/>
          <Route component={Land}/> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
