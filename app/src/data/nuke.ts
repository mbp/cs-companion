import { MapLineups } from "../components/composables/types";

export const nukeLineups: MapLineups = {
  map: "Nuke",
  lineUps: [
    {
      name: "One way Yard smoke from ct",
      description: "Must be crouched",
      id: "one-way-yard-from-ct",
      nadeType: "smoke",
      ticks: "64",
      throwType: "jump",
      side: "ct",
      coordinates: {
        x: 582,
        y: 692,
      },
    },
    {
      name: "Short red smoke yard (2nd smoke)",
      id: "yard-red-2nd",
      nadeType: "smoke",
      ticks: "64",
      throwType: "jump",
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
      ticks: "64/128",
      throwType: "jump",
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
      ticks: "64/128",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 707,
        y: 627,
      },
    },
    {
      name: "Ramp smoke from trophy",
      id: "ramp-from-trophy",
      nadeType: "smoke",
      ticks: "64",
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
      ticks: "64/128",
      throwType: "runjump",
      side: "t",
      coordinates: {
        x: 550,
        y: 566,
      },
    },
    {
      name: "Flash a site heaven from t roof",
      id: "a-site-heaven-from-t-roof",
      nadeType: "flashbang",
      ticks: "64",
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
      ticks: "64",
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
      ticks: "64",
      throwType: "run",
      side: "t",
      coordinates: {
        x: 545,
        y: 352,
      },
    },
  ],
};
