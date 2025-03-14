import { Strategy } from "../../../components/strategy/types";

export const mirageStrats = [
  {
    id: "pistol-late-a-site-crunch",
    name: "Pistol late A site crunch",
    side: "t",
    buyType: "pistols",
    steps: [
      "4 players walk to underpass. 1 player on T ramp smokes jungle and short",
      "Then the 4 players push A site and ramp player pushes A site as well, getting lurk kills.",
    ],
  },
  {
    id: "pistol-palace-split",
    name: "Palace split",
    side: "t",
    buyType: "pistols",
    steps: [
      "3 players go Palace and shift to exit",
      "2 players buy a smoke and 2 flashbangs and smoke stairs and jungle",
      "When smokes have landed, call players in palace should run out and flash for them over palace",
      "Take CT and plant for CT, stay CT when enemy retake site",
    ],
    tips: ["Care for Palace/Ramp push by CT"],
  },
] satisfies Strategy[];
