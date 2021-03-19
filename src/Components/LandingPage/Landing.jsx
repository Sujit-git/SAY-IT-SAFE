import { Button } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Landing = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <BrowserRouter>
      <div className="landing">
        <p id="welcome">Welcome to</p>

        <h1 className="heading">SAY-IT-SAFE</h1>

        <h3 className="description">
          A platform for students/employees to raise their issues/complaints
          anonymously.
        </h3>

        <Button onClick={refreshPage}>
          <Link to="/signin">
            <li> Sign IN</li>
          </Link>{" "}
        </Button>
        <br />
        <Button onClick={refreshPage}>
          <Link to="/signup">
            <li>Sign UP</li>
          </Link>
        </Button>
      </div>
    </BrowserRouter>
  );
};

export default Landing;
