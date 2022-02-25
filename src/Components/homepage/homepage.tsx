import React, { ChangeEvent, useState } from "react";

const HomePage = () => {
  const [zip, setZip] = useState("");

  const updateZip = (event: ChangeEvent<HTMLInputElement>) => {
    setZip(event.target.value);
  };

  return (
    <div>
      <h1>Welcome to the Taco Truck Locator</h1>
      <p>Please enter your zip code to find taco trucks in your area!</p>
      <div>
        <input onChange={updateZip} value={zip}></input>
        <button>Find</button>
      </div>
    </div>
  );
};

export default HomePage;
