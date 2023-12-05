import { Coordinates, Side } from "../../types";

export interface PlayerPath {
  path: Coordinates[];
}

export interface StrategyMessage {
  secondStart: number;
  secondEnd: number;
  message: string;
}

export interface StrategyEvents {
  playerPaths: PlayerPath[];
  messages: StrategyMessage[];
}

export type BuyType = "full-eco" | "anti-eco" | "normal" | "pistols" | "smg";

export type Strategy = {
  id: string;
  side: Side;
  name: string;
  description: string;
  buyType: BuyType;
  events?: StrategyEvents;
};
