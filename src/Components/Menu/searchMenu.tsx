import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import TrucksAtom, { Truck } from "../../recoil/atoms/trucksAtoms";
import { MapCont, Menu, TruckListDiv } from "../styles/menuStyles";
import { truckData } from "./mapData";
import SearchCard from "./searchCard";
import Map from "./testMap";

const SearchMenu = () => {
  const searchResults: Truck[] = useRecoilValue(TrucksAtom);

  return (
    <div>
      <MapCont>
        <Map />
      </MapCont>
      <div className="scrollTest">
        <TruckListDiv>
          {truckData.map((result: Truck) => (
            <SearchCard key={result.id} {...result} />
          ))}
        </TruckListDiv>
      </div>
    </div>
  );
};

export default SearchMenu;
