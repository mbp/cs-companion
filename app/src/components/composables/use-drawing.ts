import { nadeSvgs } from "../../inline-assets/utility";
import { UtilityLineup } from "../utility/types";
import { UtilityRectangle } from "./drawing-types";

const DefaultFont = "bold 16px Arial";

export type DrawingEngine = {
  findMatchingRectangle: (x: number, y: number) => UtilityRectangle | undefined;

  drawUtilityRectangle: (
    x: number,
    y: number,
    utility: UtilityLineup,
  ) => UtilityRectangle;

  drawText: (x: number, y: number, text: string, angle: number) => void;
  drawArrow: (
    from: { x: number; y: number },
    to: { x: number; y: number },
  ) => void;
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
        canvasRenderingContext.font = DefaultFont;
        canvasRenderingContext.lineWidth = 3;
        const offset = 30;
        const textWidth = canvasRenderingContext.measureText(
          utility.name,
        ).width;
        const textHeight = 16; // Approximate height of the text
        const padding = 10;

        canvasRenderingContext.fillStyle = "rgba(0, 0, 0, 0.5)";
        canvasRenderingContext.fillRect(
          x + offset - padding,
          y + offset - textHeight - padding,
          textWidth + 2 * padding,
          textHeight + 2 * padding,
        );

        canvasRenderingContext.strokeText(utility.name, x + offset, y + offset);
        canvasRenderingContext.fillStyle = "white";
        canvasRenderingContext.fillText(utility.name, x + offset, y + offset);
        canvasRenderingContext.setLineDash([]);
        drawUtility(x, y, utility, true);
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

  const drawText = (x: number, y: number, text: string, angle: number) => {
    canvasRenderingContext.save();
    canvasRenderingContext.translate(x, y);
    canvasRenderingContext.rotate((angle * Math.PI) / 180);
    canvasRenderingContext.font = DefaultFont;
    canvasRenderingContext.strokeStyle = "black";
    canvasRenderingContext.lineWidth = 3;
    canvasRenderingContext.strokeText(text, 0, 0);
    canvasRenderingContext.fillStyle = "rgba(255, 255, 255, 0.90)";
    canvasRenderingContext.fillText(text, 0, 0);
    canvasRenderingContext.restore();
  };

  const drawArrow = (
    from: { x: number; y: number },
    to: { x: number; y: number },
  ) => {
    canvasRenderingContext.strokeStyle = "white";
    canvasRenderingContext.beginPath();
    canvasRenderingContext.moveTo(from.x, from.y);
    canvasRenderingContext.lineTo(to.x, to.y);
    canvasRenderingContext.stroke();

    const angle = Math.atan2(to.y - from.y, to.x - from.x);
    const headLength = 10;
    canvasRenderingContext.lineTo(
      to.x - headLength * Math.cos(angle - Math.PI / 6),
      to.y - headLength * Math.sin(angle - Math.PI / 6),
    );
    canvasRenderingContext.moveTo(to.x, to.y);
    canvasRenderingContext.lineTo(
      to.x - headLength * Math.cos(angle + Math.PI / 6),
      to.y - headLength * Math.sin(angle + Math.PI / 6),
    );
    canvasRenderingContext.stroke();
  };

  return {
    findMatchingRectangle,
    drawUtilityRectangle,
    drawText,
    drawArrow,
  };
};
