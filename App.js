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

import { mock, theme } from "./constants";

export default class App extends React.Component {
  state = {
    fontLoaded: false,
    accounts: [],
    transactions: []
  };

  async componentDidMount() {
    await Font.loadAsync({
      black: require("./assets/fonts/Lato-Black.ttf"),
      bold: require("./assets/fonts/Lato-Bold.ttf"),
      regular: require("./assets/fonts/Lato-Regular.ttf")
    });
    this.setState({
      fontLoaded: true,
      accounts: mock.accounts,
      transactions: mock.transactions
    });
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
            <AccountsList accounts={this.state.accounts} />
          </View>
          <View style={styles.transactions}>
            <Text normal weight="black" style={styles.title}>
              Transacciones Recientes
            </Text>
            <TransactionsList
              transactions={this.state.transactions}
              onPress={() => this.setState({ modalVisible: true })}
            />
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
