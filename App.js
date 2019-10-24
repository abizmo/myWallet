import React from "react";
import * as Font from "expo-font";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";

import {
  AccountsList,
  Balance,
  Header,
  StatusBar,
  Text,
  TransactionsList
} from "./components";
import { theme } from "./constants";
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
    image: require("./assets/images/IconoGasto.png")
  },
  {
    id: 2,
    date: "08-10-2019",
    description: "Nómina",
    ammount: "1.500,00 €",
    image: require("./assets/images/IconoIngreso.png")
  },
  {
    id: 3,
    date: "01-10-2019",
    description: "Gasolina",
    ammount: "44,37 €",
    image: require("./assets/images/IconoGasto.png")
  },
  {
    id: 4,
    date: "30-09-2019",
    description: "Compra super",
    ammount: "184,10 €",
    image: require("./assets/images/IconoGasto.png")
  },
  {
    id: 5,
    date: "25-09-2019",
    description: "Devolución internet",
    ammount: "83,65 €",
    image: require("./assets/images/IconoIngreso.png")
  }
];

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      black: require("./assets/fonts/Lato-Black.ttf"),
      bold: require("./assets/fonts/Lato-Bold.ttf"),
      regular: require("./assets/fonts/Lato-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  renderApp() {
    const accountsTitleStyle = [
      styles.title,
      {
        marginHorizontal: theme.sizes.base * 3
      }
    ];
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={theme.colors.lightGrey} dark />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header style={styles.header} />
          <View style={styles.balance}>
            <Balance />
          </View>
          <View style={styles.accounts}>
            <Text normal weight="black" style={accountsTitleStyle}>
              Cuentas
            </Text>
            <AccountsList accounts={accounts} />
          </View>
          <View style={styles.transactions}>
            <Text normal weight="black" style={styles.title}>
              Transacciones Recientes
            </Text>
            <TransactionsList transactions={transactions} />
          </View>
        </ScrollView>
      </View>
    );
  }

  render() {
    if (this.state.fontLoaded) return this.renderApp();
    else return <ActivityIndicator size="large" color="#53714B" />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start"
  },
  header: {
    marginBottom: theme.sizes.base * 3,
    marginHorizontal: theme.sizes.base * 3
  },
  balance: {
    marginBottom: theme.sizes.base * 3,
    marginHorizontal: theme.sizes.base * 3
  },
  accounts: { marginBottom: theme.sizes.base * 3 },
  transactions: {
    marginHorizontal: theme.sizes.base * 3
  },
  title: {
    marginBottom: theme.sizes.base,
    textTransform: "uppercase"
  }
});
