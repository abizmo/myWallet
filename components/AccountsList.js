import React from "react";
import { TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Card from "./Card";
import Text from "./Text";
import { currency } from "../utils";

export default class AccountsList extends React.Component {
  renderAccount({ id, name, total, color }) {
    return (
      <Card key={id} color={color} style={styles.card}>
        <TouchableOpacity
          onPress={() => console.log(`Account: ${id}`)}
          style={styles.button}
        >
          <Text big weight="bold" style={styles.total}>
            {currency(total)}
          </Text>
          <Text small weight="black" color="darkerGrey">
            {name}
          </Text>
        </TouchableOpacity>
      </Card>
    );
  }

  render() {
    const { accounts } = this.props;
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {accounts.map(account => this.renderAccount(account))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: { paddingVertical: 4, paddingLeft: 24, paddingRight: 16 },
  card: {
    marginRight: 8
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 24,
    width: 134
  },
  total: { marginBottom: 4 }
});
