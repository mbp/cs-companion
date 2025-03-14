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
] satisfies Strategy[];
