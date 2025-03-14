import { Strategy } from "../../../components/strategy/types";

export const infernoStrats = [
  {
    id: "oldboys-push-long-to-b",
    name: "Oldboys push long to B",
    side: "t",
    buyType: "pistols",
    steps: [
      "4 players run second mid and directly to long.",
      "At the same time, short has been smoked off.",
      "Continue running through CT spawn and to B for a plan. Lurk player tries to catch anyone rotating in banana.",
    ],
  },
] satisfies Strategy[];
