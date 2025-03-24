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
  {
    name: "T spawn",
    coordinates: {
      x: 865,
      y: 370,
    },
  },
  {
    name: "CT spawn",
    coordinates: {
      x: 245,
      y: 725,
    },
  },
  {
    name: "Underpass",
    coordinates: {
      x: 438,
      y: 280,
    },
    angle: 90,
  },
  {
    name: "Ladder",
    arrow: {
      from: { x: 378, y: 362 },
      to: { x: 410, y: 377 },
    },
    coordinates: {
      x: 345,
      y: 350,
    },
  },
  {
    name: "Triple box",
    arrow: {
      from: { x: 466, y: 736 },
      to: { x: 519, y: 754 },
    },
    coordinates: {
      x: 380,
      y: 731,
    },
  },
  {
    name: "Market",
    coordinates: {
      x: 203,
      y: 454,
    },
  },
  {
    name: "Short",
    coordinates: {
      x: 460,
      y: 290,
    },
    angle: 45,
  },
  {
    name: "Top mid",
    coordinates: {
      x: 703,
      y: 477,
    },
  },
  {
    name: "Chair",
    coordinates: {
      x: 570,
      y: 525,
    },
  },
] satisfies MapCallout[];
