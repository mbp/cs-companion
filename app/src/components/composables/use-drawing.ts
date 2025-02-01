import { nadeSvgs } from "../../inline-assets/utility";
import { UtilityLineup } from "../utility/types";
import { UtilityRectangle } from "./drawing-types";

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
  const utilityPointSize = 12;

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
        canvasRenderingContext.beginPath();
        canvasRenderingContext.strokeStyle = "orange";
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
      },
      drawTooltip: () => {
        document.body.style.cursor = "pointer";
        canvasRenderingContext.strokeStyle = "black";
        canvasRenderingContext.fillStyle = "white";
        canvasRenderingContext.setLineDash([]);
        canvasRenderingContext.font = "15px Arial";
        drawUtility(x, y, utility, true);
        canvasRenderingContext.fillText(utility.name, x, y);
      },
      utility: utility,
    };
    return rectangle;
  };

  const getUtilitySvg = (utility: UtilityLineup) => {
    const nadeSvg = nadeSvgs.find(
      (nadeSvg) => nadeSvg.nadeType === utility.nadeType,
    );
    if (nadeSvg === undefined) {
      throw new Error(`unsupported nade type ${utility.nadeType}`);
    }
    return nadeSvg.svg;
  };

  const drawUtility = (
    x: number,
    y: number,
    utility: UtilityLineup,
    inverted: boolean,
  ) => {
    const svg = getUtilitySvg(utility);

    for (const svgPath of svg.paths) {
      const path = new Path2D(svgPath.content);

      canvasRenderingContext.save();
      canvasRenderingContext.translate(x, y);
      canvasRenderingContext.scale(
        utilityPointSize / 32,
        utilityPointSize / 32,
      );
      canvasRenderingContext.translate(-32, -32);

      canvasRenderingContext.fillStyle = inverted
        ? svgPath.invertedFill
        : svgPath.fill;
      canvasRenderingContext.fill(path);

      canvasRenderingContext.strokeStyle = svgPath.stroke;
      canvasRenderingContext.lineWidth = 2;
      canvasRenderingContext.stroke(path);

      canvasRenderingContext.restore();
    }
  };

  const drawUtilityRectangle = (
    x: number,
    y: number,
    utility: UtilityLineup,
  ) => {
    const utilityRectangle = createUtilityRectangle(x, y, utility);
    utilityRectangles.push(utilityRectangle);

    drawUtility(x, y, utility, false);

    return utilityRectangle;
  };

  return {
    findMatchingRectangle,
    drawUtilityRectangle,
  };
};
