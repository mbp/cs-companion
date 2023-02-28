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
      coordinates: {
        x: 671,
        y: 384,
      },
    },
    {
      name: "B Connector outside smoke from street",
      folder: "anubis/t/smokes/b-connector-outside-from-street",
      ticks: "64",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 436,
        y: 619,
      },
    },
    {
      name: "Mid house smoke from T spawn",
      folder: "anubis/t/smokes/mid-house-smoke-from-t-spawn",
      ticks: "64",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 519,
        y: 507,
      },
    },
    {
      name: "Palace smoke from B outside",
      folder: "anubis/t/smokes/palace-from-b-outside",
      ticks: "64",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 357,
        y: 440,
      },
    },
    {
      name: "Connector inside smoke from B outside",
      folder: "anubis/t/smokes/connector-inside-from-b-outside",
      ticks: "64",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 371,
        y: 572,
      },
    },
    {
      name: "CT long smoke from B outside",
      folder: "anubis/t/smokes/ct-long-from-b-outside",
      ticks: "64",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 300,
        y: 431,
      },
    },
  ],
  fragGrenades: [],
  molotovs: [],
  flashBangs: [],
};
