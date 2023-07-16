import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import "./uploadPage.css";
import Header from "../header/header";
import apiCall from "../../helpers/api";

export default function MenuUploadPage(props) {
  const id = window.location.pathname.split("/")[3];

  const [current, setCurrent] = useState(0);
  const [menuItemCount, setMenuItemCount] = useState(1);
  const categories = [
    { type: "restaurant", name: "Restaurant" },
    { type: "diningout", name: "Dining out" },
    { type: "nightlife", name: "Nightlife" },
    { type: "bakeries", name: "Bakeries" },
    { type: "groceries", name: "Groceries" },
  ];

  const [menu, setMenu] = useState([
    { name: "", price: "", category: categories[current].type },
  ]);

  const submitMenu = (e) => {
    e.preventDefault();

    apiCall("post", `/api/restaurant/${id}/meal`, {
      menu: menu,
    })
      .then(({ status, data }) => {
        console.log(data);
        if (status === 200) {
          toast.success("Menu uploaded successfully");
        } else {
          toast.error("Error uploading menu");
        }
      })
      .catch((err) => {
        toast.error("Error uploading menu");
      });
  };

  return (
    <div className="upload-details-container">
      <div className="max-width" style={{ width: "100vw" }}>
        <Header />
        <div className="menu-container">
          <div style={{ display: "flex" }}>
            {categories.map(({ type, name }, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setMenu([{ name: "", price: "", category: type }]);
                  setMenuItemCount(1);
                }}
                style={{
                  width: "50%",
                  height: "40px",
                  cursor: "pointer",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  border: "1px solid black",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  backgroundColor: current === index ? "lightblue" : "white",
                  margin: "5px",
                }}
              >
                {name}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <h1>Restaurant menu</h1>
            <form
              className="upload-form"
              onSubmit={submitMenu}
              style={{
                marginTop: "30px",
                width: "90%",
              }}
            >
              <table
                style={{
                  marginTop: "30px",
                  width: "100%",
                }}
              >
                <tr>
                  <th>Item Name</th>
                  <th>Item Price</th>
                </tr>
                {Array(menuItemCount)
                  .fill()
                  .map((_, i) => (
                    <tr>
                      <td>
                        <input
                          type="text"
                          placeholder="enter name here"
                          onChange={(e) => {
                            setMenu((prev) => {
                              prev[i].name = e.target.value;
                              return prev;
                            });
                          }}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="enter price here"
                          onChange={(e) => {
                            setMenu((prev) => {
                              prev[i].price = e.target.value;
                              return prev;
                            });
                          }}
                          required
                        />
                      </td>
                    </tr>
                  ))}
              </table>
            </form>

            <div>
              <button
                id="outlined-button"
                onClick={() => {
                  if (menuItemCount > 1) {
                    setMenuItemCount(menuItemCount - 1);
                    setMenu((prev) => prev.slice(0, -1));
                  }
                }}
              >
                Remove menu item
              </button>
              <button
                id="outlined-button"
                onClick={() => {
                  setMenuItemCount(menuItemCount + 1);
                  setMenu((prev) => [
                    ...prev,
                    { name: "", price: "", category: categories[current].type },
                  ]);
                }}
              >
                Add menu item
              </button>
            </div>

            <div>
              <button onClick={submitMenu} className="add-item-button">
                Submit menu
              </button>
            </div>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
}
