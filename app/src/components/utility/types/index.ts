import { Coordinates, Side } from "../../types";

export type ThrowType = "normal" | "jump" | "runjump" | "run" | "rightclick";
export type Movement = "crouch" | "run" | "stand";
export type NadeType = "smoke" | "frag" | "molo" | "flashbang";
export type ClickType = "left" | "right" | "left+right";

export type UtilityLineup = {
  name: string;
  description?: string;
  id: string;
  nadeType: NadeType;
  movement?: Movement;
  throwType: ThrowType;
  side: Side;
  clickType?: ClickType;
  coordinates: Coordinates;
};
