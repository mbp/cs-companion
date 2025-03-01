import { MapCallout } from "../../../components/types/callout";

export const infernoCallouts = [
  {
    name: "T spawn",
    coordinates: {
      x: 75,
      y: 686,
    },
  },
  {
    name: "Graveyard",
    coordinates: {
      x: 922,
      y: 707,
    },
  },
  {
    name: "Banana",
    coordinates: {
      x: 468,
      y: 480,
    },
    angle: -59,
  },
  {
    name: "Coffins",
    coordinates: {
      x: 440.484375,
      y: 74,
    },
    arrow: {
      from: { x: 478.984375, y: 90 },
      to: { x: 528.984375, y: 150 },
    },
  },
  {
    name: "Mid",
    coordinates: {
      x: 547,
      y: 673,
    },
  },
] satisfies MapCallout[];
