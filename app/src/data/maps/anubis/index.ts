import { MapScheme } from "../../../components/types";
import { anubisCallouts } from "./callouts";
import { anubisLineups } from "./lineups";
import { anubisStrats } from "./strats";

export const anubisMapScheme: MapScheme = {
  map: "Anubis",
  activeDuty: true,
  callouts: anubisCallouts,
  lineUps: anubisLineups,
  strats: anubisStrats,
};
