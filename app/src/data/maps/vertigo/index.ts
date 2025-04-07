import { MapScheme } from "../../../components/types";
import { vertigoCallouts } from "./callouts";
import { vertigoLineups } from "./lineups";
import { vertigoStrats } from "./strats";

export const vertigoMapScheme: MapScheme = {
  map: "Vertigo",
  activeDuty: false,
  callouts: vertigoCallouts,
  lineUps: vertigoLineups,
  strats: vertigoStrats,
};
