import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import Card from "./Card";
import Text from "./Text";
import { theme } from "../constants";

const { width } = Dimensions.get("window");

export default class Balance extends React.Component {
  render() {
    return (
      <Card style={styles.card}>
        <View style={styles.info}>
          <Text big>Balance</Text>
          <Text biggest>11.243 €</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity
            onPressOut={() => console.log("Add Income")}
            style={styles.action}
          >
            <Image
              source={require("../assets/images/IconoIngreso.png")}
              style={styles.icon}
            />
            <Text small>Ingreso</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressOut={() => console.log("Add Movement")}
            style={styles.action}
          >
            <Image
              source={require("../assets/images/IconoMov.png")}
              style={styles.icon}
            />
            <Text small>Movimiento</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressOut={() => console.log("Add Expense")}
            style={styles.action}
          >
            <Image
              source={require("../assets/images/IconoGasto.png")}
              style={styles.icon}
            />
            <Text small>Gasto</Text>
          </TouchableOpacity>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: width - theme.sizes.base * 6,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  info: {
    marginBottom: 12,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  actions: {
    borderTopColor: theme.colors.grey,
    borderTopWidth: 1,
    paddingTop: 12,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  action: {
    alignItems: "center"
  },
  icon: { marginBottom: theme.sizes.base / 2 }
});
