import { MapScheme } from "../components/types";

export const ancientMapScheme: MapScheme = {
  map: "Ancient",
  lineUps: [
    {
      name: "Long B from ruins",
      id: "long-b-from-ruins",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 826,
        y: 369,
      },
    },
    {
      name: "Short B from ruins",
      id: "short-b-from-ruins",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 726,
        y: 354,
      },
    },
    {
      name: "Cave from ruins",
      id: "cave-from-ruins",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 708,
        y: 395,
      },
    },
    {
      name: "B ramp from long",
      id: "b-ramp-from-long",
      nadeType: "flashbang",
      throwType: "jump",
      side: "ct",
      coordinates: {
        x: 838,
        y: 553,
      },
    },
    {
      name: "Elbow from mid house",
      id: "elbow-from-mid-house",
      nadeType: "smoke",
      throwType: "jump",
      side: "ct",
      coordinates: {
        x: 377,
        y: 593,
      },
    },
    {
      name: "Mid b short/long from t spawn",
      description: "quick w run",
      id: "mid-b-from-t-spawn",
      nadeType: "smoke",
      throwType: "jump",
      movement: "run",
      side: "t",
      coordinates: {
        x: 784,
        y: 421,
      },
    },
    {
      name: "Flash right side mid from t spawn",
      id: "flash-right-mid-from-spawn",
      nadeType: "flashbang",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 510,
        y: 611,
      },
    },
    {
      name: "Flash left side mid from t spawn",
      id: "flash-left-mid-from-spawn",
      nadeType: "flashbang",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 453,
        y: 616,
      },
    },
    {
      name: "Catwalk from t spawn",
      id: "catwalk-from-t-spawn",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 546,
        y: 584,
      },
    },
    {
      name: "Mid from t spawn",
      id: "mid-from-t-spawn",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 486,
        y: 386,
      },
    },
    {
      name: "Inside donut from stairs",
      id: "inside-donut-from-stairs",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 315,
        y: 329,
      },
    },
    {
      name: "CT from stairs",
      id: "ct-from-stairs",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 367,
        y: 221,
      },
    },
    {
      name: "Temple from stairs",
      id: "temple-from-stairs",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 263,
        y: 196,
      },
      positionCoordinates: {
        x: 201,
        y: 586,
      },
    },
    {
      name: "Donut mid from spawn",
      id: "mid-donut-from-spawn",
      nadeType: "smoke",
      throwType: "jump",
      side: "t",
      coordinates: {
        x: 420,
        y: 467,
      },
    },
    {
      name: "Donut mid from jungle",
      id: "mid-donut-from-jungle",
      nadeType: "smoke",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 393,
        y: 461,
      },
    },
    {
      name: "B backline from ruins",
      id: "b-backline-from-ruins",
      nadeType: "smoke",
      throwType: "runjump",
      side: "t",
      coordinates: {
        x: 689,
        y: 252,
      },
    },
    {
      name: "Ancient wood from ruins",
      id: "wood-from-ramp",
      nadeType: "molo",
      throwType: "normal",
      side: "t",
      coordinates: {
        x: 726,
        y: 489,
      },
    },
  ],
  strats: [
    {
      id: "first-pistol",
      name: "First pistol round",
      description:
        "All push B via ramp, get the entries, plant the bomb and position for the retake",
      side: "t",
      buyType: "pistols",
    },
    {
      id: "second-round",
      name: "Second round",
      description:
        "Use when first round was won or bomb was planted. Oush B via ramp, get the entries, plant the bomb and position for the retake",
      side: "t",
      buyType: "smg",
    },
    {
      id: "a-split",
      name: "Split mid",
      description:
        "First 3 players via mid to donut to a. Last 2 players via A main to a, try to come to A site at the same time",
      side: "t",
      buyType: "normal",
      events: {
        messages: [
          {
            secondStart: 0,
            secondEnd: 5,
            message: "First 3 players run directly to mid",
          },
          {
            secondStart: 6,
            secondEnd: 10,
            message: "Mid players run to donut and clear",
          },
        ],
        playerPaths: [
          {
            path: JSON.parse(
              `[{"x":453.5,"y":842.71875},{"x":441.5,"y":784.71875},{"x":407.5,"y":759.71875},{"x":373.5,"y":740.71875},{"x":356.5,"y":719.71875},{"x":355.5,"y":673.71875},{"x":360.5,"y":642.71875},{"x":360.5,"y":604.71875},{"x":412.5,"y":573.71875},{"x":464.5,"y":538.71875},{"x":468.5,"y":486.71875},{"x":398.5,"y":466.71875},{"x":352.5,"y":459.71875},{"x":323.5,"y":427.71875},{"x":311.5,"y":381.71875}]`,
            ),
          },
          {
            path: JSON.parse(
              `[{"x":480.5,"y":873.71875},{"x":456.5,"y":856.71875},{"x":442.5,"y":823.71875},{"x":445.5,"y":789.71875},{"x":403.5,"y":748.71875},{"x":357.5,"y":726.71875},{"x":352.5,"y":670.71875},{"x":352.5,"y":633.71875},{"x":361.5,"y":596.71875},{"x":405.5,"y":576.71875},{"x":447.5,"y":559.71875},{"x":464.5,"y":523.71875},{"x":462.5,"y":490.71875},{"x":414.5,"y":470.71875},{"x":346.5,"y":457.71875}]`,
            ),
          },
          {
            path: JSON.parse(
              `[{"x":460.5,"y":877.71875},{"x":448.5,"y":840.71875},{"x":440.5,"y":784.71875},{"x":405.5,"y":750.71875},{"x":345.5,"y":718.71875},{"x":349.5,"y":683.71875},{"x":362.5,"y":635.71875},{"x":361.5,"y":616.71875},{"x":368.5,"y":596.71875},{"x":393.5,"y":589.71875},{"x":417.5,"y":570.71875},{"x":450.5,"y":558.71875},{"x":457.5,"y":524.71875},{"x":362.5,"y":456.71875}]`,
            ),
          },
          {
            path: JSON.parse(
              `[{"x":454.5,"y":845.71875},{"x":441.5,"y":805.71875},{"x":418.5,"y":761.71875},{"x":364.5,"y":744.71875},{"x":302.5,"y":716.71875},{"x":264.5,"y":692.71875},{"x":239.5,"y":642.71875},{"x":228.5,"y":598.71875},{"x":223.5,"y":550.71875},{"x":226.5,"y":500.71875},{"x":227.5,"y":469.71875},{"x":220.5,"y":437.71875},{"x":205.5,"y":408.71875},{"x":179.5,"y":393.71875},{"x":178.5,"y":369.71875}]`,
            ),
          },
          {
            path: JSON.parse(
              `[{"x":511.5,"y":873.71875},{"x":469.5,"y":846.71875},{"x":439.5,"y":808.71875},{"x":426.5,"y":771.71875},{"x":380.5,"y":744.71875},{"x":318.5,"y":728.71875},{"x":268.5,"y":695.71875},{"x":250.5,"y":644.71875},{"x":226.5,"y":583.71875},{"x":221.5,"y":519.71875},{"x":224.5,"y":455.71875},{"x":219.5,"y":407.71875},{"x":198.5,"y":390.71875},{"x":175.5,"y":355.71875},{"x":186.5,"y":314.71875}]`,
            ),
          },
        ],
      },
    },
    {
      id: "nade-mid-house",
      name: "Nade mid house",
      description:
        "One player smokes mid house from spawn. All players rushes mid and throws grenades behind smoke in mid house",
      side: "t",
      buyType: "full-eco",
    },
  ],
};
