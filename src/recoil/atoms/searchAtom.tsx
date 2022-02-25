import { Truck } from "./trucksAtoms";

const { atom } = require("recoil");

const SearchAtom = atom({
  key: "Search",
  default: [] as Truck[],
});

export default SearchAtom;
