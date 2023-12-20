import { NadeType, UtilityLineup } from "../utility/types";
import { UtilityRectangle } from "./drawing-types";

type SmokeColors = {
  [key in NadeType]: string;
};

const nadeColors: SmokeColors = {
  smoke: "grey",
  flashbang: "white",
  molo: "orange",
  frag: "green",
};

const nadeStrokeColors: SmokeColors = {
  smoke: "orange",
  flashbang: "black",
  molo: "black",
  frag: "white",
};

export type DrawingEngine = {
  findMatchingRectangle: (x: number, y: number) => UtilityRectangle | undefined;

  drawUtilityRectangle: (
    x: number,
    y: number,
    utility: UtilityLineup,
  ) => UtilityRectangle;
};

export const useDrawing = (
  canvasRenderingContext: CanvasRenderingContext2D,
): DrawingEngine => {
  const utilityPointSize = 8;

  const utilityRectangles: UtilityRectangle[] = [];

  const contains = (rect: UtilityRectangle, x: number, y: number) => {
    return (
      x >= rect.x - rect.width &&
      x <= rect.x + rect.width &&
      y >= rect.y - rect.height &&
      y <= rect.y + rect.height
    );
  };

  const findMatchingRectangle = (x: number, y: number) => {
    return utilityRectangles.find((r) => contains(r, x, y));
  };

  const createUtilityRectangle = (
    x: number,
    y: number,
    utility: UtilityLineup,
  ) => {
    const rectangle: UtilityRectangle = {
      x: x,
      y: y,
      width: utilityPointSize,
      height: utilityPointSize,
      drawTravel: () => {
        if (utility.positionCoordinates) {
          canvasRenderingContext.beginPath();
          canvasRenderingContext.strokeStyle = nadeColors[utility.nadeType];
          canvasRenderingContext.setLineDash([5, 15]);
          canvasRenderingContext.moveTo(
            utility.coordinates.x,
            utility.coordinates.y,
          );
          canvasRenderingContext.lineTo(
            utility.positionCoordinates.x,
            utility.positionCoordinates.y,
          );
          canvasRenderingContext.stroke();
          canvasRenderingContext.closePath();
        }
      },
      drawTooltip: () => {
        document.body.style.cursor = "pointer";
        canvasRenderingContext.strokeStyle = "black";
        canvasRenderingContext.fillStyle = "white";
        canvasRenderingContext.font = "15px Arial";
        canvasRenderingContext.beginPath();
        canvasRenderingContext.arc(
          x,
          y,
          utilityPointSize,
          0,
          Math.PI * 2,
          true,
        );
        canvasRenderingContext.fill();
        canvasRenderingContext.stroke();
        canvasRenderingContext.closePath();
        canvasRenderingContext.fillText(utility.name, x, y);
      },
      utility: utility,
    };
    return rectangle;
  };

  const drawUtilityRectangle = (
    x: number,
    y: number,
    utility: UtilityLineup,
  ) => {
    const utilityRectangle = createUtilityRectangle(x, y, utility);
    utilityRectangles.push(utilityRectangle);

    const color = nadeColors[utilityRectangle.utility.nadeType];
    const strokeColor = nadeStrokeColors[utilityRectangle.utility.nadeType];
    canvasRenderingContext.fillStyle = color;
    canvasRenderingContext.beginPath();
    canvasRenderingContext.setLineDash([]);
    canvasRenderingContext.arc(
      utilityRectangle.x,
      utilityRectangle.y,
      utilityPointSize,
      0,
      Math.PI * 2,
      true,
    );
    canvasRenderingContext.strokeStyle = strokeColor;
    canvasRenderingContext.lineWidth = 5;
    canvasRenderingContext.stroke();
    canvasRenderingContext.closePath();
    canvasRenderingContext.fill();
    return utilityRectangle;
  };

  return {
    findMatchingRectangle,
    drawUtilityRectangle,
  };
};
