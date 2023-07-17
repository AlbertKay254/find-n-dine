import React from "react";
import "./menu.css";

const menu = (props) => {
  return (
    <div className="menu-items max-width">
      {props.menu.map((items) => {
        return (
          <div className="menu-item">
            <div className="item">
              <div className="item-tag">{items.mealName}</div>
            </div>
            <div className="price">
              <div className="price-tag">{items.price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default menu;
