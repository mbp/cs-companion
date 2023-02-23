import { MapLineups } from "../components/composables/types";

export const overpassLineups: MapLineups = {
  map: "Overpass",
  smokes: [
    {
      name: "Heaven smoke from short",
      resultImage:
        "overpass/t/smokes/overpass-result-heaven-smoke-from-short.png",
      aimImage: "overpass/t/smokes/overpass-aim-heaven-smoke-from-short.png",
      posImage: "overpass/t/smokes/overpass-pos-heaven-smoke-from-short.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Bridge smoke from monster",
      resultImage:
        "overpass/t/smokes/overpass-result-bridge-smoke-from-monster.png",
      aimImage: "overpass/t/smokes/overpass-aim-bridge-smoke-from-monster.png",
      posImage: "overpass/t/smokes/overpass-pos-bridge-smoke-from-monster.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Mid toilet smoke from t spawn",
      resultImage:
        "overpass/t/smokes/overpass-result-mid-toilet-smoke-from-spawn.png",
      aimImage:
        "overpass/t/smokes/overpass-aim-mid-toilet-smoke-from-spawn.png",
      posImage:
        "overpass/t/smokes/overpass-pos-mid-toilet-smoke-from-spawn.png",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Dumpster from divider",
      resultImage: "overpass/t/smokes/dumpster-from-divider/result.png",
      aimImage: "overpass/t/smokes/dumpster-from-divider/aim.png",
      posImage: "overpass/t/smokes/dumpster-from-divider/pos.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
  ],
  fragGrenades: [],
  molotovs: [
    {
      name: "Barrels molo from short",
      resultImage:
        "overpass/t/molos/overpass-result-barrels-molo-from-short.png",
      aimImage: "overpass/t/molos/overpass-aim-barrels-molo-from-short.png",
      posImage: "overpass/t/molos/overpass-pos-barrels-molo-from-short.png",
      ticks: "64",
      throwType: "runjump",
      side: "t",
    },
    {
      name: "Short tunnel molo from abc",
      resultImage: "overpass/ct/molos/short-from-abc/result.png",
      aimImage: "overpass/ct/molos/short-from-abc/aim.png",
      posImage: "overpass/ct/molos/short-from-abc/pos.png",
      ticks: "64/128",
      throwType: "normal",
      side: "ct",
    },
  ],
  flashBangs: [
    {
      name: "Overpass barrels flash from short tunnel",
      resultImage:
        "overpass/t/flash/overpass-result-b-site-flash-from-short-tunnel.png",
      aimImage:
        "overpass/t/flash/overpass-aim-b-site-flash-from-short-tunnel.png",
      posImage:
        "overpass/t/flash/overpass-pos-b-site-flash-from-short-tunnel.png",
      ticks: "64",
      throwType: "runjump",
      side: "t",
    },
  ],
};
