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

export const useDrawing = (
  canvasRenderingContext: CanvasRenderingContext2D,
) => {
  const utilityPointSize = 8;

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
      tooltip: {
        render: () => {
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
      },
      utility: utility,
    };
    return rectangle;
  };

  const drawUtilityRectangle = (utilityRectangle: UtilityRectangle) => {
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
  };

  return {
    createUtilityRectangle,
    drawUtilityRectangle,
  };
};
