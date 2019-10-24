import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Card from "./Card";
import Text from "./Text";

export default class TransactionsList extends React.Component {
  renderTransaction({ id, date, description, ammount, image }) {
    return (
      <Card key={id} style={styles.container}>
        <TouchableOpacity
          onPress={() => console.log(`Transaction: ${id}`)}
          style={styles.button}
        >
          <View style={styles.info}>
            <View>
              <Text small style={styles.date}>
                {date}
              </Text>
              <Text small color="darkGrey">
                {description}
              </Text>
            </View>
            <Text bigger weight="black">
              {ammount}
            </Text>
          </View>
          <Image source={image} style={styles.background} />
        </TouchableOpacity>
      </Card>
    );
  }

  render() {
    const { transactions } = this.props;
    return transactions.map(transaction => this.renderTransaction(transaction));
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  info: {
    zIndex: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12
  },
  date: { marginBottom: 4 },
  background: {
    position: "absolute",
    right: 0,
    opacity: 0.2,
    width: 72,
    height: "100%"
  }
});
