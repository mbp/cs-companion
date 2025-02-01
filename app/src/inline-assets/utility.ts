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
        M32,2
        a30,30 0 1,0 0,60
        a30,30 0 1,0 0,-60
        M32,20
        a10,10 0 1,0 0,20
        a10,10 0 1,0 0,-20
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
