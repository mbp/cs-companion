import { MapScheme } from "../components/types";

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
      positionCoordinates: {
        x: 464,
        y: 182
      }
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
      positionCoordinates: {
        x: 778,
        y: 523
      }
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
      positionCoordinates: {
        x: 666,
        y: 811
      }
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
      positionCoordinates: {
        x: 504,
        y: 970
      }
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
      positionCoordinates: {
        x: 278,
        y: 669
      }
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
      positionCoordinates: {
        x: 278,
        y: 669
      }
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
      positionCoordinates: {
        x: 278,
        y: 669
      }
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
      positionCoordinates: {
        x: 709,
        y: 497
      }
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
      positionCoordinates: {
        x: 430,
        y: 704
      }
    },
  ],
  strats: [],
};
