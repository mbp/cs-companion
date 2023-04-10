export type Ticks = "64" | "128" | "64/128";
export type ThrowType = "normal" | "jump" | "runjump" | "run";
export type Movement = "crouch" | "run" | "stand";
export type Side = "t" | "ct";
export type NadeType = "smoke" | "frag" | "molo" | "flashbang";

export type UtilityLineup = {
  name: string;
  description?: string;
  id: string;
  nadeType: NadeType;
  ticks: Ticks;
  movement?: Movement;
  throwType: ThrowType;
  side: Side;
  coordinates: Coordinates;
};

export type Coordinates = {
  x: number;
  y: number;
};

export type MapLineups = {
  map: string;
  lineUps: UtilityLineup[];
  strats?: Strategy[];
};

export type Strategy = {
  side: Side;
  name: string;
  description: string;
  buyType: BuyType;
};

export type BuyType = "full-eco" | "anti-eco" | "normal" | "pistols" | "smg";
