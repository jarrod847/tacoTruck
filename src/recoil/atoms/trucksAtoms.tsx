const { atom } = require("recoil");

export interface Truck {
  address: string;
  city: string;
  friday_close: string;
  friday_open: string;
  id: number;
  latitude: number;
  longitude: number;
  monday_close: string;
  monday_open: string;
  name: string;
  postal_code: string;
  saturday_close: string;
  saturday_open: string;
  state: string;
  sunday_close: string;
  sunday_open: string;
  thursday_close: string;
  thursday_open: string;
  tuesday_close: string;
  tuesday_open: string;
  url: string;
  wednesday_close: string;
  wednesday_open: string;
}

const TrucksAtom = atom({
  key: "Trucks",
  default: [] as Truck[],
});

export default TrucksAtom;
