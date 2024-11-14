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
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 588.5,
        y: 557,
      },
      positionCoordinates: {
        x: 172.5,
        y: 144,
      },
    },
    {
      name: "Z (b side) from from alley",
      id: "z-connector-b-from-alley",
      description: "Walk (shift) a little, then throw",
      nadeType: "smoke",
      throwType: "jump",
      movement: "walk",
      side: "t",
      coordinates: {
        x: 714,
        y: 667,
      },
      positionCoordinates: {
        x: 347,
        y: 139,
      },
    },
  ],
  strats: [],
};
