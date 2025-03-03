import { MapScheme } from "../../../components/types";
import { mirageCallouts } from "./callouts";
import { mirageLineups } from "./lineups";
import { mirageStrats } from "./strats";

export const mirageMapScheme: MapScheme = {
  map: "Mirage",
  activeDuty: true,
  callouts: mirageCallouts,
  lineUps: mirageLineups,
  strats: mirageStrats,
};
