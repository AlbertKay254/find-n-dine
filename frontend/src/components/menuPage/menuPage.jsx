import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./menuPage.css";
import Menu from "./menu/menu";
import Header from "../header/header";
import Review from "./review/review";
import Location from "./location/location";
import apiCall from "../../helpers/api";
import MenuPageHeader from "./menuPageHeader";
import Maps from '../gpsSearch/map/maps'

const MenuPage = () => {
  const id = window.location.pathname.split("/")[2];

  const [restaurant, setRestaurant] = useState();
  const [menu, setMenu] = useState();
  const [reviews, setReviews] = useState();

  const somethingWentWrongToast = () => toast.error("Something went wrong");

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await apiCall("get", `/api/reviews/${id}`);
      if (res && res.status === 200) {
        setReviews(res.data);
        return;
      }
      somethingWentWrongToast();
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const getResources = async () => {
      const restaurantRes = await apiCall("get", `/api/restaurant/${id}`);
      const menuRes = await apiCall("get", `/api/restaurant/${id}/menu`);

      if (
        !menuRes ||
        menuRes.status != 200 ||
        !restaurantRes ||
        restaurantRes.status != 200
      ) {
        somethingWentWrongToast();
      }
      setRestaurant(restaurantRes.data);
      setMenu(menuRes.data);
    };
    getResources();
  }, []);

  useEffect(() => {
    console.log(reviews);
  }, [reviews]);

  return (
    <div className="menupage-primary">
      <Header />
      <div
        className="max-width"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {restaurant && <MenuPageHeader restaurant={restaurant} />}
        <hr />
        {menu && <Menu menu={menu} />}
        <hr />
        <Location />
        <hr />
        {reviews && <Review id={id} reviews={reviews} />}
      </div>
      <Toaster />
    </div>
  );
};

export default MenuPage;
