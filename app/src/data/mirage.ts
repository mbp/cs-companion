import { MapScheme } from "../components/composables/types";

export const mirageMapScheme: MapScheme = {
  map: "Mirage",
  lineUps: [
    {
      name: "Connector smoke from T apps",
      description: "Stand in corner, aim lower mid carpet",
      id: "connector-lower-from-t",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 514,
        y: 505,
      },
    },
    {
      name: "Top connector smoke from side alley",
      id: "top-connector-from-side-alley",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 511,
        y: 596,
      },
    },
    {
      name: "Mid window from spawn",
      id: "mid-window-from-spawn",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 425,
        y: 452,
      },
    },
    {
      name: "Stairs smoke from T ramp",
      description: "At small hinge. Aim middle of some lines",
      id: "stairs-from-t-ramp",
      nadeType: "smoke",
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
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 467,
        y: 816,
      },
    },
    {
      name: "Jungle from T ramp",
      id: "jungle-from-t-ramp",
      nadeType: "smoke",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 473,
        y: 629,
      },
    },
    {
      name: "Market window smoke",
      id: "market-window",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 258,
        y: 394,
      },
    },
    {
      name: "Pop flash b site",
      id: "pop-flash-b-site-from-apps",
      nadeType: "flashbang",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 313,
        y: 220,
      },
    },
  ],
};
