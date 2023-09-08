import { MapScheme } from "../components/composables/types";

export const overpassMapScheme: MapScheme = {
  map: "Overpass",
  lineUps: [
    {
      name: "Heaven smoke from short",
      id: "heaven-from-short",
      nadeType: "smoke",
      ticks: "64/128",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 600,
        y: 251,
      },
    },
    {
      name: "Mid toilet smoke from t spawn",
      id: "mid-toilet-from-t-spawn",
      nadeType: "smoke",
      ticks: "64/128",
      throwType: "runjump",
      side: "t",
      coordinates: {
        x: 412,
        y: 537,
      },
    },
    {
      name: "Dumpster from divider",
      id: "dumpster-from-divider",
      nadeType: "smoke",
      ticks: "64/128",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 540,
        y: 160,
      },
    },
    {
      name: "Barrels molo from short",
      id: "barrels-from-short",
      nadeType: "molo",
      ticks: "64/128",
      throwType: "runjump",
      side: "t",
      coordinates: {
        x: 767,
        y: 266,
      },
    },
    {
      name: "Short tunnel molo from abc",
      id: "short-from-abc",
      nadeType: "molo",
      ticks: "64/128",
      throwType: "normal",
      side: "ct",
      coordinates: {
        x: 698,
        y: 524,
      },
    },
    {
      name: "Barrels flash from short tunnel",
      id: "b-site-from-short-tunnel",
      nadeType: "flashbang",
      ticks: "64/128",
      throwType: "runjump",
      side: "t",
      coordinates: {
        x: 734,
        y: 325,
      },
    },
    {
      name: "Bank from cafe",
      id: "bank-from-cafe",
      nadeType: "smoke",
      ticks: "64/128",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 460,
        y: 112,
      },
    },
  ],
};
