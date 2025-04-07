import { Coordinates, Side } from "../../types";

export type ThrowType = "normal" | "jump" | "rightclick";
export type Position = "crouch" | "stand";
export type Movement = "run" | "hold d" | "walk";
export type NadeType = "smoke" | "frag" | "molo" | "flashbang";
export type ClickType = "left" | "right" | "left+right";

export type UtilityLineup = {
  name: string;
  description?: string;
  id: string;
  nadeType: NadeType;
  position?: Position;
  movement?: Movement;
  throwType: ThrowType;
  side: Side;
  clickType?: ClickType;
  coordinates: Coordinates;
  positionCoordinates: Coordinates;
  setPos: string;
  hasVideo?: boolean;
};
