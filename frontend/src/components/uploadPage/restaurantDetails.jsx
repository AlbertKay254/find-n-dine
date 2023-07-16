import React, { useCallback, useState } from "react";
import apiCall from "../../helpers/api";
import toast, { Toaster } from "react-hot-toast";
import "./restaurantDetails.css";
import axios from "axios";

export default function RestaurantDetailsForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState("");
  const [time_open, setTimeOpen] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState();

  const displayinfo = useCallback(
    (e) => {
      e.preventDefault();
      apiCall("post", "/api/restaurant", {
        name,
        contact,
        website,
        time_open,
        address,
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            toast.success("Restaurant details uploaded successfully");
            const { _id } = res.data;
            window.location = "/upload/menu/" + _id;
          } else {
            toast.error("Error uploading restaurant details");
          }
        })

        .catch((err) => toast.error("Error uploading restaurant details"));
    },
    [name, contact, website, time_open, address]
  );

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const url = "http://localhost:4444/api/upload";
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", file.name);

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      axios.post(url, formData, config).then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Image uploaded successfully");
        } else {
          toast.error("Error uploading image");
        }
      });
    },
    [file]
  );

  const onImageUpload = useCallback((e) => {
    setFile(e.target.files[0]);
  }, []);

  return (
    <div className="restaurant-form-container">
      <div>
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
              required
            />
            <label>Address:</label>
            <input
              value={address}
              type="text"
              placeholder="enter address here"
              onChange={(event) => {
                setAddress(event.target.value);
              }}
              required
            />
            <label>contact:</label>
            <input
              value={contact}
              type="text"
              placeholder="enter contact here"
              onChange={(event) => {
                setContact(event.target.value);
              }}
              required
            />
            <label>Website:</label>
            <input
              value={website}
              type="text"
              placeholder="enter website here"
              onChange={(event) => {
                setWebsite(event.target.value);
              }}
              required
            />
            <label>Time Open:</label>
            <input
              value={time_open}
              type="text"
              placeholder="enter time open here"
              onChange={(event) => {
                setTimeOpen(event.target.value);
              }}
              required
            />
            <button className="btn" type="submit">
              Upload restaurant details
            </button>
          </div>
        </form>
      </div>

      <div>
        <form onSubmit={onFormSubmit}>
          <input type="file" onChange={onImageUpload} />
          <button className="btn" type="submit">
            Upload resturant image
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}
