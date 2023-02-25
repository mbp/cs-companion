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
    },
    {
      name: "Short red smoke yard (2nd smoke)",
      folder: "nuke/t/smokes/yard-red-2nd",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Long red smoke yard (3rd smoke)",
      folder: "nuke/t/smokes/yard-red-3rd",
      ticks: "64/128",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Left garage smoke (no peek silo)",
      folder: "nuke/t/smokes/left-garage-no-peek-silo",
      ticks: "64/128",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Ramp smoke from trophy",
      folder: "nuke/t/smokes/ramp-from-trophy",
      ticks: "64",
      throwType: "run",
      side: "t",
    },
  ],
  fragGrenades: [],
  molotovs: [
    {
      name: "Molo top of hut from roof",
      folder: "nuke/t/molo/top-hut-from-roof",
      ticks: "64/128",
      throwType: "runjump",
      side: "t",
    },
  ],
  flashBangs: [
    {
      name: "Flash a site heaven from t roof",
      folder: "nuke/t/flash/a-site-heaven-from-t-roof",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Flash a through hut from lobby",
      folder: "nuke/t/flash/a-site-via-hut-from-lobby",
      ticks: "64",
      throwType: "run",
      side: "t",
    },
    {
      name: "Flash b ramp from trophy",
      folder: "nuke/t/flash/b-ramp-from-trophy",
      ticks: "64",
      throwType: "run",
      side: "t",
    },
  ],
};
