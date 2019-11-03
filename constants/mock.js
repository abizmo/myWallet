const accounts = [
  {
    id: 1,
    name: "Casa",
    total: "1.732,07 €",
    color: "#B0F2B4"
  },
  {
    id: 2,
    name: "Personal 1",
    total: "32,45 €",
    color: "#BAF2E9"
  },
  {
    id: 3,
    name: "Personal 2",
    total: "129,31 €",
    color: "#F2BAC9"
  }
];
const transactions = [
  {
    id: 1,
    date: "11-10-2019",
    description: "Retirada en efectivo",
    ammount: "230,00 €",
    kind: "expense",
    source: "Externo",
    destination: "Personal 1",
    category: "Otros",
    subcategory: "Otros"
  },
  {
    id: 2,
    date: "08-10-2019",
    description: "Nómina",
    ammount: "1.500,00 €",
    kind: "income",
    source: "Externo",
    destination: "Casa",
    category: "Sueldo",
    subcategory: "Nómina"
  },
  {
    id: 3,
    date: "01-10-2019",
    description: "Gasolina",
    ammount: "44,37 €",
    kind: "expense",
    source: "Casa",
    destination: "Externo",
    category: "Transporte",
    subcategory: "Combustible"
  },
  {
    id: 4,
    date: "30-09-2019",
    description: "Compra super",
    ammount: "184,10 €",
    kind: "expense",
    source: "Casa",
    destination: "Externo",
    category: "Gastos diarios",
    subcategory: "Compra"
  },
  {
    id: 5,
    date: "25-09-2019",
    description: "Devolución internet",
    ammount: "83,65 €",
    kind: "income",
    source: "Externo",
    destination: "Personal 1",
    category: "Otros",
    subcategory: "Reembolsos"
  }
];

export { accounts, transactions };
