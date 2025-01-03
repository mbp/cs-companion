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

const nadeInvertedColors: SmokeColors = {
  smoke: "white",
  flashbang: "gray",
  molo: "yellow",
  frag: "darkgreen",
};

const nadeStrokeColors: SmokeColors = {
  smoke: "black",
  flashbang: "black",
  molo: "black",
  frag: "black",
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
    switch (utility.nadeType) {
      case "smoke":
        return `
        M32,2
        a30,30 0 1,0 0,60
        a30,30 0 1,0 0,-60
        M28,10
        h8
        v20
        h-8
        z
        M24,30
        h16
        v24
        h-16
        z
      `;
      case "flashbang":
        return `
        M32,2
        a30,30 0 1,0 0,60
        a30,30 0 1,0 0,-60
        M30,15
        h4
        v30
        h-4
        z
        M28,10
        h8
        v5
        h-8
        z
      `;
      case "frag":
        return `
        M32,2
        a30,30 0 1,0 0,60
        a30,30 0 1,0 0,-60
        M32,20
        a10,10 0 1,0 0,20
        a10,10 0 1,0 0,-20
      `;
      case "molo":
        return `
        M32,2
        a30,30 0 1,0 0,60
        a30,30 0 1,0 0,-60
        M32,10
        l10,20
        l-10,20
        l-10,-20
        z
        M32,20
        l5,10
        l-5,10
        l-5,-10
        z
      `;
      default:
        throw new Error(`unsupported nade type ${utility.nadeType}`);
    }
  };

  const drawUtility = (
    x: number,
    y: number,
    utility: UtilityLineup,
    inverted: boolean,
  ) => {
    const color = nadeColors[utility.nadeType];
    const invertedColor = nadeInvertedColors[utility.nadeType];
    const nadeStrokeColor = nadeStrokeColors[utility.nadeType];

    let svgPath = getUtilitySvg(utility);

    const path = new Path2D(svgPath);

    canvasRenderingContext.save();
    canvasRenderingContext.translate(x, y);
    canvasRenderingContext.scale(utilityPointSize / 32, utilityPointSize / 32);
    canvasRenderingContext.translate(-32, -32);

    canvasRenderingContext.fillStyle = inverted ? invertedColor : color;
    canvasRenderingContext.fill(path);

    canvasRenderingContext.strokeStyle = nadeStrokeColor;
    canvasRenderingContext.lineWidth = 2;
    canvasRenderingContext.stroke(path);

    canvasRenderingContext.restore();
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
