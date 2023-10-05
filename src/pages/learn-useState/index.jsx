import React, { useState } from "react";
import reactLogo from "../../assets/react.svg";
import "./index.css";

export default function Index() {
  const [showImage, setShowImage] = useState(true);
  const [count, setCount] = useState(0);

  // fungsi tambah
  const countUp = () => {
    setCount(count + 1);
  };

  // fungsi kurang
  const countDown = () => {
    setCount(count - 1);
  };

  // fungsi show & hide gambar
  const hideImage = () => {
    setShowImage(!showImage);
  };

  return (
    <>
      <div className="Main">
        <h3> Use State | KEL 33 </h3>

        <div className="ViewImage">
          <div className="ViewImage1">
            <img
              src={reactLogo}
              className="logo react"
              style={{ display: showImage === true ? "flex" : "none" }}
              alt="React logo"
            />
          </div>
          <div>
            <button
              style={{
                backgroundColor: "rgb(8, 236, 38)",
                borderRadius: "10px",
                fontSize: "20px",
                color: "black",
              }}
              onClick={hideImage}
            >
              {showImage !== true ? "show" : "hide"}
            </button>
          </div>
        </div>
        <p className="Text">{count}</p>
        <div className="ViewButton">
          <div className="ViewButton2">
            <button
              style={{
                backgroundColor: "rgb(8, 236, 38)",
                borderRadius: "10px",
                fontSize: "20px",
                color: "black",
              }}
              onClick={countUp}
            >
              {" "}
              +
            </button>
          </div>
          <div className="ViewButton1">
            <button
              style={{
                backgroundColor: "rgb(8, 236, 38)",
                borderRadius: "10px",
                fontSize: "20px",
                color: "black",
              }}
              onClick={countDown}
            >
              {" "}
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
