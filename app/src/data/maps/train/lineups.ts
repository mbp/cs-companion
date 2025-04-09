import { UtilityLineup } from "../../../components/utility/types";

export const trainLineups = [
  {
    name: "Camera from alley",
    id: "camera-from-alley",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 729.5,
      y: 462,
    },
    positionCoordinates: {
      x: 172.5,
      y: 144,
    },
    setPos:
      "setpos -1499.031250 1479.967896 -108.128754;setang -25.449415 -29.192505 0.000000",
  },
  {
    name: "Z from from alley",
    id: "z-from-alley",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 588.5,
      y: 557,
    },
    positionCoordinates: {
      x: 172.5,
      y: 144,
    },
    setPos:
      "setpos -1499.031250 1479.967896 -108.128754;setang -30.940601 -45.798126 0.000000",
  },
  {
    name: "Sandwich from from alley",
    id: "sandwich-from-alley",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 613,
      y: 410,
    },
    positionCoordinates: {
      x: 105,
      y: 145,
    },
    setPos:
      "setpos -1755.031250 1479.968384 -108.128754;setang -20.195826 -27.133234 0.000000",
  },
  {
    name: "Sandwich from from alley - alternative",
    id: "sandwich-from-alley-alternative",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 615,
      y: 415,
    },
    positionCoordinates: {
      x: 71,
      y: 142,
    },
    setPos:
      "setpos -2011.029785 1479.926636 -108.128754;setang -19.879309 -27.140028 0.000000",
  },
  {
    name: "Sandwich from from alley - instant spawn 5",
    id: "sandwich-from-alley-instant-spawn-5",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 620,
      y: 391,
    },
    positionCoordinates: {
      x: 91,
      y: 177,
    },
    setPos:
      "setpos -2033.000000 1362.233032 -108.128754;setang -43.903240 -22.688053 0.000000",
  },
  {
    name: "Connector from halls",
    id: "connector-from-halls",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 705,
      y: 690,
    },
    positionCoordinates: {
      x: 302,
      y: 761,
    },
    setPos:
      "setpos -1040.968750 -1112.474121 -90.128754;setang 4.409046 10.961668 0.000000",
  },
  {
    name: "A site from outside",
    id: "a-site-from-outside",
    nadeType: "flashbang",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 440,
      y: 335,
    },
    positionCoordinates: {
      x: 365,
      y: 133,
    },
    setPos:
      "setpos -678.041504 1552.719604 -150.100311;setang -6.652642 -73.545013 0.000000",
  },
  {
    name: "A site from main",
    id: "a-site-from-main",
    nadeType: "flashbang",
    throwType: "normal",
    movement: "run",
    side: "t",
    coordinates: {
      x: 439,
      y: 444,
    },
    positionCoordinates: {
      x: 363,
      y: 354,
    },
    setPos:
      "setpos -873.967957 684.250793 -152.128754;setang -13.278583 -53.988525 0.000000",
  },
  {
    name: "Z (b side) from from alley",
    id: "z-connector-b-from-alley",
    description: "Walk (shift), then throw at the horizontal line",
    nadeType: "smoke",
    throwType: "jump",
    movement: "walk",
    side: "t",
    coordinates: {
      x: 714,
      y: 667,
    },
    positionCoordinates: {
      x: 347,
      y: 139,
    },
    setPos:
      "setpos -840.421631 1511.928833 -148.221481;setang -25.423033 -58.745258 0.000000",
  },
  {
    name: "Left main from z",
    id: "left-main-from-z",
    description:
      "Throw the flash running, then go on the right side of eletric and peek main",
    nadeType: "flashbang",
    throwType: "normal",
    side: "ct",
    movement: "run",
    coordinates: {
      x: 498,
      y: 460,
    },
    positionCoordinates: {
      x: 608,
      y: 570,
    },
    setPos:
      "setpos 145.233185 -246.222778 -152.128754;setang -5.966216 133.430527 0.000000",
  },
  {
    name: "Main nade from z",
    id: "main-nade-from-z",
    nadeType: "frag",
    throwType: "jump",
    side: "ct",
    coordinates: {
      x: 356.984375,
      y: 361,
    },
    positionCoordinates: {
      x: 561.984375,
      y: 563,
    },
    setPos:
      "setpos 18.031458 -267.968750 -152.128754;setang 9.768274 138.287872 0.000000",
  },
  {
    name: "Main molo from z",
    id: "main-molo-from-z",
    nadeType: "molo",
    throwType: "jump",
    side: "ct",
    coordinates: {
      x: 424.984375,
      y: 385,
    },
    positionCoordinates: {
      x: 561.984375,
      y: 563,
    },
    setPos:
      "setpos 18.027657 -267.968689 -152.128754;setang 10.507810 139.286179 0.000000",
  },
] satisfies UtilityLineup[];
