import { Strategy } from "../../../components/strategy/types";

export const ancientStrats = [
  {
    id: "rush-b-pistol",
    name: "Rush B",
    side: "t",
    buyType: "pistols",
    descriptions: [
      "All push B via ramp, get the entries, plant the bomb and position for the retake",
    ],
  },
  {
    id: "mid-decoy",
    name: "Mid decoy to A",
    side: "t",
    buyType: "pistols",
    descriptions: [
      "All players push mid. All throw decoy towards catwalk. Mid is smoked and players push through smoke and go A",
    ],
  },
  {
    id: "rush-b-smg",
    name: "Rush B",
    side: "t",
    buyType: "smg",
    descriptions: [
      "Use when first round was won or bomb was planted. Push B via ramp, get the entries, plant the bomb and position for the retake",
    ],
  },
  {
    id: "split-a",
    name: "Split A",
    side: "t",
    buyType: "normal",
    descriptions: [
      "First 3 players via mid to donut to a. Last 2 players via A main to a, try to come to A site at the same time",
    ],
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
            `[{"x":460.5,"y":877.71875},{"x":448.5,"y":840.71875},{"x":440.5,"y":784.71875},{"x":405.5,"y":750.71875},{"x":345.5,"y":718.71875},{"x":349.5,"y":683.71875},{"x":362.5,"y":635.71875},{"x":361.5,"y":616.71875},{"x":368.5,"y":596.71875},{"x":393.5,"y":589.71875},{"x":417.5,"y":570.71875},{"x":450.5,"y":558.71875},{"x":457.5,"y":524.71875},{"x":401.5,"y":475},{"x":362.5,"y":456.71875}]`,
          ),
        },
        {
          path: JSON.parse(
            `[{"x":454.5,"y":845.71875},{"x":441.5,"y":805.71875},{"x":418.5,"y":761.71875},{"x":364.5,"y":744.71875},{"x":302.5,"y":716.71875},{"x":264.5,"y":692.71875},{"x":239.5,"y":642.71875},{"x":228.5,"y":598.71875},{"x":223.5,"y":550.71875},{"x":226.5,"y":500.71875},{"x":227.5,"y":469.71875},{"x":220.5,"y":437.71875},{"x":205.5,"y":408.71875},{"x":179.5,"y":393.71875},{"x":178.5,"y":369.71875}]`,
          ),
        },
        {
          path: JSON.parse(
            `[{"x":511.5,"y":873.71875},{"x":519.5,"y":839},{"x":545.5,"y":814},{"x":426.5,"y":771.71875},{"x":380.5,"y":744.71875},{"x":318.5,"y":728.71875},{"x":268.5,"y":695.71875},{"x":250.5,"y":644.71875},{"x":226.5,"y":583.71875},{"x":221.5,"y":519.71875},{"x":224.5,"y":455.71875},{"x":219.5,"y":407.71875},{"x":198.5,"y":390.71875},{"x":175.5,"y":355.71875},{"x":186.5,"y":314.71875}]`,
          ),
          actionThrows: [
            {
              id: "mid-from-t-spawn",
              playSecond: 1,
            },
            {
              id: "flash-right-mid-from-spawn",
              playSecond: 2,
            },
          ],
        },
      ],
    },
  },
  {
    id: "nade-mid-house",
    name: "Nade mid house",
    side: "t",
    buyType: "full-eco",
    descriptions: [
      "One player smokes mid house from spawn. All players rushes mid and throws grenades behind smoke in mid house",
    ],
  },
] satisfies Strategy[];
