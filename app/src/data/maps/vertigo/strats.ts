import { Strategy } from "../../../components/strategy/types";

export const vertigoStrats = [
  {
    id: "first-decoy",
    buyType: "pistols",
    name: "First decoy round",
    description:
      "All buy decoy, throw it on the A ramp. Immediately turn back to B and plant the bomb",
    side: "t",
  },
] satisfies Strategy[];
