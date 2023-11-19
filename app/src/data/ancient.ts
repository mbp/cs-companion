import { MapScheme } from "../components/composables/types";

export const ancientMapScheme: MapScheme = {
  map: "Ancient",
  lineUps: [
    {
      name: "Long B from ruins",
      id: "long-b-from-ruins",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 826,
        y: 369,
      },
    },
    {
      name: "Short B from ruins",
      id: "short-b-from-ruins",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 726,
        y: 354,
      },
    },
    {
      name: "Cave from ruins",
      id: "cave-from-ruins",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 708,
        y: 395,
      },
    },
    {
      name: "B ramp from long",
      id: "b-ramp-from-long",
      nadeType: "flashbang",
      throwType: "jump",
      side: "ct",
      coordinates: {
        x: 838,
        y: 553,
      },
    },
    {
      name: "Elbow from mid house",
      id: "elbow-from-mid-house",
      nadeType: "smoke",
      throwType: "jump",
      side: "ct",
      coordinates: {
        x: 377,
        y: 593,
      },
    },
    {
      name: "Mid b short/long from t spawn",
      description: "quick w run",
      id: "mid-b-from-t-spawn",
      nadeType: "smoke",
      throwType: "jump",
      movement: "run",
      side: "t",
      coordinates: {
        x: 784,
        y: 421,
      },
    },
    {
      name: "Flash right side mid from t spawn",
      id: "flash-right-mid-from-spawn",
      nadeType: "flashbang",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 510,
        y: 611,
      },
    },
    {
      name: "Flash left side mid from t spawn",
      id: "flash-left-mid-from-spawn",
      nadeType: "flashbang",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 453,
        y: 616,
      },
    },
    {
      name: "Catwalk from t spawn",
      id: "catwalk-from-t-spawn",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 546,
        y: 584,
      },
    },
    {
      name: "Mid from t spawn",
      id: "mid-from-t-spawn",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 486,
        y: 386,
      },
    },
    {
      name: "Inside donut from stairs",
      id: "inside-donut-from-stairs",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 315,
        y: 329,
      },
    },
    {
      name: "Donut mid from spawn",
      id: "mid-donut-from-spawn",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 420,
        y: 467,
      },
    },
    {
      name: "Donut mid from jungle",
      id: "mid-donut-from-jungle",
      nadeType: "smoke",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 393,
        y: 461,
      },
    },
    {
      name: "CT from stairs",
      id: "ct-from-stairs",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 367,
        y: 221,
      },
    },
    {
      name: "B backline from ruins",
      id: "b-backline-from-ruins",
      nadeType: "smoke",
      throwType: "runjump",
      side: "t",
      coordinates: {
        x: 689,
        y: 252,
      },
    },
    {
      name: "Ancient wood from ruins",
      id: "wood-from-ramp",
      nadeType: "molo",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 726,
        y: 489,
      },
    },
  ],
  strats: [
    {
      name: "First pistol round",
      description:
        "All push B via ramp, get the entries, plant the bomb and position for the retake",
      side: "t",
      buyType: "pistols",
    },
    {
      name: "Second round",
      description:
        "Use when first round was won or bomb was planted. Oush B via ramp, get the entries, plant the bomb and position for the retake",
      side: "t",
      buyType: "smg",
    },
    {
      name: "Split mid",
      description:
        "First 3 players via mid to donut to a. Last 2 players via A main to a, try to come to A site at the same time",
      side: "t",
      buyType: "normal",
    },
    {
      name: "Nade mid house",
      description:
        "One player smokes mid house from spawn. All players rushes mid and throws grenades behind smoke in mid house",
      side: "t",
      buyType: "full-eco",
    },
  ],
};
