import { MapScheme } from "../components/types";

export const overpassMapScheme: MapScheme = {
  map: "Overpass",
  lineUps: [
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
    },
    {
      name: "Mid toilet smoke from t spawn",
      id: "mid-toilet-from-t-spawn",
      nadeType: "smoke",
      throwType: "runjump",
      side: "t",
      coordinates: {
        x: 412,
        y: 537,
      },
      positionCoordinates: {
        x: 847,
        y: 807,
      },
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
    },
    {
      name: "Barrels molo from short",
      id: "barrels-from-short",
      nadeType: "molo",
      throwType: "runjump",
      side: "t",
      coordinates: {
        x: 767,
        y: 266,
      },
      positionCoordinates: {
        x: 595,
        y: 477,
      },
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
    },
    {
      name: "Short tunnel molo from A short",
      description: "Throw when leaving box",
      id: "short-tunnel-from-a-short",
      nadeType: "molo",
      throwType: "run",
      side: "ct",
      coordinates: {
        x: 684,
        y: 523,
      },
      positionCoordinates: {
        x: 484,
        y: 321,
      },
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
    },
    {
      name: "T stairs molo from mid",
      id: "t-stairs-from-mid",
      description: "Jump when passing first divider wall",
      nadeType: "molo",
      throwType: "runjump",
      side: "ct",
      coordinates: {
        x: 562,
        y: 793,
      },
      positionCoordinates: {
        x: 476,
        y: 313,
      },
    },
    {
      name: "Barrels flash from short tunnel",
      id: "b-site-from-short-tunnel",
      nadeType: "flashbang",
      throwType: "runjump",
      side: "t",
      coordinates: {
        x: 734,
        y: 325,
      },
      positionCoordinates: {
        x: 801,
        y: 553,
      },
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
    },
  ],
  strats: [],
};
