import { MapLineups } from "../components/composables/types";

export const vertigoLineups: MapLineups = {
  map: "Vertigo",
  lineUps: [
    {
      name: "Smoke ramp from a default plant",
      id: "ramp-from-a-default-plant",
      nadeType: "smoke",
      ticks: "64",
      throwType: "normal",
      side: "ct",
      coordinates: {
        x: 595,
        y: 646,
      },
    },
    {
      name: "Smoke top ramp (one way) from backsite",
      id: "top-ramp-one-way-from-backsite",
      nadeType: "smoke",
      ticks: "64",
      throwType: "normal",
      side: "ct",
      coordinates: {
        x: 696,
        y: 690,
      },
    },
    {
      name: "Smoke guardian from mid",
      id: "guardian-from-mid",
      nadeType: "smoke",
      ticks: "64",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 421,
        y: 314,
      },
    },
    {
      name: "Smoke a site from ramp",
      id: "a-site-from-ramp",
      nadeType: "smoke",
      ticks: "64",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 677,
        y: 564,
      },
    },
    {
      name: "Smoke b site from t",
      id: "b-site-from-t",
      nadeType: "smoke",
      ticks: "64",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 214,
        y: 302,
      },
    },
    {
      name: "Smoke a short from t spawn",
      id: "a-short-from-t-spawn",
      nadeType: "smoke",
      ticks: "64",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 214,
        y: 517,
      },
    },
    {
      name: "Flash b site from t",
      id: "b-site-from-t",
      nadeType: "flashbang",
      ticks: "64",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 204,
        y: 505,
      },
    },
  ],
};
