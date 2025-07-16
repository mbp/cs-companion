import { MapCallout } from "../../../components/types/callout";

export const overpassCallouts = [
  {
    name: "CT spawn",
    coordinates: {
      x: 461,
      y: 183,
    },
  },
  {
    name: "T spawn",
    coordinates: {
      x: 640,
      y: 990,
    },
    angle: -45,
  },
  {
    name: "Long",
    coordinates: {
      x: 165,
      y: 560,
    },
    angle: -90,
  },
  {
    name: "Playground",
    coordinates: {
      x: 360,
      y: 880,
    },
  },
  {
    name: "Fountain",
    coordinates: {
      x: 411,
      y: 732,
    },
  },
  {
    name: "Bank",
    coordinates: {
      x: 421,
      y: 84,
    },
  },
  {
    name: "Monster",
    coordinates: {
      x: 819,
      y: 409,
    },
  },
  {
    name: "Balloons",
    coordinates: {
      x: 309,
      y: 593,
    },
  },
  {
    name: "Toilets",
    coordinates: {
      x: 455,
      y: 475,
    },
    angle: -90,
  },
  {
    name: "Long toilets",
    coordinates: {
      x: 250,
      y: 460,
    },
    angle: 45,
  },
  {
    name: "Mid",
    coordinates: {
      x: 395,
      y: 614,
    },
  },
  {
    name: "Short",
    coordinates: {
      x: 689,
      y: 460,
    },
  },
  {
    name: "Heaven",
    coordinates: {
      x: 643,
      y: 171,
    },
    arrow: {
      from: {
        x: 663,
        y: 184,
      },
      to: {
        x: 607,
        y: 236,
      },
    },
  },
  {
    name: "Connector",
    coordinates: {
      x: 490,
      y: 595,
    },
  },
] satisfies MapCallout[];
