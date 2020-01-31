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
import { images, theme } from "../constants";
import { formatCurrency } from "../utils";

const { icons } = images;
const { width } = Dimensions.get("window");

export default Balance = props => {
  return (
    <Card style={styles.card}>
      <View style={styles.info}>
        <Text big>Balance</Text>
        <Text biggest>{formatCurrency(props.balance)}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          onPressOut={() => console.log("Add Income")}
          style={styles.action}
        >
          <Image source={icons.income} style={styles.icon} />
          <Text small>Ingreso</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressOut={() => console.log("Add Movement")}
          style={styles.action}
        >
          <Image source={icons.movement} style={styles.icon} />
          <Text small>Movimiento</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressOut={() => console.log("Add Expense")}
          style={styles.action}
        >
          <Image source={icons.expense} style={styles.icon} />
          <Text small>Gasto</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

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
