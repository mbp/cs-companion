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
      coordinates: {
        x: 609,
        y: 224,
      },
    },
    {
      name: "Coffin smoke from banana",
      folder: "inferno/t/smokes/coffin-from-banana",
      ticks: "64",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 523,
        y: 145,
      },
    },
    {
      name: "Short smoke from second mid",
      folder: "inferno/t/smokes/short-from-second-mid",
      ticks: "64",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 715,
        y: 706,
      },
    },
    {
      name: "Short smoke from t-ramp",
      folder: "inferno/t/smokes/short-from-t-ramp",
      ticks: "64",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 715,
        y: 706,
      },
    },
    {
      name: "Deep long smoke from second mid",
      folder: "inferno/t/smokes/deep-long-from-second-mid",
      ticks: "64",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 715,
        y: 589,
      },
    },
    {
      name: "Cross pit smoke from second mid",
      folder: "inferno/t/smokes/cross-pit-from-second-mid",
      ticks: "64",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 889,
        y: 781,
      },
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
      coordinates: {
        x: 433,
        y: 138,
      },
    },
    {
      name: "Molo nuke box from car",
      folder: "inferno/t/molos/b-nuke-box-from-car",
      ticks: "64",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 432,
        y: 260,
      },
    },
    {
      name: "Molo short A from mid",
      folder: "inferno/t/molos/short-a-from-mid",
      ticks: "64",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 712,
        y: 790,
      },
    },
  ],
  flashBangs: [
    {
      name: "B site flash from car",
      folder: "inferno/t/flash/b-site-flash-from-car",
      ticks: "64/128",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 608,
        y: 238,
      },
    },
    {
      name: "Pop flash out of boiler",
      folder: "inferno/t/flash/pop-flash-boiler-from-apps",
      ticks: "64/128",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 692,
        y: 724,
      },
    },
    {
      name: "Pit(A) flash from apps",
      description: "Must be crouched",
      folder: "inferno/t/flash/a-site-from-apps",
      ticks: "64/128",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 863,
        y: 868,
      },
    },
  ],
};
