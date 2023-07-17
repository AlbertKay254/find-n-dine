import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import toast from "react-hot-toast";
import "./homepage.css";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Taboptions from "../../components/tabOptions/tabOptions";
import Maps from "../gpsSearch/map/maps";
import Explore from "../explore/explore";

import Restaurantcollections from "../tabs/restaurant/restaurantcollection/restaurantcollection";
import NightlifeCollection from "../tabs/nightlife/nighlifeCollection/nightlifeCollection";
import DiningoutCollections from "../tabs/diningout/diningoutCollection/diningoutCollection";
import GroceriesCollection from "../tabs/groceries/groceriesCollection/groceriescCollection";
import BakeriesCollection from "../tabs/bakeries/bakeriesCollection/bakeriesCollection";

import NextArrow from "../scroll/nextArrow";
import PrevArrow from "../scroll/prevArrow";

import RestaurantDefaultImage from "../../assets/rest.png";
import DineOutDefaultImage from "../../assets/dineout.png";
import NightLifeImage from "../../assets/nightlife.png";
import BakeryDefaultImage from "../../assets/bakery.png";
import GroceriesDefaultImage from "../../assets/grocery.png";

import useAuth from "../../hooks/useAuth";
import apiCall from "../../helpers/api";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const categories = [
  {
    type: "restaurant",
    name: "Restaurant",
    defaultImage: RestaurantDefaultImage,
    card: <Restaurantcollections />,
  },
  {
    type: "diningout",
    name: "Dining out",
    defaultImage: DineOutDefaultImage,
    card: <DiningoutCollections />,
  },
  {
    type: "nightlife",
    name: "Nightlife",
    defaultImage: NightLifeImage,
    card: <NightlifeCollection />,
  },
  {
    type: "bakeries",
    name: "Bakeries",
    defaultImage: BakeryDefaultImage,
    card: <BakeriesCollection />,
  },
  {
    type: "groceries",
    name: "Groceries",
    defaultImage: GroceriesDefaultImage,
    card: <GroceriesCollection />,
  },
];

const Homepage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState(null);

  const somethingWentWrongToast = () => toast.error("Something went wrong");

  const user = useAuth();

  useEffect(() => {
    const getRestaurants = async () => {
      const response = await apiCall("get", "/api/restaurants");
      const menuRes = await apiCall("get", "/api/meals");
      if (
        !response ||
        response.status !== 200 ||
        !menuRes ||
        menuRes.status !== 200
      ) {
        somethingWentWrongToast();
        return;
      }
      setRestaurant(response.data);
      setMenu(menuRes.data);
    };

    getRestaurants();
  }, []);

  const activeTabOption = categories[activeTab];

  if (!user || !menu || !restaurant) return null;

  console.log("Menu : ", menu);

  return (
    <div>
      <Header />
      <Taboptions activeTab={activeTab} setActiveTab={setActiveTab} />
      <div style={{ marginBottom: "30px" }}>
        <div className="top-brands max-width">
          <div style={{ marginBottom: "30px" }}>{activeTabOption.card}</div>
          <Slider {...settings}>
            {menu
              .filter((value) => value.category === activeTabOption.type)
              .map((value) => value.restaurantId)
              .filter((value, index, array) => array.indexOf(value) === index)
              .map((_id) => {
                const brand = restaurant.find((rest) => rest._id === _id);
                if (!brand) {
                  return null;
                }
                return (
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      window.location = `/restaurant/${brand._id}`;
                    }}
                  >
                    <div className="top-brands-cover">
                      <img
                        src={brand.url || activeTabOption.defaultImage}
                        className="top-brands-cover"
                        alt={brand.name}
                      />
                    </div>
                    <h4 style={{ width: "100%" }}>{brand.name}</h4>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
      <Explore />
      <Maps />
      <Footer />
    </div>
  );
};

export default Homepage;
