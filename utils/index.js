import numeral from "numeral";
import locales from "numeral/locales";

numeral.locale("es-es");

export const currency = num => {
  return numeral(num).format("0,0.00 $");
};
