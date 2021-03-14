import React from "react";
import Landing from "./Components/LandingPage/Landing";
import signin from "./Components/SignIn/signin";
import signup from "./Components/SignUp/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/signin" component={signin} />
          <Route path="/signup" component={signup} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
