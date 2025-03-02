import { MapScheme } from "../../../components/types";
import { ancientCallouts } from "./callouts";
import { ancientLineups } from "./lineups";
import { ancientStrats } from "./strats";

export const ancientMapScheme: MapScheme = {
  map: "Ancient",
  activeDuty: true,
  callouts: ancientCallouts,
  lineUps: ancientLineups,
  strats: ancientStrats,
};
