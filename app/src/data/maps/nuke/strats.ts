import { Strategy } from "../../../components/strategy/types";

export const nukeStrats = [
  {
    id: "pistols",
    name: "Full a rush (pistols)",
    side: "t",
    buyType: "pistols",
    descriptions: [
      "3 first (with bomb) goes through hut.",
      "2 last goes through squeaky door.",
      "The first player nades the door and one of the other players smokes main entrance. A flash is thrown inside A via squeaky.",
    ],
  },
  {
    id: "smg",
    name: "Full a rush (smgs)",
    side: "t",
    buyType: "smg",
    descriptions: [
      "3 first (with bomb) goes through hut.",
      "2 last goes through squeaky door.",
      "The first player nades the door and one of the other players smokes main entrance. A flash is thrown inside A via squeaky.",
    ],
  },
  {
    id: "normal-full-rush",
    name: "Full a rush (smgs)",
    side: "t",
    buyType: "normal",
    descriptions: [
      "If successful with 2 previous strats, now do a fake A rush by throwing the nades, but going ramp to B instead",
    ],
  },
  {
    id: "smoke-wall",
    name: "Smoke wall",
    side: "t",
    buyType: "normal",
    descriptions: [
      "Throw smoke wall outside",
      "All rush secret and plant the bomb B site",
    ],
  },
] as Strategy[];
