import { MapLineups } from "../components/composables/types";

export const vertigoLineups: MapLineups = {
  map: "Vertigo",
  smokes: [
    {
      name: "Smoke ramp from a default plant",
      folder: "vertigo/ct/smokes/ramp-from-a-default-plant",
      ticks: "64",
      throwType: "normal",
      side: "ct",
    },
    {
      name: "Smoke top ramp (one way) from backsite",
      folder: "vertigo/ct/smokes/top-ramp-one-way-from-backsite",
      ticks: "64",
      throwType: "normal",
      side: "ct",
    },
    {
      name: "Smoke guardian from mid",
      folder: "vertigo/t/smokes/guardian-from-mid",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Smoke a site from ramp",
      folder: "vertigo/t/smokes/a-site-from-ramp",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Smoke b site from t",
      folder: "vertigo/t/smokes/b-site-from-t",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Smoke a short from t spawn",
      folder: "vertigo/t/smokes/a-short-from-t-spawn",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
  ],
  fragGrenades: [],
  molotovs: [],
  flashBangs: [
    {
      name: "Flash b site from t",
      folder: "vertigo/t/flash/b-site-from-t",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
  ],
};
