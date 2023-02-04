import { MapLineups } from "../components/composables/types";
import { ancientLineups } from "./ancient";
import { anubisLineups } from "./anubis";
import { infernoLineups } from "./inferno";
import { mirageLineups } from "./mirage";
import { nukeLineups } from "./nuke";
import { overpassLineups } from "./overpass";
import { vertigoLineups } from "./vertigo";

export const allUtilities: MapLineups[] = [
  anubisLineups,
  ancientLineups,
  infernoLineups,
  nukeLineups,
  mirageLineups,
  overpassLineups,
  vertigoLineups,
];
