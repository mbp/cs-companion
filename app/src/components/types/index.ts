import { Strategy } from "../strategy/types";
import { UtilityLineup } from "../utility/types";

export type Side = "t" | "ct";

export type Coordinates = {
  x: number;
  y: number;
};

export type MapScheme = {
  map: string;
  activeDuty: boolean;
  lineUps: UtilityLineup[];
  strats: Strategy[];
};
