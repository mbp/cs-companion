import { Strategy } from "../../../components/strategy/types";

export const anubisStrats = [
  {
    id: "pistol-fast-b-site-crunch",
    name: "Pistol fast B site crunch",
    side: "t",
    buyType: "pistols",
    steps: [
      "2 players run under through water, to connector to B. They push with their guns.",
      "They get the attention of everyone. 3 remaining players have been waiting outside B and ready to activate and run into B.",
    ],
  },
  {
    id: "fake-mid-push",
    name: "Fake mid push",
    side: "t",
    buyType: "pistols",
    steps: [
      "4 players fake mid hard, and drop down water to connector and go B",
      "1 person smokes mid dark and drops the flashes to team",
      "The 1 that smoked has bomb and lurks outside B, pushes when team gets to connector",
    ],
  },
  {
    id: "fake-a-push",
    name: "Fake A push",
    side: "t",
    buyType: "pistols",
    steps: [
      "5 players push A main and throw decoys inside A main",
      "The first player continues going to A site, but the 4 remaining players go immediately back to B connector",
      "You will often find a CT rotating water and B bomb site will be clear due to rotations",
    ],
  },
  {
    id: "fake-b-push",
    name: "Fake B push",
    side: "t",
    buyType: "pistols",
    steps: [
      "All 5 players throw a decoy outside B main. First player continues pushing B site alone",
      "The 4 remaining playersa walk mid (no steps). When mid starts to rotate, the 4 players push mid to A",
    ],
  },
] satisfies Strategy[];
