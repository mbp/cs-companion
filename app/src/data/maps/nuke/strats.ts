import { Strategy } from "../../../components/strategy/types";

export const nukeStrats = [
  {
    id: "pistols",
    buyType: "pistols",
    name: "Full a rush (pistols)",
    description:
      "3 first (with bomb) goes through hut. 2 last goes through squeaky door. The first player nades the door and one of the other players smokes main entrance. A flash is thrown inside A via squeaky.",
    side: "t",
  },
  {
    id: "smg",
    buyType: "smg",
    name: "Full a rush (smgs)",
    description:
      "3 first (with bomb) goes through hut. 2 last goes through squeaky door. The first player nades the door and one of the other players smokes main entrance. A flash is thrown inside A via squeaky.",
    side: "t",
  },
  {
    id: "normal-full-rush",
    buyType: "normal",
    name: "Full a rush (smgs)",
    description:
      "If successful with 2 previous strats, now do a fake A rush by throwing the nades, but going ramp to B instead",
    side: "t",
  },
  {
    id: "smoke-wall",
    buyType: "normal",
    name: "Smoke wall",
    description:
      "Throw smoke wall outside and all go secret to plant the bomb under",
    side: "t",
  },
] as Strategy[];
