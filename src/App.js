import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:id">
            <User />
          </Route>

          <Route path="/createuser">
            <CreateUser />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
