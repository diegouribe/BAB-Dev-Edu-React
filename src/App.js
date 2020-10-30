import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Landing from "./screens/Landing"
import Prices from "./screens/Prices"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/prices">
          <Prices/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
