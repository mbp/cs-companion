import { Side } from "../types";

export const getSideImage = (side: Side) => {
  return side === "ct" ? "ct-icon.webp" : "t-icon.webp";
};
