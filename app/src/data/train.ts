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
      name: "Sandwich from from alley",
      id: "sandwich-from-alley",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 613,
        y: 410,
      },
      positionCoordinates: {
        x: 105,
        y: 145,
      },
    },
    {
      name: "Connector from halls",
      id: "connector-from-halls",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 705,
        y: 690,
      },
      positionCoordinates: {
        x: 302,
        y: 761,
      },
    },
    {
      name: "A site from outside",
      id: "a-site-from-outside",
      nadeType: "flashbang",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 440,
        y: 335,
      },
      positionCoordinates: {
        x: 365,
        y: 133,
      },
    },
    {
      name: "Z (b side) from from alley",
      id: "z-connector-b-from-alley",
      description: "Walk (shift), then throw at the horizontal line",
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
    {
      name: "Left main from z",
      id: "left-main-from-z",
      nadeType: "flashbang",
      throwType: "normal",
      side: "ct",
      movement: "run",
      coordinates: {
        x: 498,
        y: 460,
      },
      positionCoordinates: {
        x: 608,
        y: 570,
      },
    },
  ],
  strats: [],
};
