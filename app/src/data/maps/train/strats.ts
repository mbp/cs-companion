import { Strategy } from "../../../components/strategy/types";

export const trainStrats = [
  {
    id: "pistol-late-a-site-crunch",
    name: "Pistol late A site crunch",
    side: "t",
    buyType: "pistols",
    steps: [
      "4 players walk towards B.",
      "1 player hides and lurks in A main",
      "Take control over the area above popdog and near heaven. Look for entries.",
      "If contact and entry kill on B, rush B. If contact and entry kill in pop dog, rush A.",
      "When the 4 players start rushing, the lurk player activates and finds lurking kills.",
    ],
  },
] satisfies Strategy[];
