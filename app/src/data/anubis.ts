import { MapScheme } from "../components/composables/types";

export const anubisMapScheme: MapScheme = {
  map: "Anubis",
  lineUps: [
    {
      name: "A Connector from water",
      id: "a-connector-from-water",
      nadeType: "smoke",
      ticks: "64/128",
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
      ticks: "64/128",
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
      ticks: "64/128",
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
      ticks: "64/128",
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
      ticks: "64/128",
      throwType: "jump",
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
      ticks: "64/128",
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
      ticks: "64/128",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 788,
        y: 304,
      },
    },
  ],
};
