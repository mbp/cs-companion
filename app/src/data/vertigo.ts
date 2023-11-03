import { MapScheme } from "../components/composables/types";

export const vertigoMapScheme: MapScheme = {
  map: "Vertigo",
  lineUps: [
    {
      name: "Ramp from a default plant",
      id: "ramp-from-a-headshot",
      nadeType: "smoke",
      throwType: "jump",
      side: "ct",
      coordinates: {
        x: 595,
        y: 646,
      },
    },
    {
      name: "Guardian from mid",
      id: "guardian-from-mid",
      nadeType: "smoke",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 421,
        y: 314,
      },
    },
    {
      name: "A site headshot from ramp",
      id: "a-headshot-from-ramp",
      nadeType: "smoke",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 747,
        y: 548,
      },
    },
    {
      name: "A site from ramp",
      id: "a-site-from-ramp",
      nadeType: "smoke",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 677,
        y: 564,
      },
    },
    {
      name: "A behind default from ramp",
      id: "a-behind-default-from-ramp",
      nadeType: "smoke",
      throwType: "runjump",
      movement: "run",
      side: "t",
      coordinates: {
        x: 701,
        y: 548,
      },
    },
    {
      name: "B electric #1 from t",
      id: "b-electric-1-from-t",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 322,
        y: 288,
      },
    },
    {
      name: "B electric #2 from t",
      description: "hold w when throw",
      id: "b-electric-2-from-t",
      nadeType: "smoke",
      throwType: "jump",
      movement: "run",
      side: "t",
      coordinates: {
        x: 322,
        y: 217,
      },
    },
    {
      name: "B site from t",
      id: "b-site-from-t",
      nadeType: "smoke",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 214,
        y: 302,
      },
    },
    {
      name: "A short from t spawn",
      id: "a-short-from-t-spawn",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 525,
        y: 724,
      },
    },
    {
      name: "B site from t",
      id: "b-site-from-t",
      nadeType: "flashbang",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 204,
        y: 505,
      },
    },
    {
      name: "B site headshot from stairs",
      id: "b-headshot-from-stairs",
      nadeType: "smoke",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 248,
        y: 217,
      },
    },
  ],
  strats: [
    {
      buyType: "pistols",
      name: "First decoy round",
      description:
        "All buy decoy, throw it on the A ramp. Immediately turn back to B and plant the bomb",
      side: "t",
    },
  ],
};
