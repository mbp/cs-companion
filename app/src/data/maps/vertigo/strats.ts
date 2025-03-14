import { Strategy } from "../../../components/strategy/types";

export const vertigoStrats = [
  {
    id: "first-decoy",
    name: "First decoy round",
    buyType: "pistols",
    side: "t",
    steps: [
      "All buy decoy, throw it on the A ramp.",
      "Immediately turn back to B and plant",
    ],
  },
] satisfies Strategy[];
