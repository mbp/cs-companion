import { MapScheme } from "../../../components/types";
import { overpassLineups } from "./lineups";

export const overpassMapScheme: MapScheme = {
  map: "Overpass",
  activeDuty: false,
  lineUps: overpassLineups,
  strats: [],
};
