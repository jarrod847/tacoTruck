import { useRecoilValue } from "recoil";
import TrucksAtom, { Truck } from "../../recoil/atoms/trucksAtoms";
import { TruckListDiv, TrucksCont } from "../styles/menuStyles";
import SearchCard from "./searchCard";

const SearchMenu = () => {
  const searchResults: Truck[] = useRecoilValue(TrucksAtom);
  return (
    <div>
      <TrucksCont>
        <TruckListDiv>
          {searchResults.map((result: Truck) => (
            <SearchCard key={result.id} {...result} />
          ))}
        </TruckListDiv>
      </TrucksCont>
    </div>
  );
};

export default SearchMenu;
