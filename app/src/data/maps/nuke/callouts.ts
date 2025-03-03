import { MapCallout } from "../../../components/types/callout";

export const nukeCallouts = [
  {
    name: "Silo",
    coordinates: {
      x: 485,
      y: 658,
    },
  },
  {
    name: "Lobby",
    coordinates: {
      x: 459,
      y: 544,
    },
  },
  {
    name: "A main",
    coordinates: {
      x: 570,
      y: 655,
    },
  },
  {
    name: "T spawn",
    coordinates: {
      x: 165,
      y: 560,
    },
  },
  {
    name: "CT spawn",
    coordinates: {
      x: 800,
      y: 475,
    },
  },
  {
    name: "Red",
    coordinates: {
      x: 525,
      y: 845,
    },
    arrow: {
      from: { x: 542, y: 828 },
      to: { x: 577, y: 742 },
    },
  },
  {
    name: "Trophy",
    coordinates: {
      x: 427,
      y: 408,
    },
    arrow: {
      from: { x: 462, y: 418 },
      to: { x: 509, y: 474 },
    },
  },
] satisfies MapCallout[];
