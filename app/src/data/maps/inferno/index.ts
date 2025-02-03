import { MapScheme } from "../../../components/types";
import { infernoLineups } from "./lineups";
import { infernoStrats } from "./strats";

export const infernoMapScheme: MapScheme = {
  map: "Inferno",
  activeDuty: true,
  lineUps: infernoLineups,
  strats: infernoStrats,
};
