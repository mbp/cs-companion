import { MapScheme } from "../components/types";

export const nukeLineups: MapScheme = {
  map: "Nuke",
  lineUps: [
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
    },
    {
      name: "Molo top of hut from roof",
      description: "Throw when passing box on left side",
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
    },
    {
      name: "Outside defensive smoke from t spawn",
      nadeType: "smoke",
      id: "outside-default-t-from-spawn",
      throwType: "jump",
      side: "ct",
      coordinates: {
        x: 522,
        y: 724,
      },
      positionCoordinates: {
        x: 814,
        y: 454,
      },
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
    },
    {
      name: "Smoke silo from spawn",
      id: "a-silo",
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
  ],
  strats: [
    {
      id: "pistols",
      buyType: "pistols",
      name: "Full a rush (pistols)",
      description:
        "3 first (with bomb) goes through hut. 2 last goes through squeaky door. The first player nades the door and one of the other players smokes main entrance. A flash is thrown inside A via squeaky.",
      side: "t",
    },
    {
      id: "smg",
      buyType: "smg",
      name: "Full a rush (smgs)",
      description:
        "3 first (with bomb) goes through hut. 2 last goes through squeaky door. The first player nades the door and one of the other players smokes main entrance. A flash is thrown inside A via squeaky.",
      side: "t",
    },
    {
      id: "normal-full-rush",
      buyType: "normal",
      name: "Full a rush (smgs)",
      description:
        "If successful with 2 previous strats, now do a fake A rush by throwing the nades, but going ramp to B instead",
      side: "t",
    },
    {
      id: "smoke-wall",
      buyType: "normal",
      name: "Smoke wall",
      description:
        "Throw smoke wall outside and all go secret to plant the bomb under",
      side: "t",
    },
  ],
};
