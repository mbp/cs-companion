const smokeSvg: Svg = {
  paths: [
    {
      content: `
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
      `,
      fill: "gray",
      invertedFill: "white",
      stroke: "black",
    },
  ],
};

const flashbangSvg: Svg = {
  paths: [
    {
      content: `
M32 2 A30 30 0 1 1 31.9 2 Z 
M26 16 L38 16 L31 30 L42 30 L24 48 L31 34 L20 34 Z
      `,
      fill: "white",
      invertedFill: "lightblue",
      stroke: "black",
    },
  ],
};

const fragGrenadeSvg: Svg = {
  paths: [
    {
      content: `
M30,2
a30,30 0 1,0 0,60
a30,30 0 1,0 0,-60
M19,30 L22,20 L24,26 L26,20 L30,24 L34,20 L36,26 L38,20 L41,30 L38,34 L42,38 L36,38 L34,42 L36,46 L30,42 L28,46 L26,42 L22,46 L20,42 L18,38 L16,34 Z
      `,
      fill: "green",
      invertedFill: "lightgreen",
      stroke: "black",
    },
  ],
};

const moloSvg: Svg = {
  paths: [
    {
      content: `
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
        z`,
      fill: "orange",
      invertedFill: "yellow",
      stroke: "black",
    },
  ],
};

export const nadeSvgs = [
  {
    nadeType: "smoke",
    svg: smokeSvg,
  },
  {
    nadeType: "flashbang",
    svg: flashbangSvg,
  },
  {
    nadeType: "molo",
    svg: moloSvg,
  },
  {
    nadeType: "frag",
    svg: fragGrenadeSvg,
  },
];

interface SvgPath {
  content: string;
  fill: string;
  stroke: string;
  invertedFill: string;
}

export interface Svg {
  paths: SvgPath[];
}
