import { UtilityLineup } from "../utility/types";

export type UtilityRectangle = {
  x: number;
  y: number;
  width: number;
  height: number;
  drawTooltip: () => void;
  drawTravel: () => void;
  utility: UtilityLineup;
};
