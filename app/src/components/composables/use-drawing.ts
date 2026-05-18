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
  stopTravelAnimation: () => void;
};

export const useDrawing = (
  canvasRenderingContext: CanvasRenderingContext2D,
): DrawingEngine => {
  const utilityPointSize = 12;
  let activeTravelAnimationId: number | undefined;

  const getTravelStyle = (utility: UtilityLineup) => {
    switch (utility.nadeType) {
      case "smoke":
        return {
          glow: "rgba(99, 209, 255, 0.65)",
          gradientStart: "rgba(80, 170, 220, 0.60)",
          gradientEnd: "rgba(180, 245, 255, 0.98)",
          head: "rgba(200, 250, 255, 1)",
        };
      case "flashbang":
        return {
          glow: "rgba(255, 248, 181, 0.75)",
          gradientStart: "rgba(255, 233, 122, 0.55)",
          gradientEnd: "rgba(255, 255, 240, 1)",
          head: "rgba(255, 255, 255, 1)",
        };
      case "frag":
        return {
          glow: "rgba(255, 125, 82, 0.65)",
          gradientStart: "rgba(227, 88, 55, 0.55)",
          gradientEnd: "rgba(255, 170, 90, 0.98)",
          head: "rgba(255, 210, 160, 1)",
        };
      case "molo":
      default:
        return {
          glow: "rgba(255, 145, 64, 0.72)",
          gradientStart: "rgba(209, 86, 32, 0.58)",
          gradientEnd: "rgba(255, 189, 99, 1)",
          head: "rgba(255, 220, 145, 1)",
        };
    }
  };

  const easeOutCubic = (value: number) => {
    return 1 - Math.pow(1 - value, 3);
  };

  const getUtilityIconStyle = (utility: UtilityLineup) => {
    switch (utility.nadeType) {
      case "smoke":
        return {
          glow: "rgba(116, 217, 255, 0.75)",
          gradientStart: "rgba(102, 194, 241, 0.70)",
          gradientEnd: "rgba(212, 248, 255, 0.95)",
          ring: "rgba(175, 241, 255, 0.85)",
        };
      case "flashbang":
        return {
          glow: "rgba(255, 249, 191, 0.80)",
          gradientStart: "rgba(255, 232, 124, 0.72)",
          gradientEnd: "rgba(255, 255, 245, 0.98)",
          ring: "rgba(255, 255, 220, 0.92)",
        };
      case "frag":
        return {
          glow: "rgba(255, 132, 90, 0.75)",
          gradientStart: "rgba(220, 86, 55, 0.68)",
          gradientEnd: "rgba(255, 184, 113, 0.95)",
          ring: "rgba(255, 194, 129, 0.88)",
        };
      case "molo":
      default:
        return {
          glow: "rgba(255, 156, 82, 0.80)",
          gradientStart: "rgba(209, 86, 32, 0.70)",
          gradientEnd: "rgba(255, 204, 120, 0.98)",
          ring: "rgba(255, 211, 145, 0.90)",
        };
    }
  };

  const stopTravelAnimation = () => {
    if (activeTravelAnimationId !== undefined) {
      cancelAnimationFrame(activeTravelAnimationId);
      activeTravelAnimationId = undefined;
    }
  };

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
    const drawTravelPath = (progress: number, elapsedMs: number) => {
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const startX = utility.positionCoordinates.x;
      const startY = utility.positionCoordinates.y;
      const targetX = utility.coordinates.x;
      const targetY = utility.coordinates.y;
      const endX = startX + (targetX - startX) * clampedProgress;
      const endY = startY + (targetY - startY) * clampedProgress;
      const style = getTravelStyle(utility);

      canvasRenderingContext.save();
      canvasRenderingContext.beginPath();
      canvasRenderingContext.moveTo(startX, startY);
      canvasRenderingContext.lineTo(endX, endY);
      canvasRenderingContext.strokeStyle = style.glow;
      canvasRenderingContext.lineWidth = 8;
      canvasRenderingContext.shadowBlur = 14;
      canvasRenderingContext.shadowColor = style.glow;
      canvasRenderingContext.lineCap = "round";
      canvasRenderingContext.stroke();
      canvasRenderingContext.restore();

      const gradient = canvasRenderingContext.createLinearGradient(
        startX,
        startY,
        endX,
        endY,
      );
      gradient.addColorStop(0, style.gradientStart);
      gradient.addColorStop(1, style.gradientEnd);
      const dashOffset = -elapsedMs / 18;

      canvasRenderingContext.save();
      canvasRenderingContext.beginPath();
      canvasRenderingContext.moveTo(startX, startY);
      canvasRenderingContext.lineTo(endX, endY);
      canvasRenderingContext.strokeStyle = gradient;
      canvasRenderingContext.lineWidth = 3;
      canvasRenderingContext.setLineDash([10, 8]);
      canvasRenderingContext.lineDashOffset = dashOffset;
      canvasRenderingContext.lineCap = "round";
      canvasRenderingContext.stroke();
      canvasRenderingContext.restore();

      canvasRenderingContext.save();
      const headRadius = 5;
      const headGlow = canvasRenderingContext.createRadialGradient(
        endX,
        endY,
        1,
        endX,
        endY,
        12,
      );
      headGlow.addColorStop(0, style.head);
      headGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
      canvasRenderingContext.fillStyle = headGlow;
      canvasRenderingContext.beginPath();
      canvasRenderingContext.arc(endX, endY, 12, 0, 2 * Math.PI);
      canvasRenderingContext.fill();

      canvasRenderingContext.fillStyle = style.head;
      canvasRenderingContext.beginPath();
      canvasRenderingContext.arc(endX, endY, headRadius, 0, 2 * Math.PI);
      canvasRenderingContext.fill();
      canvasRenderingContext.restore();
    };

    const rectangle: UtilityRectangle = {
      x: x,
      y: y,
      width: utilityPointSize,
      height: utilityPointSize,
      drawTravel: (options) => {
        const animate = options?.animated ?? false;

        if (!animate) {
          stopTravelAnimation();
          options?.beforeDraw?.();
          drawTravelPath(1, 0);
          return;
        }

        stopTravelAnimation();

        const durationMs = Math.max(1, options?.durationMs ?? 400);
        let startTime: number | null = null;

        const animateTravel = (timestamp: number) => {
          if (startTime === null) {
            startTime = timestamp;
          }

          const elapsed = timestamp - startTime;
          const normalizedProgress = Math.min(1, elapsed / durationMs);
          const progress = easeOutCubic(normalizedProgress);
          options?.beforeDraw?.();
          drawTravelPath(progress, elapsed);

          if (normalizedProgress < 1) {
            activeTravelAnimationId = requestAnimationFrame(animateTravel);
          } else {
            activeTravelAnimationId = undefined;
          }
        };

        activeTravelAnimationId = requestAnimationFrame(animateTravel);
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
    const iconStyle = getUtilityIconStyle(utility);
    const pulseScale = inverted ? 1 + Math.sin(Date.now() / 120) * 0.05 : 1;
    const baseScale = (utilityPointSize / 32) * pulseScale;

    for (const svgPath of svg.paths) {
      const path = new Path2D(svgPath.content);

      canvasRenderingContext.save();
      canvasRenderingContext.translate(x, y);
      canvasRenderingContext.scale(baseScale, baseScale);
      canvasRenderingContext.translate(-32, -32);

      // Soft silhouette glow behind the icon.
      canvasRenderingContext.save();
      canvasRenderingContext.shadowBlur = inverted ? 12 : 8;
      canvasRenderingContext.shadowColor = iconStyle.glow;
      canvasRenderingContext.fillStyle = iconStyle.glow;
      canvasRenderingContext.globalAlpha = inverted ? 0.35 : 0.22;
      canvasRenderingContext.fill(path);
      canvasRenderingContext.restore();

      canvasRenderingContext.fillStyle = inverted
        ? svgPath.invertedFill
        : svgPath.fill;
      canvasRenderingContext.fill(path);

      // Add a color-tinted gradient to make the icon feel less flat.
      const gradient = canvasRenderingContext.createLinearGradient(
        10,
        8,
        56,
        56,
      );
      gradient.addColorStop(0, iconStyle.gradientStart);
      gradient.addColorStop(1, iconStyle.gradientEnd);
      canvasRenderingContext.save();
      canvasRenderingContext.globalCompositeOperation = "source-atop";
      canvasRenderingContext.globalAlpha = inverted ? 0.68 : 0.52;
      canvasRenderingContext.fillStyle = gradient;
      canvasRenderingContext.fill(path);
      canvasRenderingContext.restore();

      // Specular highlight pass for a subtle glossy finish.
      const highlight = canvasRenderingContext.createRadialGradient(
        18,
        16,
        1,
        18,
        16,
        26,
      );
      highlight.addColorStop(0, "rgba(255, 255, 255, 0.55)");
      highlight.addColorStop(1, "rgba(255, 255, 255, 0)");
      canvasRenderingContext.save();
      canvasRenderingContext.globalCompositeOperation = "lighter";
      canvasRenderingContext.fillStyle = highlight;
      canvasRenderingContext.fill(path);
      canvasRenderingContext.restore();

      canvasRenderingContext.strokeStyle = svgPath.stroke;
      canvasRenderingContext.lineWidth = inverted ? 2.2 : 2;
      canvasRenderingContext.stroke(path);

      canvasRenderingContext.restore();
    }

    if (inverted) {
      canvasRenderingContext.save();
      canvasRenderingContext.beginPath();
      canvasRenderingContext.strokeStyle = iconStyle.ring;
      canvasRenderingContext.lineWidth = 1.5;
      canvasRenderingContext.globalAlpha = 0.9;
      canvasRenderingContext.arc(x, y, utilityPointSize * 0.95, 0, 2 * Math.PI);
      canvasRenderingContext.stroke();
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
    const angle = Math.atan2(to.y - from.y, to.x - from.x);
    const headLength = 10;

    canvasRenderingContext.save();
    canvasRenderingContext.strokeStyle = "white";
    canvasRenderingContext.lineWidth = 2;
    canvasRenderingContext.lineCap = "round";
    canvasRenderingContext.lineJoin = "round";
    canvasRenderingContext.beginPath();
    canvasRenderingContext.moveTo(from.x, from.y);
    canvasRenderingContext.lineTo(to.x, to.y);
    canvasRenderingContext.moveTo(to.x, to.y);
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
    canvasRenderingContext.restore();
  };

  return {
    findMatchingRectangle,
    drawUtilityRectangle,
    drawText,
    drawArrow,
    stopTravelAnimation,
  };
};
