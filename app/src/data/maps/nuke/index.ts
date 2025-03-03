import { MapScheme } from "../../../components/types";
import { nukeCallouts } from "./callouts";
import { nukeLineups } from "./lineups";
import { nukeStrats } from "./strats";

export const nukeMapScheme: MapScheme = {
  map: "Nuke",
  activeDuty: true,
  callouts: nukeCallouts,
  lineUps: nukeLineups,
  strats: nukeStrats,
};
