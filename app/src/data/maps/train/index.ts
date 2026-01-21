import { MapScheme } from "../../../components/types";
import { trainCallouts } from "./callouts";
import { trainLineups } from "./lineups";
import { trainStrats } from "./strats";

export const trainMapScheme: MapScheme = {
  map: "Train",
  activeDuty: false,
  callouts: trainCallouts,
  lineUps: trainLineups,
  strats: trainStrats,
};
