import { Strategy } from "../strategy/types";
import { UtilityLineup } from "../utility/types";
import { MapCallout } from "./callout";

export type Side = "t" | "ct";

export type Coordinates = {
  x: number;
  y: number;
};

export type MapScheme = {
  map: string;
  activeDuty: boolean;
  callouts: MapCallout[];
  lineUps: UtilityLineup[];
  strats: Strategy[];
};
