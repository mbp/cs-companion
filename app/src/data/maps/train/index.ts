import { MapScheme } from "../../../components/types";
import { trainLineups } from "./lineups";
import { trainStrats } from "./strats";

export const trainMapScheme: MapScheme = {
  map: "Train",
  activeDuty: true,
  callouts: [],
  lineUps: trainLineups,
  strats: trainStrats,
};
