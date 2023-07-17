import React, { useCallback, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useCookies } from "react-cookie";

import "./signin.css";
import logo from "../../assets/logo1.png";
import apiCall from "../../helpers/api";
import useAppContext from "../../context/global-context";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { user, setUser } = useAppContext();
  const [, setCookie] = useCookies(["user"]);
  const handleSubmit = useCallback(
    async (e) => {
      const userNotFoundToast = () => toast.error("User not found");
      const welcomeToast = () => toast.success("Welcome");

      // Prevent default action of the form [The page reloads after this function terminates if we remove this]
      e.preventDefault();

      // Makes a request to the backend using axios [Look at the file helpers/api_call.js]
      const response = await apiCall("post", "/api/auth", {
        email: email,
        password: pass,
      });

      if (response && response.status === 200) {
        let { name, email, pass, _id } = response.data;
        setUser({
          _id,
          name,
          email,
          pass,
        });

        if (user) {
          setCookie("user", user, { path: "/" });
          welcomeToast();
          window.location = "/";
        }
      }
      userNotFoundToast();
    },
    [email, pass, setUser, user, setCookie]
  );

  return (
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
          onClick={() => window.location.replace("/signup")}
          className="register-btn"
        >
          Don't have an account? Register here.
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default Signin;
