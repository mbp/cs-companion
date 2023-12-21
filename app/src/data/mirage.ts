import { MapScheme } from "../components/types";

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
      positionCoordinates: {
        x: 871,
        y: 207,
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
      positionCoordinates: {
        x: 740,
        y: 260,
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
      positionCoordinates: {
        x: 932,
        y: 328,
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
      positionCoordinates: {
        x: 878,
        y: 580,
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
      positionCoordinates: {
        x: 863,
        y: 543,
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
      positionCoordinates: {
        x: 811,
        y: 638,
      },
    },
    {
      name: "Market window from back alley",
      id: "market-window-from-back-alley",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 258,
        y: 394,
      },
      positionCoordinates: {
        x: 617,
        y: 159,
      },
    },
    {
      name: "Short from back alley",
      id: "short-from-back-alley",
      nadeType: "smoke",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 404,
        y: 300,
      },
      positionCoordinates: {
        x: 617,
        y: 159,
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
      positionCoordinates: {
        x: 348,
        y: 206,
      },
    },
  ],
  strats: [],
};
