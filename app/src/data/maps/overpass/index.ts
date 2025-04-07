import { MapScheme } from "../../../components/types";
import { overpassCallouts } from "./callouts";
import { overpassLineups } from "./lineups";

export const overpassMapScheme: MapScheme = {
  map: "Overpass",
  activeDuty: false,
  callouts: overpassCallouts,
  lineUps: overpassLineups,
  strats: [],
};
