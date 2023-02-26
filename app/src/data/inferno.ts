import { MapLineups } from "../components/composables/types";

export const infernoLineups: MapLineups = {
  map: "Inferno",
  smokes: [
    {
      name: "CT smoke from banana",
      folder: "inferno/t/smokes/ct-from-banana",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Coffin smoke from banana",
      folder: "inferno/t/smokes/coffin-from-banana",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Short smoke from second mid",
      folder: "inferno/t/smokes/short-from-second-mid",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Short smoke from t-ramp",
      folder: "inferno/t/smokes/short-from-t-ramp",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Deep long smoke from second mid",
      folder: "inferno/t/smokes/deep-long-from-second-mid",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Cross pit smoke from second mid",
      folder: "inferno/t/smokes/cross-pit-from-second-mid",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
  ],
  fragGrenades: [],
  molotovs: [
    {
      name: "Molo B dark from car",
      folder: "inferno/t/molos/b-dark-from-car",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Molo nuke box from car",
      folder: "inferno/t/molos/b-nuke-box-from-car",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Molo short A from mid",
      folder: "inferno/t/molos/short-a-from-mid",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
  ],
  flashBangs: [
    {
      name: "B site flash from car",
      folder: "inferno/t/flash/b-site-flash-from-car",
      ticks: "64/128",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Pop flash out of boiler",
      folder: "inferno/t/flash/pop-flash-boiler-from-apps",
      ticks: "64/128",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Pit(A) flash from apps",
      description: "Must be crouched",
      folder: "inferno/t/flash/a-site-from-apps",
      ticks: "64/128",
      throwType: "normal",
      side: "t",
    },
  ],
};
