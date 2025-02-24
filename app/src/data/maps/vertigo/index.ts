import { MapScheme } from "../../../components/types";
import { vertigoLineups } from "./lineups";
import { vertigoStrats } from "./strats";

export const vertigoMapScheme: MapScheme = {
  map: "Vertigo",
  activeDuty: false,
  callouts: [],
  lineUps: vertigoLineups,
  strats: vertigoStrats,
};
