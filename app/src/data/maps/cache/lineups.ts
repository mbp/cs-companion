import { UtilityLineup } from "../../../components/utility/types";

export const cacheLineups = [
  {
    name: "Tree room from sun room",
    id: "tree-room-from-sun-room",
    nadeType: "smoke",
    clickType: "left+right",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 275,
      y: 754,
    },
    positionCoordinates: {
      x: 480,
      y: 854,
    },
    setPos:
      "setpos 579.209045 -1449.946899 1676.265625;setang -3.088876 149.317825 0.000000",
  },
  {
    name: "Right mid criss cross",
    id: "right-mid-criss-cross",
    nadeType: "smoke",
    throwType: "normal",
    side: "t",
    coordinates: {
      x: 421,
      y: 527,
    },
    positionCoordinates: {
      x: 679,
      y: 552,
    },
    setPos:
      "setpos 1730.680054 208.036133 1676.000000;setang -11.510336 173.954117 0.000000",
  },
  {
    name: "Left mid criss cross",
    id: "left-mid-criss-cross",
    nadeType: "smoke",
    throwType: "normal",
    side: "t",
    coordinates: {
      x: 416,
      y: 570,
    },
    positionCoordinates: {
      x: 678,
      y: 538,
    },
    setPos:
      "setpos 1728.944458 295.970032 1676.000000;setang -11.114330 -174.272110 0.000000",
  },
  {
    name: "A back site",
    id: "back-a-site",
    nadeType: "smoke",
    throwType: "normal",
    side: "t",
    coordinates: {
      x: 317,
      y: 329,
    },
    positionCoordinates: {
      x: 597,
      y: 306,
    },
    setPos:
      "setpos 1315.947876 1587.969971 1768.000000;setang -47.335148 -174.261642 0.000000",
  },
] satisfies UtilityLineup[];
