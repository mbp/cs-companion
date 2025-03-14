import { Coordinates, Side } from "../../types";

export interface ActionThrow {
  id: string;
  playSecond: number;
}

export interface PlayerPath {
  path: Coordinates[];
  actionThrows?: ActionThrow[];
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
  name: string;
  side: Side;
  buyType: BuyType;
  descriptions: string[];
  events?: StrategyEvents;
};
