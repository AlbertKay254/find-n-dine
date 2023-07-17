import React, { useEffect, useState } from "react";
import "./menuPage.css";
import { MdLocationPin } from "react-icons/md";
import apiCall from "../../helpers/api";

const MenuPageHeader = ({ restaurant: rest, id }) => {
  const [restaurant, setRestaurant] = useState(rest);

  useEffect(() => {
    const getRestaurant = async () => {
      const res = await apiCall("get", `/api/restaurant${id}`);
      if (res && res.status === 200) {
        setRestaurant(res.data);
      }
      if (!rest) {
        getRestaurant();
      }
    };
  }, []);

  if (!restaurant) {
    return null;
  }

  return (
    <div className="menupage-header max-width">
      <div>
        <img src={restaurant.url} alt="logo" />
        <div className="brand-description">
          <h3>{restaurant.name}</h3>
          <p>Open between {restaurant.open_time}</p>
          <p>Contact: {restaurant.contact}</p>
          <div className="category">category: Fast Food</div>
          <div className="location">
            <MdLocationPin className="pin-icon" />
            <div>{restaurant.address}</div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            window.location = `/upload/menu/${restaurant._id}`;
          }}
        >
          edit
        </button>
      </div>
    </div>
  );
};

export default MenuPageHeader;
