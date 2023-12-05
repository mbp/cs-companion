import { Strategy } from "../strategy/types";
import { UtilityLineup } from "../utility/types";

export type Side = "t" | "ct";

export type Coordinates = {
  x: number;
  y: number;
};

export type MapScheme = {
  map: string;
  lineUps: UtilityLineup[];
  strats: Strategy[];
};

export interface PlayerPath {
  path: Coordinates[];
}

export type BuyType = "full-eco" | "anti-eco" | "normal" | "pistols" | "smg";
