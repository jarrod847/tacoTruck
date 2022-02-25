import Axios from "axios";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import TrucksAtom from "../../recoil/atoms/trucksAtoms";

const SearchMenu = () => {
  const [trucks, setTrucks] = useRecoilState(TrucksAtom);
  useEffect(() => {
    Axios.get("https://my.api.mockaroo.com/locations.json?key=a45f1200").then(
      (res) => {
        setTrucks(res.data);
      }
    );
  }, []);

  console.log(trucks);
  return <div></div>;
};

export default SearchMenu;
