import { MapScheme } from "../components/types";

export const vertigoMapScheme: MapScheme = {
  map: "Vertigo",
  lineUps: [
    {
      name: "Ramp from a headshot",
      id: "ramp-from-a-headshot",
      nadeType: "smoke",
      throwType: "jump",
      side: "ct",
      coordinates: {
        x: 595,
        y: 646,
      },
      positionCoordinates: {
        x: 762,
        y: 532,
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
      positionCoordinates: {
        x: 285,
        y: 383,
      },
    },
    {
      name: "Top t stairs from mid 1",
      id: "t-stairs-from-mid-1",
      nadeType: "frag",
      throwType: "jump",
      side: "ct",
      coordinates: {
        x: 315,
        y: 573,
      },
      positionCoordinates: {
        x: 403,
        y: 325,
      },
    },
    {
      name: "Top t stairs from mid 2",
      id: "t-stairs-from-mid-2",
      nadeType: "frag",
      throwType: "normal",
      side: "ct",
      coordinates: {
        x: 310,
        y: 558,
      },
      positionCoordinates: {
        x: 364,
        y: 329,
      },
    },
    {
      name: "Top mid from mid",
      id: "top-mid-from-mid",
      nadeType: "smoke",
      throwType: "jump",
      movement: "run",
      side: "t",
      coordinates: {
        x: 444,
        y: 381,
      },
      positionCoordinates: {
        x: 372,
        y: 448,
      },
    },
    {
      name: "Mid from CT",
      id: "mid-from-ct",
      nadeType: "smoke",
      throwType: "normal",
      side: "ct",
      coordinates: {
        x: 376,
        y: 474,
      },
      positionCoordinates: {
        x: 490,
        y: 352,
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
      positionCoordinates: {
        x: 567,
        y: 765,
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
      positionCoordinates: {
        x: 567,
        y: 765,
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
      positionCoordinates: {
        x: 624,
        y: 700,
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
      positionCoordinates: {
        x: 297,
        y: 763,
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
      positionCoordinates: {
        x: 297,
        y: 763,
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
      positionCoordinates: {
        x: 186,
        y: 647,
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
      positionCoordinates: {
        x: 426,
        y: 827,
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
      positionCoordinates: {
        x: 210,
        y: 649,
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
      positionCoordinates: {
        x: 161,
        y: 476,
      },
    },
  ],
  strats: [
    {
      id: "first-decoy",
      buyType: "pistols",
      name: "First decoy round",
      description:
        "All buy decoy, throw it on the A ramp. Immediately turn back to B and plant the bomb",
      side: "t",
    },
  ],
};
