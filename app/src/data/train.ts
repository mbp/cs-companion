import { MapScheme } from "../components/types";

export const trainMapScheme: MapScheme = {
  map: "Train",
  lineUps: [
    {
      name: "Ivy from alley",
      id: "ivy-from-alley",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 729.5,
        y: 462,
      },
      positionCoordinates: {
        x: 172.5,
        y: 144,
      },
    },
    {
      name: "Z from from alley",
      id: "z-from-alley",
      nadeType: "smoke",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 588.5,
        y: 557,
      },
      positionCoordinates: {
        x: 447.5,
        y: 73,
      },
    },
  ],
  strats: [],
};
