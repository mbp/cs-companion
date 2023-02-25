import { MapLineups } from "../components/composables/types";

export const overpassLineups: MapLineups = {
  map: "Overpass",
  smokes: [
    {
      name: "Heaven smoke from short",
      folder: "overpass/t/smokes/heaven-from-short",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Bridge smoke from monster",
      folder: "overpass/t/smokes/bridge-from-monster",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Mid toilet smoke from t spawn",
      folder: "overpass/t/smokes/mid-toilet-from-t-spawn",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Dumpster from divider",
      folder: "overpass/t/smokes/dumpster-from-divider",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
  ],
  fragGrenades: [],
  molotovs: [
    {
      name: "Barrels molo from short",
      folder: "overpass/t/molos/barrels-from-short",
      ticks: "64",
      throwType: "runjump",
      side: "t",
    },
    {
      name: "Short tunnel molo from abc",
      folder: "overpass/ct/molos/short-from-abc",
      ticks: "64/128",
      throwType: "normal",
      side: "ct",
    },
  ],
  flashBangs: [
    {
      name: "Overpass barrels flash from short tunnel",
      folder: "overpass/t/flash/b-site-from-short-tunnel",
      ticks: "64",
      throwType: "runjump",
      side: "t",
    },
  ],
};
