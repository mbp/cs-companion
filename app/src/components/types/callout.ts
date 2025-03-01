import { Coordinates } from ".";

export type MapCallout = {
  name: string;
  coordinates: Coordinates;
  arrow?: {
    from: Coordinates;
    to: Coordinates;
  };
  angle?: number;
};
