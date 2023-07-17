import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";
import Homepage from "./components/homepage/homepage";
import MenuPage from "./components/menuPage/menuPage";
import MenuUploadPage from "./components/uploadPage/menuDetails";
import { AppContextWrapper } from "./context/global-context";
import LogoutPage from "./components/logout/logout";
import RestaurantDetailsForm from "./components/uploadPage/restaurantDetails";

const App = () => {
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
    {
      path: "/upload/details",
      element: <RestaurantDetailsForm />,
    },
    {
      path: "/upload/menu/:id",
      element: <MenuUploadPage />,
    },
    {
      path: "/restaurant/:id",
      element: <MenuPage />,
    },
    {
      path: "/logout",
      element: <LogoutPage />,
    },
  ]);

  return (
    <AppContextWrapper>
      <CookiesProvider>
        <RouterProvider router={router} />
      </CookiesProvider>
    </AppContextWrapper>
  );
};

export default App;
