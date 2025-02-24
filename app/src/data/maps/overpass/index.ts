import { MapScheme } from "../../../components/types";
import { overpassLineups } from "./lineups";

export const overpassMapScheme: MapScheme = {
  map: "Overpass",
  activeDuty: false,
  callouts: [],
  lineUps: overpassLineups,
  strats: [],
};
