import { MapScheme } from "../../../components/types";
import { overpassCallouts } from "./callouts";
import { overpassLineups } from "./lineups";

export const overpassMapScheme: MapScheme = {
  map: "Overpass",
  activeDuty: true,
  callouts: overpassCallouts,
  lineUps: overpassLineups,
  strats: [],
};
