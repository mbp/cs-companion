import { MapScheme } from "../../../components/types";
import { mirageLineups } from "./lineups";
import { mirageStrats } from "./strats";

export const mirageMapScheme: MapScheme = {
  map: "Mirage",
  activeDuty: true,
  callouts: [],
  lineUps: mirageLineups,
  strats: mirageStrats,
};
