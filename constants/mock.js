const accounts = [
  {
    id: 1,
    name: "Casa",
    total: 1732.07,
    color: "#B0F2B4"
  },
  {
    id: 2,
    name: "Personal 1",
    total: 32.45,
    color: "#BAF2E9"
  },
  {
    id: 3,
    name: "Personal 2",
    total: 129.31,
    color: "#F2BAC9"
  }
];

const transactions = [
  {
    id: 1,
    date: new Date(2019, 9, 11, 14, 30, 22, 89),
    description: "Retirada en efectivo",
    ammount: 230.0,
    kind: "expense",
    source: "Externo",
    destination: "Personal 1",
    category: "Otros",
    subcategory: "Otros"
  },
  {
    id: 2,
    date: new Date(2019, 9, 8, 14, 30, 22, 89),
    description: "Nómina",
    ammount: 1500.0,
    kind: "income",
    source: "Externo",
    destination: "Casa",
    category: "Sueldo",
    subcategory: "Nómina"
  },
  {
    id: 3,
    date: new Date(2019, 9, 1, 14, 30, 22, 89),
    description: "Gasolina",
    ammount: 44.37,
    kind: "expense",
    source: "Casa",
    destination: "Externo",
    category: "Transporte",
    subcategory: "Combustible"
  },
  {
    id: 4,
    date: new Date(2019, 8, 30, 14, 30, 22, 89),
    description: "Compra super",
    ammount: 184.1,
    kind: "expense",
    source: "Casa",
    destination: "Externo",
    category: "Gastos diarios",
    subcategory: "Compra"
  },
  {
    id: 5,
    date: new Date(2019, 8, 25, 14, 30, 22, 89),
    description: "Devolución internet",
    ammount: 83.65,
    kind: "income",
    source: "Externo",
    destination: "Personal 1",
    category: "Otros",
    subcategory: "Reembolsos"
  }
];

export { accounts, transactions };
