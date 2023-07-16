import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./homepage.css";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Taboptions from "../../components/tabOptions/tabOptions";
import Maps from "../gpsSearch/map/maps";
import Explore from "../explore/explore";

import Restaurant from "../../components/tabs/restaurant/restaurant";
import Diningout from "../../components/tabs/diningout/diningout";
import Nightlife from "../../components/tabs/nightlife/nightlife";
import Bakeries from "../../components/tabs/bakeries/bakeries";
import Groceries from "../../components/tabs/groceries/groceries";

import useAuth from "../../hooks/useAuth";
import apiCall from "../../helpers/api";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("Restaurant");
  const [restaurant, setRestaurant] = useState([]);
  const somethingWentWrongToast = () => toast.error("Something went wrong");

  const user = useAuth();

  useEffect(() => {
    const getRestaurants = async () => {
      const response = await apiCall("get", "/api/restaurants");
      if (!response || response.status !== 200) {
        somethingWentWrongToast();
        return;
      }
      setRestaurant(response.data);
    };

    getRestaurants();
  }, []);

  useEffect(() => {
    console.log("Restaurants : ", restaurant);
  }, [restaurant]);

  if (!user) return null;

  return (
    <div>
      <Header />
      <Taboptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Explore />
      <Maps />
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Restaurant":
      return <Restaurant />;
    case "Dining Out":
      return <Diningout />;
    case "Night Life":
      return <Nightlife />;
    case "Bakeries":
      return <Bakeries />;
    case "Groceries":
      return <Groceries />;
    default:
      return <Restaurant />;
  }
};

export default Homepage;
