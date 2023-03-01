import { MapLineups } from "../components/composables/types";

export const nukeLineups: MapLineups = {
  map: "Nuke",
  smokes: [
    {
      name: "Yard smoke from ct",
      folder: "nuke/ct/smokes/yard-from-ct",
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
      folder: "nuke/t/smokes/yard-red-2nd",
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
      folder: "nuke/t/smokes/yard-red-3rd",
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
      folder: "nuke/t/smokes/left-garage-no-peek-silo",
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
      folder: "nuke/t/smokes/ramp-from-trophy",
      ticks: "64",
      throwType: "run",
      side: "t",
      coordinates: {
        x: 543,
        y: 384,
      },
    },
  ],
  fragGrenades: [],
  molotovs: [
    {
      name: "Molo top of hut from roof",
      description: "Throw when reaching ladder on right",
      folder: "nuke/t/molo/top-hut-from-roof",
      ticks: "64/128",
      throwType: "runjump",
      side: "t",
      coordinates: {
        x: 550,
        y: 566,
      },
    },
  ],
  flashBangs: [
    {
      name: "Flash a site heaven from t roof",
      folder: "nuke/t/flash/a-site-heaven-from-t-roof",
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
      folder: "nuke/t/flash/a-site-via-hut-from-lobby",
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
      folder: "nuke/t/flash/b-ramp-from-trophy",
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
