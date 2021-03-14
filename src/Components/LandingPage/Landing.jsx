import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Landing = () => {
  return (
    <Router>
      <div className="landing">
        <Link to="/signin">Sign IN</Link> <br />
        <Link to="/signup">Sign Up</Link>
      </div>
    </Router>
  );
};

export default Landing;
