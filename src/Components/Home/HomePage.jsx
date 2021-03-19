import React from "react";
import { useHistory } from "react-router-dom";
import fire from "../../config/firebase";
import cogoToast from "cogo-toast";

const HomePage = () => {
  const history = useHistory();

  // var user = fire.auth().currentUser;
  // var name, email, photoUrl, uid, emailVerified;

  // if (user != null) {
  //   name = user.displayName;
  //   email = user.email;
  //   photoUrl = user.photoURL;
  //   emailVerified = user.emailVerified;
  // uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
  // // this value to authenticate with your backend server, if
  // // you have one. Use User.getToken() instead.
  // }

  const logout = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
        cogoToast.success("User Logged Out Successfully");
      });
  };
  return (
    <div>
      <h1>You are logged in !!!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
export default HomePage;
