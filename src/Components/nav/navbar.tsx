import Axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import truck from "../../imgs/truck.png";
import TrucksAtom from "../../recoil/atoms/trucksAtoms";
import { NavBarDiv } from "../styles/navStyles";

const NavBar = () => {
  const [trucks, setTrucks] = useRecoilState(TrucksAtom);
  // useEffect(() => {
  //   Axios.get("https://my.api.mockaroo.com/locations.json?key=a45f1200").then(
  //     (res) => {
  //       setTrucks(res.data);
  //     }
  //   );
  // }, []);

  console.log(trucks);
  return (
    <NavBarDiv>
      <Link to="/">
        <img src={truck} />
      </Link>
    </NavBarDiv>
  );
};

export default NavBar;
