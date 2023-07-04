import React, { useContext, useState } from "react";
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";
import Homepage from "./components/homepage/homepage";
import MenuPage from "./components/menuPage/menuPage";
import GpsSearch from "./components/gpsSearch/gpsSearch";
import Map from "./components/gpsSearch/map/map";
import UploadPage from "./components/uploadPage/uploadPage";
import Firstpage from "./pages/firstpage";
import Review from "./components/menuPage/review/review";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";

export const UserContext = React.createContext(undefined);

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const user = useContext(UserContext) || cookies.user;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <UserContext.Provider value={user}>
      <CookiesProvider>
        <RouterProvider router={router} />
      </CookiesProvider>
    </UserContext.Provider>
  );
};

export default App;
