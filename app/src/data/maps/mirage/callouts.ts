import { MapCallout } from "../../../components/types/callout";

export const mirageCallouts = [
  {
    name: "Palace",
    coordinates: {
      x: 680,
      y: 813,
    },
  },
  {
    name: "Tetris",
    coordinates: {
      x: 616,
      y: 630,
    },
  },
  {
    name: "Firebox",
    coordinates: {
      x: 535,
      y: 880,
    },
    arrow: {
      from: { x: 563, y: 860 },
      to: { x: 583, y: 815 },
    },
  },
  {
    name: "Ticket",
    coordinates: {
      x: 430,
      y: 925,
    },
    arrow: {
      from: { x: 463, y: 908 },
      to: { x: 472, y: 856 },
    },
  },
  {
    name: "Ninja",
    coordinates: {
      x: 560,
      y: 595,
    },
    arrow: {
      from: { x: 579, y: 602 },
      to: { x: 579, y: 639 },
    },
  },
  {
    name: "Catwalk",
    coordinates: {
      x: 535,
      y: 430,
    },
  },
  {
    name: "Ramp",
    coordinates: {
      x: 715,
      y: 670,
    },
  },
  {
    name: "Bench",
    coordinates: {
      x: 90,
      y: 281,
    },
  },
  {
    name: "Jungle",
    coordinates: {
      x: 383,
      y: 595,
    },
  },
  {
    name: "Stairs",
    coordinates: {
      x: 539,
      y: 600,
    },
    angle: 90,
  },
] satisfies MapCallout[];
