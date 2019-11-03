import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Card from "./Card";
import Modal from "./Modal";
import Text from "./Text";
import { colors } from "../constants/theme";
import { icons } from "../constants/images";

export default class TransactionsList extends React.Component {
  state = {
    modalVisible: false,
    transaction: {}
  };

  _renderTransactionDetail() {
    const {
      kind,
      source,
      destination,
      date,
      description,
      ammount,
      category,
      subcategory
    } = this.state.transaction;

    return (
      <Modal
        isVisible={this.state.modalVisible}
        onClose={() => this.setState({ modalVisible: false })}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 24
          }}
        >
          <View>
            <View style={{ marginBottom: 8 }}>
              <Text
                smaller
                color="darkerGrey"
                weight="bold"
                style={{ textTransform: "uppercase" }}
              >
                Origen
              </Text>
              <Text big>{source}</Text>
            </View>
            <View>
              <Text
                smaller
                color="darkerGrey"
                weight="bold"
                style={{ textTransform: "uppercase" }}
              >
                Destino
              </Text>
              <Text big>{destination}</Text>
            </View>
          </View>
          <View
            style={{ alignItems: "flex-end", justifyContent: "space-between" }}
          >
            <Text small color="darkGrey">
              {date}
            </Text>
            <Text biggest>{ammount}</Text>
            <Text big>{description}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View>
            <Text
              smaller
              color="darkerGrey"
              weight="bold"
              style={{ textTransform: "uppercase" }}
            >
              Categoria
            </Text>
            <Text big>{category}</Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text
              smaller
              color="darkerGrey"
              weight="bold"
              style={{ textTransform: "uppercase" }}
            >
              Subcategoria
            </Text>
            <Text big>{subcategory}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPressOut={() => this.setState({ modalVisible: false })}
          style={{
            backgroundColor: colors[kind],
            borderColor: colors[kind],
            borderWidth: 2,
            borderRadius: 16,
            paddingHorizontal: 24,
            paddingVertical: 8,
            alignSelf: "center",
            marginTop: 32
          }}
        >
          <Text
            normal
            weight="black"
            color="white"
            style={{ textTransform: "uppercase" }}
          >
            Cerrar
          </Text>
        </TouchableOpacity>
      </Modal>
    );
  }

  _renderTransaction(transaction) {
    const { id, date, description, ammount, kind } = transaction;
    return (
      <Card key={id} style={styles.container}>
        <TouchableOpacity
          onPress={() => this.setState({ modalVisible: true, transaction })}
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
          <Image source={icons[kind]} style={styles.background} />
        </TouchableOpacity>
      </Card>
    );
  }

  render() {
    const { transactions } = this.props;
    return (
      <View>
        {transactions.map(transaction => this._renderTransaction(transaction))}
        {this._renderTransactionDetail()}
      </View>
    );
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
