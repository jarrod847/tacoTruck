import React, { ChangeEvent, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import SearchAtom from "../../recoil/atoms/searchAtom";
import TrucksAtom, { Truck } from "../../recoil/atoms/trucksAtoms";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const [zip, setZip] = useState("");
  const truckList: Truck[] = useRecoilValue(TrucksAtom);
  const [zipResults, setZipResults] = useRecoilState(SearchAtom);
  let history = useHistory();
  const updateZip = (event: ChangeEvent<HTMLInputElement>) => {
    setZip(event.target.value);
  };

  const submitZip = () => {
    const nearTrucks = truckList.filter(
      (truck: Truck) => truck.postal_code === zip
    );

    console.log(nearTrucks);
    setZipResults(nearTrucks);
    history.push("/menu");
  };

  return (
    <div>
      <h1>Welcome to the Taco Truck Locator</h1>
      <p>Please enter your zip code to find taco trucks in your area!</p>
      <div>
        <input onChange={updateZip} value={zip}></input>
        <button onClick={submitZip}>Find</button>
      </div>
    </div>
  );
};

export default HomePage;
