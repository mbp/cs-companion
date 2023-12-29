import { allMapSchemes } from "../../data";

export const getMapScheme = (mapName: string) => {
  return allMapSchemes.find((x) => x.map == mapName)!;
};
