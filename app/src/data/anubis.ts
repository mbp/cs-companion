import { MapLineups } from "../components/composables/types";

export const anubisLineups: MapLineups = {
  map: "Anubis",
  smokes: [
    {
      name: "A Connector from water",
      folder: "anubis/t/smokes/a-connector-from-water",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "B Connector outside smoke from street",
      folder: "anubis/t/smokes/b-connector-outside-from-street",
      ticks: "64",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 371.5,
        y: 546.09375,
      },
    },
    {
      name: "Mid house smoke from T spawn",
      folder: "anubis/t/smokes/mid-house-smoke-from-t-spawn",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
    {
      name: "Palace smoke from B outside",
      folder: "anubis/t/smokes/palace-from-b-outside",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
    {
      name: "Connector inside smoke from B outside",
      folder: "anubis/t/smokes/connector-inside-from-b-outside",
      ticks: "64",
      throwType: "jump",
      side: "t",
    },
    {
      name: "CT long smoke from B outside",
      folder: "anubis/t/smokes/ct-long-from-b-outside",
      ticks: "64",
      throwType: "normal",
      side: "t",
    },
  ],
  fragGrenades: [],
  molotovs: [],
  flashBangs: [],
};
