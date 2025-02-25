import { Coordinates } from ".";

export type MapCallout = {
  name: string;
  coordinates: Coordinates;
  angle?: number;
};
