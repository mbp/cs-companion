export type Ticks = "64" | "128" | "64/128";
export type ThrowType = "normal" | "jump" | "runjump" | "run";
export type Side = "t" | "ct";

export type UtilityLineup = {
  name: string;
  description?: string;
  folder: string;
  ticks: Ticks;
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
  smokes: UtilityLineup[];
  fragGrenades: UtilityLineup[];
  molotovs: UtilityLineup[];
  flashBangs: UtilityLineup[];
};
