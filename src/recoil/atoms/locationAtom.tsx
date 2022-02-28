const { atom } = require("recoil");

export interface Location {
  latitude: number;
  longitude: number;
}

const LocationAtom = atom({
  key: "Location",
  default: {
    latitude: 34.09939187237055,
    longitude: -117.82568851810558,
  } as Location,
});

export default LocationAtom;
