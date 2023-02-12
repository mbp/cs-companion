import { MapLineups } from "../components/composables/types";

export const vertigoLineups: MapLineups = {
  map: "Vertigo",
  smokes: [
    {
      name: "Smoke ramp from a default plant",
      resultImage:
        "vertigo/ct/smokes/vertigo-result-smoke-ramp-from-default-plant.png",
      aimImage:
        "vertigo/ct/smokes/vertigo-aim-smoke-ramp-from-default-plant.png",
      posImage:
        "vertigo/ct/smokes/vertigo-pos-smoke-ramp-from-default-plant.png",
      ticks: "64",
      throwType: "normal",
      side: "ct",
    },
    {
      name: "Smoke top ramp (one way) from backsite",
      resultImage:
        "vertigo/ct/smokes/vertigo-result-smoke-top-ramp-one-way-from-backsite.png",
      aimImage:
        "vertigo/ct/smokes/vertigo-aim-smoke-top-ramp-one-way-from-backsite.png",
      posImage:
        "vertigo/ct/smokes/vertigo-pos-smoke-top-ramp-one-way-from-backsite.png",
      ticks: "64",
      throwType: "normal",
      side: "ct",
    },
    {
      name: "Smoke guardian from mid",
      resultImage:
        "vertigo/t/smokes/vertigo-result-smoke-guardian-from-mid.png",
      aimImage: "vertigo/t/smokes/vertigo-aim-smoke-guardian-from-mid.png",
      posImage: "missing.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Smoke a site from ramp",
      resultImage: "vertigo/t/smokes/vertigo-result-smoke-a-site-from-ramp.png",
      aimImage: "vertigo/t/smokes/vertigo-aim-smoke-a-site-from-ramp.png",
      posImage: "vertigo/t/smokes/vertigo-pos-smoke-a-site-from-ramp.png",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Smoke b site from t",
      resultImage: "vertigo/t/smokes/vertigo-result-smoke-b-site-from-t.png",
      aimImage: "vertigo/t/smokes/vertigo-aim-smoke-b-site-from-t.png",
      posImage: "vertigo/t/smokes/vertigo-pos-smoke-b-site-from-t.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Smoke a short from t spawn",
      resultImage:
        "vertigo/t/smokes/vertigo-result-smoke-short-a-from-spawn.png",
      aimImage: "vertigo/t/smokes/vertigo-aim-smoke-short-a-from-spawn.png",
      posImage: "vertigo/t/smokes/vertigo-pos-smoke-short-a-from-spawn.png",
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
      resultImage: "vertigo/t/flash/vertigo-result-flash-b-site-from-t.png",
      aimImage: "vertigo/t/flash/vertigo-aim-flash-b-site-from-t.png",
      posImage: "vertigo/t/flash/vertigo-pos-flash-b-site-from-t.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
  ],
};
