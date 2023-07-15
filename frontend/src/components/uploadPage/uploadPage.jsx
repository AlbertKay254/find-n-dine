import React, { useState } from "react";
import "./uploadPage.css";

const UploadPage = (props) => {
  //restaurant props
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState("");
  const [time_open, setTimeOpen] = useState("");
  const [address, setAddress] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [category, setCategory] = useState("");

  //meal props
  const [mealName, setMealName] = useState("");
  const [price, setprice] = useState("");

  const displayinfo = (e) => {
    e.preventDefault();
    console.log(
      name +
        contact +
        website +
        time_open +
        address +
        longitude +
        latitude +
        category
    );
    console.log(mealName + price);

    // restaurant info
    fetch("http://localhost:4444/restaurant", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        contact,
        website,
        time_open,
        category,
        address,
        longitude,
        latitude,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const { _id } = data;
        fetch(`http://localhost:4444/restaurant/${_id}/meal`, {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({ menu: [{ mealName, price }] }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "MealDetailsUpload");
          });
      });

    //meal info
  };

  return (
    <form className="upload-form" onSubmit={displayinfo}>
      <div className="form-container ">
        <label>Restaurant Name:</label>
        <input
          value={name}
          type="text"
          placeholder="enter name here"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Address:</label>
        <input
          value={address}
          type="text"
          placeholder="enter address here"
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
        <label>Category:</label>
        <input
          value={category}
          type="text"
          placeholder="fast food, restaurant, bakery, nightlife, grocery"
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
        <label>contact:</label>
        <input
          value={contact}
          type="text"
          placeholder="enter contact here"
          onChange={(event) => {
            setContact(event.target.value);
          }}
        />
        <label>Website:</label>
        <input
          value={website}
          type="text"
          placeholder="enter website here"
          onChange={(event) => {
            setWebsite(event.target.value);
          }}
        />
        <label>Time Open:</label>
        <input
          value={time_open}
          type="text"
          placeholder="enter time open here"
          onChange={(event) => {
            setTimeOpen(event.target.value);
          }}
        />

        <div className="meal=container">
          <label>Meal Name:</label>
          <input
            value={mealName}
            type="text"
            placeholder="enter meal name here"
            onChange={(event) => {
              setMealName(event.target.value);
            }}
          />
          <label>Price:</label>
          <input
            value={price}
            type="number"
            placeholder="enter price here"
            onChange={(event) => {
              setprice(event.target.value);
            }}
          />
        </div>
        <button className="btn" type="submit">
          Upload
        </button>
      </div>
    </form>
  );
};

export default UploadPage;
