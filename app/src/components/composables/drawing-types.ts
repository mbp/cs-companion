import { UtilityLineup } from "../utility/types";

export type Tooltip = {
  render: () => void;
};

export type UtilityRectangle = {
  x: number;
  y: number;
  width: number;
  height: number;
  tooltip: Tooltip;
  utility: UtilityLineup;
};
