import React, { useState } from "react";
import "./signin.css";
import logo from "../../assets/logo1.png";
import apiCall from "../../helpers/api";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { UserContext } from "../../App";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState(undefined);

  const userNotFoundToast = () => toast.error("User not found");
  const welcomeToast = () => toast.success("Welcome");

  const handleSubmit = async (e) => {
    // Prevent default action of the form [The page reloads after this function terminates if we remove this]
    e.preventDefault();

    // Makes a request to the backend using axios [Look at the file helpers/api_call.js]
    const response = await apiCall("post", "/sign-in", {
      email: email,
      password: pass,
    });

    if (response.status === 200) {
      welcomeToast();
      let { name, email, pass } = response.data;
      setUser({
        name,
        email,
        pass,
      });
      window.location = "/";
    } else {
      userNotFoundToast();
    }
  };

  return (
    <UserContext.Provider>
      <div className="container">
        <div className="logo-container">
          <div className="bck"></div>
        </div>
        <div className="signin-container">
          <img src={logo} alt="" className="logo-img" />
          <form onSubmit={handleSubmit} className="signin-form">
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@gmail.com"
                type="email"
                id="email"
                name="email"
              />
              <label htmlFor="password">Password</label>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="********"
                id="password"
                name="password"
              />
              <button className="login-btn" type="submit">
                Sign In
              </button>
            </div>
          </form>
          <button
            onClick={() => props.onFormSwitch("Signup")}
            className="register-btn"
          >
            Don't have an account? Register here.
          </button>
        </div>
        {/* The toaster is the container that shows the notification */}
        <Toaster />
      </div>
    </UserContext.Provider>
  );
};

export default Signin;
