import { MapLineups } from "../components/composables/types";

export const mirageLineups: MapLineups = {
  map: "Mirage",
  smokes: [
    {
      name: "Connector smoke from T apps",
      description: "Stand in corner, aim lower mid carpet",
      folder: "mirage/t/smokes/connector-lower-from-t",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Top connector smoke from t mid",
      description: "Stand behind boxes, aim below plant",
      folder: "mirage/t/smokes/top-connector-from-mid",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Stairs smoke from T ramp",
      description: "At small hinge. Aim middle of some lines",
      folder: "mirage/t/smokes/stairs-from-t-ramp",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "CT car platform",
      description: "Next to under stairs. Aim in the sky",
      folder: "mirage/t/smokes/ct-car-platform",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Mirage CT mid one way smoke",
      folder: "mirage/ct/smokes/mid-one-way",
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
      folder: "mirage/t/flash/pop-flash-b-site-from-apps",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
  ],
};
