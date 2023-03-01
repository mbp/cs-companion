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
      coordinates: {
        x: 514,
        y: 505,
      },
    },
    {
      name: "Top connector smoke from t mid",
      description: "Stand behind boxes, aim below plant",
      folder: "mirage/t/smokes/top-connector-from-mid",
      ticks: "64",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 511,
        y: 596,
      },
    },
    {
      name: "Stairs smoke from T ramp",
      description: "At small hinge. Aim middle of some lines",
      folder: "mirage/t/smokes/stairs-from-t-ramp",
      ticks: "64",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 550,
        y: 662,
      },
    },
    {
      name: "Ticket booth smoke from T ramp",
      folder: "mirage/t/smokes/ticket-booth-from-t-ramp",
      ticks: "64",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 467,
        y: 816,
      },
    },
    {
      name: "CT car platform",
      description: "Next to under stairs. Aim in the sky",
      folder: "mirage/t/smokes/ct-car-platform",
      ticks: "64",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 234,
        y: 196,
      },
    },
    {
      name: "CT mid one way smoke",
      folder: "mirage/ct/smokes/mid-one-way",
      ticks: "64",
      throwType: "normal",
      side: "ct",
      coordinates: {
        x: 425,
        y: 471,
      },
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
      coordinates: {
        x: 313,
        y: 220,
      },
    },
  ],
};
