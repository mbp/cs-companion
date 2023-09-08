import { MapScheme } from "../components/composables/types";

export const ancientMapScheme: MapScheme = {
  map: "Ancient",
  lineUps: [
    {
      name: "Long B from ruins",
      id: "long-b-from-ruins",
      nadeType: "smoke",
      ticks: "64/128",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 826,
        y: 369,
      },
    },
    {
      name: "Short B from ruins",
      id: "short-b-from-ruins-128",
      nadeType: "smoke",
      ticks: "128",
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
      ticks: "64/128",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 708,
        y: 395,
      },
    },
    {
      name: "Mid from t spawn",
      id: "mid-from-t-spawn-128",
      nadeType: "smoke",
      ticks: "128",
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
      ticks: "64/128",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 315,
        y: 329,
      },
    },
    {
      name: "Donut mid from spawn",
      id: "mid-donut-from-spawn-128",
      nadeType: "smoke",
      ticks: "128",
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
      ticks: "64/128",
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
      ticks: "64/128",
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
      ticks: "64/128",
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
      ticks: "64/128",
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
