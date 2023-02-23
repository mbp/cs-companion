import { MapLineups } from "../components/composables/types";

export const nukeLineups: MapLineups = {
  map: "Nuke",
  smokes: [
    {
      name: "Yard smoke from ct",
      resultImage: "nuke/ct/smokes/nuke-result-yard-from-ct.png",
      aimImage: "nuke/ct/smokes/nuke-aim-yard-from-ct.png",
      posImage: "nuke/ct/smokes/nuke-pos-yard-from-ct.png",
      ticks: "64",
      throwType: "jump",
      side: "ct",
    },
    {
      name: "Short red smoke yard (2nd smoke)",
      resultImage: "nuke/t/smokes/nuke-result-yard-short-red.png",
      aimImage: "nuke/t/smokes/nuke-aim-yard-short-red.png",
      posImage: "nuke/t/smokes/nuke-pos-yard-smoke-red.png",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Long red smoke yard (3rd smoke)",
      resultImage: "nuke/t/smokes/nuke-result-yard-long-red.png",
      aimImage: "nuke/t/smokes/nuke-aim-yard-long-red.png",
      posImage: "nuke/t/smokes/nuke-pos-yard-smoke-red.png",
      ticks: "64/128",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Left garage smoke (no peek silo)",
      resultImage: "nuke/t/smokes/nuke-result-left-garage-no-peek-silo.png",
      aimImage: "nuke/t/smokes/nuke-aim-left-garage-no-peek-silo.png",
      posImage: "nuke/t/smokes/nuke-pos-left-garage-no-peek-silo.png",
      ticks: "64/128",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Ramp smoke from trophy",
      resultImage: "nuke/t/smokes/nuke-result-ramp-smoke-from-trophy.png",
      aimImage: "nuke/t/smokes/nuke-aim-ramp-smoke-from-trophy.png",
      posImage: "nuke/t/smokes/nuke-pos-ramp-smoke-from-trophy.png",
      ticks: "64",
      throwType: "run",
      side: "t",
    },
  ],
  fragGrenades: [],
  molotovs: [
    {
      name: "Molo top of hut from roof",
      resultImage: "nuke/t/molo/nuke-result-molo-hut.png",
      aimImage: "nuke/t/molo/nuke-aim-molo-hut.png",
      posImage: "nuke/t/molo/nuke-pos-molo-hut.png",
      ticks: "64/128",
      throwType: "runjump",
      side: "t",
    },
  ],
  flashBangs: [
    {
      name: "Flash a site heaven from t roof",
      resultImage:
        "nuke/t/flash/nuke-result-flash-a-site-heaven-from-t-roof.png",
      aimImage: "nuke/t/flash/nuke-aim-flash-a-site-heaven-from-t-roof.png",
      posImage: "nuke/t/flash/nuke-pos-flash-a-site-heaven-from-t-roof.png",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Flash a through hut from lobby",
      resultImage:
        "nuke/t/flash/nuke-result-flash-a-site-through-hut-from-lobby.png",
      aimImage: "nuke/t/flash/nuke-aim-flash-a-site-through-hut-from-lobby.png",
      ticks: "64",
      throwType: "run",
      side: "t",
    },
    {
      name: "Flash b ramp from trophy",
      resultImage: "nuke/t/flash/nuke-result-flash-b-ramp-from-trophy.png",
      aimImage: "nuke/t/flash/nuke-aim-flash-b-ramp-from-trophy.png",
      posImage: "nuke/t/flash/nuke-pos-flash-b-ramp-from-trophy.png",
      ticks: "64",
      throwType: "run",
      side: "t",
    },
  ],
};
