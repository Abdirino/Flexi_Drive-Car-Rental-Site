import React from "react";
import "./application.css";

const Application = () => {
  return (
    <div className="application">

      <div className="location">
        <h2>PickUp Location</h2>
        <input type="text" placeholder="Enter City, Airport or Address" />
      </div>

      <div className="pickup">
        <h2>PickUp Date</h2>
        <div className="inp">
          <input type="date" name="" id="" />
          <input type="date" name="" id="" />
        </div>
      </div>

      <div className="return">
        <h2>Return Date</h2>
        <div className="inp">
          <input type="date" name="" id="" />
          <input type="date" name="" id="" />
        </div>
      </div>

      <div className="search">
        <input type="search" />
      </div>
    </div>
  );
};

export default Application;
