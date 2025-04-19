import { MapCallout } from "../../../components/types/callout";

export const anubisCallouts = [
  {
    name: "T spawn",
    coordinates: {
      x: 450,
      y: 937,
    },
  },
  {
    name: "CT spawn",
    coordinates: {
      x: 394,
      y: 224,
    },
  },
  {
    name: "Palace",
    coordinates: {
      x: 360,
      y: 425,
    },
  },
  {
    name: "Aladdin",
    coordinates: {
      x: 861,
      y: 542,
    },
    arrow: {
      from: { x: 855, y: 546 },
      to: { x: 804, y: 570 },
    },
  },
  {
    name: "Heaven",
    coordinates: {
      x: 655,
      y: 165,
    },
    arrow: {
      from: { x: 684, y: 176 },
      to: { x: 714, y: 213 },
    },
  },
  {
    name: "Broken",
    coordinates: {
      x: 615,
      y: 318,
    },
    arrow: {
      from: { x: 655, y: 322 },
      to: { x: 695, y: 323 },
    },
  },
  {
    name: "Pool / fountain",
    coordinates: {
      x: 885,
      y: 220,
    },
    arrow: {
      from: { x: 901, y: 233 },
      to: { x: 869, y: 275 },
    },
  },
  {
    name: "Top mid",
    coordinates: {
      x: 468,
      y: 693,
    },
  },
  {
    name: "Dark",
    coordinates: {
      x: 383,
      y: 524,
    },
  },
  {
    name: "Connector",
    coordinates: {
      x: 340,
      y: 680,
    },
    arrow: {
      from: { x: 383, y: 662 },
      to: { x: 405, y: 609 },
    },
  },
  {
    name: "Boat / water",
    coordinates: {
      x: 670,
      y: 545,
    },
  },
  {
    name: "B main",
    coordinates: {
      x: 215,
      y: 570,
    },
  },
  {
    name: "Stairs",
    coordinates: {
      x: 683,
      y: 662,
    },
  },
] satisfies MapCallout[];
