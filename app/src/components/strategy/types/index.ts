import { Coordinates, Side } from "../../types";

export interface PlayerPath {
  path: Coordinates[];
}

export type BuyType = "full-eco" | "anti-eco" | "normal" | "pistols" | "smg";

export type Strategy = {
  id: string;
  side: Side;
  name: string;
  description: string;
  buyType: BuyType;
  playerPaths?: PlayerPath[];
};
