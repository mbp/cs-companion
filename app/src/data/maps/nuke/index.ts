import { MapScheme } from "../../../components/types";
import { nukeLineups } from "./lineups";
import { nukeStrats } from "./strats";

export const nukeMapScheme: MapScheme = {
  map: "Nuke",
  activeDuty: true,
  callouts: [],
  lineUps: nukeLineups,
  strats: nukeStrats,
};
