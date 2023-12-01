import { MapScheme } from "../components/composables/types";

export const anubisMapScheme: MapScheme = {
  map: "Anubis",
  lineUps: [
    {
      name: "Mid from CT spawn",
      id: "mid-from-spawn",
      nadeType: "smoke",
      throwType: "jump",
      side: "ct",
      coordinates: {
        x: 512,
        y: 628,
      },
    },
    {
      name: "A Connector from water",
      id: "a-connector-from-water",
      nadeType: "smoke",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 671,
        y: 384,
      },
    },
    {
      name: "B Connector outside from street",
      id: "b-connector-outside-from-street",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 436,
        y: 619,
      },
    },
    {
      name: "Mid house from T spawn",
      id: "mid-house-smoke-from-t-spawn",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 519,
        y: 507,
      },
    },
    {
      name: "Palace from B outside",
      id: "palace-from-b-outside",
      nadeType: "smoke",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 357,
        y: 440,
      },
    },
    {
      name: "Connector inside from B outside",
      id: "connector-inside-from-b-outside",
      nadeType: "smoke",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 371,
        y: 572,
      },
    },
    {
      name: "CT long from B outside",
      id: "ct-long-from-b-outside",
      nadeType: "smoke",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 300,
        y: 431,
      },
    },
    {
      name: "A site from canals",
      id: "a-site-from-canals",
      nadeType: "flashbang",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 788,
        y: 304,
      },
    },
    {
      name: "Mid house from bridge",
      id: "mid-house-from-bridge",
      nadeType: "molo",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 520,
        y: 483,
      },
    },
  ],
  strats: [],
};
