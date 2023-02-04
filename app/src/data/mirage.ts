import { MapLineups } from "../components/composables/types";

export const mirageLineups: MapLineups = {
  map: "Mirage",
  smokes: [
    {
      name: "Connector smoke from T apps",
      description: "Stand in corner, aim lower mid carpet",
      resultImage: "mirage/t/smokes/mirage-result-con-smoke-lower-from-t.png",
      aimImage: "mirage/t/smokes/mirage-aim-con-smoke-lower-from-t.png",
      posImage: "mirage/t/smokes/mirage-pos-con-smoke-lower-from-t.png",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Top connector smoke from t mid",
      description: "Stand behind boxes, aim below plant",
      aimImage: "mirage/t/smokes/mirage-aim-top-connector-smoke-from-mid.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Stairs smoke from T ramp",
      description: "At small hinge. Aim middle of some lines",
      resultImage: "mirage/t/smokes/mirage-result-stairs-smoke-from-t-ramp.png",
      aimImage: "mirage/t/smokes/mirage-aim-stairs-smoke-from-t-ramp.png",
      posImage: "mirage/t/smokes/mirage-pos-con-smoke-lower-from-t.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "CT car platform",
      description: "Next to under stairs. Aim in the sky",
      aimImage: "mirage/t/smokes/mirage-aim-ct-car-platform.png",
      posImage: "mirage/t/smokes/mirage-pos-ct-car-platform.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Mirage CT mid one way smoke",
      aimImage: "mirage/ct/smokes/mirage-aim-mid-one-way-smoke.png",
      ticks: "64",
      throwType: "normal",
      side: "ct",
    },
  ],
  fragGrenades: [],
  molotovs: [],
  flashBangs: [
    {
      name: "Pop flash b site",
      resultImage: "missing.png",
      aimImage:
        "mirage/t/flash/mirage-aim-pop-flash-b-site-from-apartments.png",
      posImage: "missing.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
  ],
};
