import React, { useState } from "react";
import "./homepage.css";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Taboptions from "../../components/tabOptions/tabOptions";
import Map from "../gpsSearch/map/map";
import UploadPage from "../uploadPage/uploadPage";
import Maps from "../gpsSearch/map/maps";
import Explore from "../explore/explore";
import MenuPage from "../menuPage/menuPage";
import RestaurantList from "../restaurantList/restaurantList";

import Restaurant from "../../components/tabs/restaurant/restaurant";
import Diningout from "../../components/tabs/diningout/diningout";
import Nightlife from "../../components/tabs/nightlife/nightlife";
import Bakeries from "../../components/tabs/bakeries/bakeries";
import Takeout from "../../components/tabs/takeout/takeout";
import Groceries from "../../components/tabs/groceries/groceries";

import useAuth from "../../hooks/useAuth";
import { MdExplore } from "react-icons/md";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("Restaurant");
  // const user = useAuth();

  // if (!user) return null;
  return (
    <div>
      <Header />
      <Taboptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Explore />
      <UploadPage />
      <Maps/>
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
    //case "Takeout":
    //  return <Takeout />;
    case "Groceries":
      return <Groceries />;
    default:
      return <Restaurant />;
  }
};

export default Homepage;
