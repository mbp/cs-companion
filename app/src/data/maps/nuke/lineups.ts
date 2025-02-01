import { UtilityLineup } from "../../../components/utility/types";

export const nukeLineups = [
  {
    name: "Short red smoke yard (2nd smoke)",
    id: "yard-red-2nd",
    nadeType: "smoke",
    throwType: "normal",
    side: "t",
    coordinates: {
      x: 618,
      y: 734,
    },
    positionCoordinates: {
      x: 450,
      y: 694,
    },
  },
  {
    name: "Long red smoke yard (3rd smoke)",
    id: "yard-red-3rd",
    nadeType: "smoke",
    throwType: "normal",
    side: "t",
    coordinates: {
      x: 647,
      y: 734,
    },
    positionCoordinates: {
      x: 450,
      y: 694,
    },
  },
  {
    name: "Left garage smoke (no peek silo)",
    id: "left-garage-no-peek-silo",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 707,
      y: 627,
    },
    positionCoordinates: {
      x: 365,
      y: 592,
    },
    setPos: "setpos -891.968750 -1263.965210 -352.128754;setang -24.683836 -5.870274 0.000000"
  },
  {
    name: "Close main outside",
    id: "close-main-outside",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 625,
      y: 668,
    },
    positionCoordinates: {
      x: 386,
      y: 603,
    },
    setPos: "setpos -732.876404 -1322.138550 -344.439148;setang -17.740711 -12.312017 0.000000"
  },
  {
    name: "Far main outside",
    id: "far-main-outside",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 661,
      y: 668,
    },
    positionCoordinates: {
      x: 386,
      y: 603,
    },
    setPos: "setpos -732.876282 -1322.138428 -344.439148;setang -18.744043 -16.747084 0.000000"
  },
  {
    name: "Close main outside (alternative lineup)",
    id: "close-main-outside-alternative",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 637.5,
      y: 676,
    },
    positionCoordinates: {
      x: 302.5,
      y: 563,
    },
  },
  {
    name: "Far main outside (alternative lineup)",
    id: "far-main-outside-alternative",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 665.5,
      y: 690,
    },
    positionCoordinates: {
      x: 302.5,
      y: 563,
    },
  },
  {
    name: "Heaven outside",
    id: "outside-heaven-from-spawn",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 679,
      y: 487,
    },
    positionCoordinates: {
      x: 386,
      y: 603,
    },
    setPos: "setpos -732.876526 -1322.138428 -344.439148;setang -24.155907 23.037884 0.000000"
  },
  {
    name: "Garage",
    id: "garage",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 680,
      y: 685,
    },
    positionCoordinates: {
      x: 362,
      y: 578,
    },
    setPos: "setpos -917.242676 -1142.970093 -352.128754;setang -8.975819 -18.832769 0.000000"
  },
  {
    name: "Main",
    id: "main",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 616,
      y: 644,
    },
    positionCoordinates: {
      x: 258,
      y: 590,
    },
    setPos: "setpos -1754.500610 -1243.268188 -344.128754;setang -26.531881 -10.104750 0.000000"
  },
  {
    name: "Ramp smoke from trophy",
    id: "ramp-from-trophy",
    nadeType: "smoke",
    throwType: "run",
    side: "t",
    coordinates: {
      x: 543,
      y: 384,
    },
    positionCoordinates: {
      x: 526,
      y: 473,
    },
    setPos: "setpos 251.968460 -352.932007 -352.128754;setang -8.210173 131.758774 0.000000"
  },
  {
    name: "Molo top of hut from roof",
    description: "Throw when passing box on left side. Remember to shoot windows first",
    nadeType: "molo",
    id: "top-hut-from-roof",
    throwType: "runjump",
    side: "t",
    coordinates: {
      x: 550,
      y: 566,
    },
    positionCoordinates: {
      x: 426,
      y: 572,
    },
    setPos: "setpos -511.995056 -1136.759399 -91.146927;setang 0.000354 0.224640 0.000000"
  },
  {
    name: "Outside defensive smoke from t spawn",
    nadeType: "smoke",
    id: "outside-default-t-from-spawn",
    throwType: "runjump",
    side: "ct",
    coordinates: {
      x: 522,
      y: 724,
    },
    positionCoordinates: {
      x: 814,
      y: 454,
    },
    setPos: "setpos 2432.194824 -280.033936 -288.128754;setang -16.183159 -138.278900 0.000000"
  },
  {
    name: "Molo silo from credit card",
    nadeType: "molo",
    id: "silo-from-credit-card",
    throwType: "jump",
    side: "ct",
    coordinates: {
      x: 528,
      y: 638,
    },
    positionCoordinates: {
      x: 705,
      y: 655,
    },
    setPos: "setpos 1487.968628 -1711.971191 -352.128754;setang -12.777628 173.198715 0.000000"
  },
  {
    name: "Flash a site heaven from t roof",
    id: "a-site-heaven-from-t-roof",
    nadeType: "flashbang",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 591,
      y: 481,
    },
    positionCoordinates: {
      x: 496,
      y: 530,
    },
    setPos: "setpos -0.293609 -769.648376 -32.128754;setang 3.621947 13.883606 0.000000"
  },
  {
    name: "Smoke silo from spawn",
    id: "a-silo",
    description: "Shoow windows first",
    nadeType: "smoke",
    throwType: "jump",
    side: "t",
    coordinates: {
      x: 589,
      y: 510,
    },
    positionCoordinates: {
      x: 321,
      y: 591,
    },
    setPos: "setpos -1180.033691 -1263.968750 -255.968750;setang -14.361665 22.780426 0.000000"
  },
  {
    name: "Flash a through hut from lobby",
    id: "a-site-via-hut-from-lobby",
    nadeType: "flashbang",
    throwType: "run",
    side: "t",
    coordinates: {
      x: 549,
      y: 531,
    },
    positionCoordinates: {
      x: 504,
      y: 545,
    },
  },
  {
    name: "Flash b ramp (top) from trophy",
    id: "b-ramp-top-from-trophy",
    nadeType: "flashbang",
    throwType: "run",
    side: "t",
    coordinates: {
      x: 551,
      y: 405,
    },
    positionCoordinates: {
      x: 526,
      y: 473,
    },
  },
] satisfies UtilityLineup[];
