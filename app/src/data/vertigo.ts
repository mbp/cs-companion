import { MapScheme } from "../components/composables/types";

export const vertigoMapScheme: MapScheme = {
  map: "Vertigo",
  lineUps: [
    {
      name: "Ramp from a default plant",
      id: "ramp-from-a-default-plant",
      nadeType: "smoke",
      ticks: "64/128",
      throwType: "normal",
      side: "ct",
      coordinates: {
        x: 595,
        y: 646,
      },
    },
    {
      name: "Top ramp (one way) from backsite",
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
      name: "Guardian from mid",
      id: "guardian-from-mid",
      nadeType: "smoke",
      ticks: "64/128",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 421,
        y: 314,
      },
    },
    {
      name: "A site from ramp",
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
      name: "B site from t",
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
      name: "A short from t spawn",
      id: "a-short-from-t-spawn",
      nadeType: "smoke",
      ticks: "64",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 525,
        y: 724,
      },
    },
    {
      name: "B site from t",
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
    {
      name: "B site headshot one-way from stairs",
      id: "b-one-way-headshot-from-stairs",
      nadeType: "smoke",
      ticks: "64/128",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 248,
        y: 217,
      },
    },
  ],
  strats: [
    {
      buyType: "pistols",
      name: "First decoy round",
      description:
        "All buy decoy, throw it on the A ramp. Immediately turn back to B and plant the bomb",
      side: "t",
    },
  ],
};
