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
  {
    id: "follow-the-leader",
    name: "Follow the leader",
    side: "t",
    buyType: "pistols",
    steps: [
      "All 5 players run second mid and directly to apps.",
      "Players buy decoys and armor. Throw decoys in bedroom for extra confusion",
      "Push apps, possibly finding kills, but no matter what, continue to bedroom and jump down mid and push B",
      "CT players will often have rotated, either through banana or CT spawn, so be ready for a fight",
    ],
  },
] satisfies Strategy[];
