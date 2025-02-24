import { MapScheme } from "../../../components/types";
import { infernoCallouts } from "./callouts";
import { infernoLineups } from "./lineups";
import { infernoStrats } from "./strats";

export const infernoMapScheme: MapScheme = {
  map: "Inferno",
  activeDuty: true,
  callouts: infernoCallouts,
  lineUps: infernoLineups,
  strats: infernoStrats,
};
