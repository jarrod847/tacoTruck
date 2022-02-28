import React from "react";
import { useSetRecoilState } from "recoil";
import LocationAtom from "../../recoil/atoms/locationAtom";
import { Truck } from "../../recoil/atoms/trucksAtoms";
import { Card } from "../styles/cardStyles";

const SearchCard = (result: Truck) => {
  const setLocation = useSetRecoilState(LocationAtom);

  const setNewLoc = () => {
    setLocation({ latitude: result.latitude, longitude: result.longitude });
  };
  return (
    <Card onClick={setNewLoc}>
      <h3>{result.name}</h3>
      <p>{result.address}</p>
      <p>
        {result.city}, {result.state} {result.postal_code}
      </p>
      <div>
        <button>More Info</button>
        <button>Directions</button>
      </div>
    </Card>
  );
};

export default SearchCard;
