import { MapScheme } from "../components/composables/types";

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
    },
    {
      name: "Molo top of hut from roof",
      description: "Throw when passing ladder on right",
      nadeType: "molo",
      id: "top-hut-from-roof",
      throwType: "runjump",
      side: "t",
      coordinates: {
        x: 550,
        y: 566,
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
    },
    {
      name: "Flash a site heaven from t roof",
      id: "a-site-heaven-from-t-roof",
      nadeType: "flashbang",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 591,
        y: 481,
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
    },
    {
      name: "Flash b ramp from trophy",
      id: "b-ramp-from-trophy",
      nadeType: "flashbang",
      throwType: "run",
      side: "t",
      coordinates: {
        x: 545,
        y: 352,
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
    },
  ],
  strats: [
    {
      buyType: "pistols",
      name: "Full a rush (pistols)",
      description:
        "3 first (with bomb) goes through hut. 2 last goes through squeaky door. The first player nades the door and one of the other players smokes main entrance. A flash is thrown inside A via squeaky.",
      side: "t",
    },
    {
      buyType: "smg",
      name: "Full a rush (smgs)",
      description:
        "3 first (with bomb) goes through hut. 2 last goes through squeaky door. The first player nades the door and one of the other players smokes main entrance. A flash is thrown inside A via squeaky.",
      side: "t",
    },
    {
      buyType: "normal",
      name: "Full a rush (smgs)",
      description:
        "If successful with 2 previous strats, now do a fake A rush by throwing the nades, but going ramp to B instead",
      side: "t",
    },
    {
      buyType: "normal",
      name: "Smoke wall",
      description:
        "Throw smoke wall outside and all go secret to plant the bomb under",
      side: "t",
    },
  ],
};
