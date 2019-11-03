const sizes = {
  base: 8,
  font: 14,
  radius: 4
};

const fonts = {
  biggest: {
    fontSize: sizes.font * 1.714, //24
    lineHeight: sizes.font * 2.071 //29
  },
  bigger: {
    fontSize: sizes.font * 1.429, //20
    lineHeight: sizes.font * 1.714 //24
  },
  big: {
    fontSize: sizes.font * 1.143, //16
    lineHeight: sizes.font * 1.357 //19
  },
  normal: {
    fontSize: sizes.font * 1, //14
    lineHeight: sizes.font * 1.214 //17
  },
  small: {
    fontSize: sizes.font * 0.929, //13
    lineHeight: sizes.font * 1.143 //16
  },
  smaller: {
    fontSize: sizes.font * 0.786, //11
    lineHeight: sizes.font * 0.929 //13
  }
};

const colors = {
  black: "#0E1827",
  darkerGrey: "#656565",
  darkGrey: "#A1A1A1",
  grey: "#EDEDED",
  lightGrey: "#FCFCFC",
  white: "#FFFFFF",
  expense: "#D64045",
  income: "#429E9E",
  movement: "#D67900"
};

export { colors, fonts, sizes };
