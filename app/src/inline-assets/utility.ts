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
M13 32 C20 19 44 19 51 32 C44 45 20 45 13 32 Z
M32 26 A6 6 0 1 1 31.9 26 Z
M19 47 L47 19 L45 17 L17 45 Z
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
        M32,11
        C29,17 21,21 21,31
        C21,41 27,47 32,50
        C37,47 43,41 43,31
        C43,24 38,18 34,14
        C33,13 33,12 32,11
        Z
        M32,22
        C29,26 27,30 27,34
        C27,39 30,42 32,44
        C34,42 37,39 37,34
        C37,31 35,27 33,24
        C32.5,23 32.2,22.4 32,22
        Z`,
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
