import { MapScheme } from "../components/composables/types";

export const mirageMapScheme: MapScheme = {
  map: "Mirage",
  lineUps: [
    {
      name: "Connector smoke from T apps",
      description: "Stand in corner, aim lower mid carpet",
      id: "connector-lower-from-t",
      nadeType: "smoke",
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
      id: "top-connector-from-mid",
      nadeType: "smoke",
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
      id: "stairs-from-t-ramp",
      nadeType: "smoke",
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
      id: "ticket-booth-from-t-ramp",
      nadeType: "smoke",
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
      id: "ct-car-platform",
      nadeType: "smoke",
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
      id: "mid-one-way",
      nadeType: "smoke",
      ticks: "64",
      throwType: "normal",
      side: "ct",
      coordinates: {
        x: 425,
        y: 471,
      },
    },
    {
      name: "Pop flash b site",
      id: "pop-flash-b-site-from-apps",
      nadeType: "flashbang",
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
