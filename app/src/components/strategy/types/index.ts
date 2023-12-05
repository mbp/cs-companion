import { BuyType, PlayerPath, Side } from "../../types";

export type Strategy = {
  id: string;
  side: Side;
  name: string;
  description: string;
  buyType: BuyType;
  playerPaths?: PlayerPath[];
};
