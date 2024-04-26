import { MapScheme } from "../components/types";

export const dust2MapScheme: MapScheme = {
  map: "Dust2",
  lineUps: [
    {
      name: "xbox from spawn",
      id: "xbox-from-spawn",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 493,
        y: 414,
      },
      positionCoordinates: {
        x: 446,
        y: 887,
      },
    },
    {
      name: "long from t outside",
      id: "long-from-t-outside",
      nadeType: "flashbang",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 784,
        y: 604,
      },
      positionCoordinates: {
        x: 650,
        y: 821,
      },
    },
    {
      name: "b from upper tunnels",
      id: "b-from-upper-tunnels",
      nadeType: "flashbang",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 62,
        y: 300,
      },
      positionCoordinates: {
        x: 198,
        y: 517,
      },
    },
    {
      name: "mid from xbox",
      id: "mid-from-xbox",
      nadeType: "flashbang",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 462,
        y: 362,
      },
      positionCoordinates: {
        x: 503,
        y: 422,
      },
    },
    {
      name: "b doors from upper tunnels",
      id: "b-doors-from-upper-tunnels",
      nadeType: "smoke",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 264,
        y: 231,
      },
      positionCoordinates: {
        x: 142,
        y: 511,
      },
    },
  ],
  strats: [],
};
