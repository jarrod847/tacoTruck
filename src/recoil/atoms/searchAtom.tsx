const { atom } = require("recoil");

const SearchAtom = atom({
  key: "Search",
  default: [],
});

export default SearchAtom;
