import numeral from "numeral";
import locales from "numeral/locales";
import moment from "moment";

numeral.locale("es-es");

export const formatCurrency = num => {
  return numeral(num).format("0,0.00 $");
};

export const formatDate = date => {
  return moment(date).format("DD-MM-YYYY");
};
