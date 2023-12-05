export type ThrowType = "normal" | "jump" | "runjump" | "run" | "rightclick";
export type Movement = "crouch" | "run" | "stand";
export type Side = "t" | "ct";
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

export type Coordinates = {
  x: number;
  y: number;
};

export type MapScheme = {
  map: string;
  lineUps: UtilityLineup[];
  strats: Strategy[];
};

export type Strategy = {
  id: string;
  side: Side;
  name: string;
  description: string;
  buyType: BuyType;
  playerPaths?: PlayerPath[];
};

export interface PlayerPath {
  path: Coordinates[];
}

export type BuyType = "full-eco" | "anti-eco" | "normal" | "pistols" | "smg";
