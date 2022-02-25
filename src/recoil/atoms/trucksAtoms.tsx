const { atom } = require("recoil");

const TrucksAtom = atom({
  key: "Trucks",
  default: [],
});

export default TrucksAtom;
