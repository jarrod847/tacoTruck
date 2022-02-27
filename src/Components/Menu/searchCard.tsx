import React from "react";
import { Truck } from "../../recoil/atoms/trucksAtoms";
import { Card } from "../styles/cardStyles";

const SearchCard = (result: Truck) => {
  return (
    <Card>
      <h3>{result.name}</h3>
      <p>{result.address}</p>
      <p>
        {result.city}, {result.state} {result.postal_code}
      </p>
    </Card>
  );
};

export default SearchCard;
