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
      name: "Barrels smoke from short tunnel",
      resultImage:
        "overpass/t/smokes/overpass-result-barrels-smoke-short-tunnel.png",
      aimImage:
        "overpass/t/smokes/overpass-aim-barrels-smoke-from-short-tunnel.png",
      posImage: "overpass/t/smokes/overpass-pos-barrels-smoke-short-tunnel.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Mid toilet smoke from t spawn",
      resultImage:
        "overpass/t/smokes/overpass-result-mid-toilet-smoke-from-spawn.png",
      aimImage:
        "overpass/t/smokes/overpass-result-aim-toilet-smoke-from-spawn.png",
      posImage:
        "overpass/t/smokes/overpass-result-pos-toilet-smoke-from-spawn.png",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
  ],
  fragGrenades: [],
  molotovs: [],
  flashBangs: [
    {
      name: "Overpass barrels flash from short tunnel",
      resultImage: "missing.png",
      aimImage: "overpass/t/flash/overpass-site-flash-from-short-tunnel.png",
      posImage: "missing.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
  ],
};
