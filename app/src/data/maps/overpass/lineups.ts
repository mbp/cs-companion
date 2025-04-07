import { UtilityLineup } from "../../../components/utility/types";

export const overpassLineups = [
  {
    name: "Heaven smoke from short",
    id: "heaven-from-short",
    nadeType: "smoke",
    throwType: "normal",
    side: "t",
    coordinates: {
      x: 600,
      y: 251,
    },
    positionCoordinates: {
      x: 629,
      y: 480,
    },
    setPos:
      "setpos -1559.968018 -729.448730 108.107445;setang -30.914227 98.988388 0.000000",
  },
  {
    name: "Mid toilet smoke from t spawn",
    id: "mid-toilet-from-t-spawn",
    nadeType: "smoke",
    movement: "run",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 412,
      y: 537,
    },
    positionCoordinates: {
      x: 847,
      y: 807,
    },
    setPos:
      "setpos -418.031250 -2395.468750 219.871246;setang -23.047026 148.531662 0.000000",
  },
  {
    name: "Dumpster from divider",
    id: "dumpster-from-divider",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 553,
      y: 171,
    },
    positionCoordinates: {
      x: 469,
      y: 512,
    },
    setPos:
      "setpos -2335.968750 -863.835144 456.319611;setang -1.293424 79.424911 0.000000",
  },
  {
    name: "Dumpster from long",
    id: "dumpster-from-long",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 540,
      y: 160,
    },
    positionCoordinates: {
      x: 195,
      y: 503,
    },
    setPos:
      "setpos -3771.267090 -1003.890442 564.463135;setang -16.816307 47.586174 0.000000",
  },
  {
    name: "Barrels molo from short",
    id: "barrels-from-short",
    nadeType: "molo",
    movement: "run",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 767,
      y: 266,
    },
    positionCoordinates: {
      x: 595,
      y: 477,
    },
    setPos:
      "setpos -1751.840088 -671.968750 195.871246;setang 7.524358 49.539692 0.000000",
  },
  {
    name: "Short tunnel molo from abc",
    id: "short-from-abc",
    nadeType: "molo",
    throwType: "normal",
    side: "ct",
    coordinates: {
      x: 698,
      y: 524,
    },
    positionCoordinates: {
      x: 545,
      y: 323,
    },
    setPos:
      "setpos -1981.733276 124.628616 195.871246;setang -12.170014 -52.725872 0.000000",
  },
  {
    name: "Monster from A site",
    id: "monster-from-a",
    nadeType: "smoke",
    throwType: "jump",
    side: "ct",
    coordinates: {
      x: 834,
      y: 475,
    },
    positionCoordinates: {
      x: 522,
      y: 150,
    },
    setPos:
      "setpos -2116.466553 993.139954 547.871216;setang -15.232837 -50.622692 0.000000",
  },
  {
    name: "Playground from long",
    id: "playground-from-long",
    nadeType: "smoke",
    throwType: "jump",
    side: "ct",
    coordinates: {
      x: 335,
      y: 791,
    },
    positionCoordinates: {
      x: 305,
      y: 383,
    },
    setPos:
      "setpos -3232.029053 -214.938843 586.621277;setang 3.326205 -83.914314 0.000000",
  },
  {
    name: "T stairs molo from mid",
    id: "t-stairs-from-mid",
    description: "Jump when passing first divider wall",
    nadeType: "molo",
    movement: "run",
    throwType: "normal",
    side: "ct",
    coordinates: {
      x: 562,
      y: 793,
    },
    positionCoordinates: {
      x: 476,
      y: 313,
    },
    setPos:
      "setpos -2379.778809 140.791595 503.035461;setang 0.606866 -73.909103 0.000000",
  },
  {
    name: "Barrels flash from short tunnel",
    id: "b-site-from-monster",
    nadeType: "flashbang",
    throwType: "normal",
    side: "t",
    coordinates: {
      x: 789,
      y: 351,
    },
    positionCoordinates: {
      x: 801,
      y: 553,
    },
    setPos:
      "setpos -612.163879 -1076.645630 100.817078;setang -30.228069 98.985016 0.000000",
  },
  {
    name: "Bank from long",
    id: "bank-from-long",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 443,
      y: 107,
    },
    positionCoordinates: {
      x: 195,
      y: 503,
    },
    setPos:
      "setpos -3775.832520 -1003.883911 565.679016;setang -12.803694 57.802864 0.000000",
  },
  {
    name: "Bank from divider",
    id: "bank-from-divider",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 460,
      y: 112,
    },
    positionCoordinates: {
      x: 469,
      y: 512,
    },
    setPos:
      "setpos -2335.968506 -863.683167 456.318237;setang -9.927073 91.020630 0.000000",
  },
] satisfies UtilityLineup[];
