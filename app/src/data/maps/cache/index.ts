import { MapScheme } from "../../../components/types";
import { cacheCallouts } from "./callouts";
import { cacheLineups } from "./lineups";

export const cacheMapScheme: MapScheme = {
  map: "Cache",
  activeDuty: true,
  callouts: cacheCallouts,
  lineUps: cacheLineups,
  strats: [],
};
