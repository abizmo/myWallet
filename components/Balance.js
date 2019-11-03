import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import Card from "./Card";
import Modal from "./Modal";
import Text from "./Text";
import Input from "./Input";

import { images, theme, mock } from "../constants";

const { icons } = images;
const { colors } = theme;
const sources = mock.accounts.map(account => ({
  label: account.name,
  value: account.id
}));

sources.push({ label: "Externo", value: -1 });

const { width } = Dimensions.get("window");

export default class Balance extends React.Component {
  state = {
    modalVisible: false,
    transaction: {}
  };
  _renderForm() {
    const { kind } = this.state.transaction;
    const categories = mock.categories["income"].items.map(cat => ({
      label: cat.name,
      value: cat.id,
      subcategories: cat.items
    }));

    const subcategories = [];

    let title;
    switch (kind) {
      case "income":
        title = "Nuevo Ingreso";
        break;
      case "expense":
        title = "Nuevo Gasto";
        break;
      case "movement":
        title = "Nuevo Movimiento";
        break;
    }
    return (
      <Modal
        isVisible={this.state.modalVisible}
        onClose={() => this.setState({ modalVisible: false })}
      >
        <Text bigger weight="black" style={styles.formTitle}>
          {title}
        </Text>
        <View style={styles.formBody}>
          <View style={styles.formGroup}>
            <View style={styles.formSubgroup}>
              <Input label="Origen" value={1} type="select" items={sources} />
              <Input
                label="Destino"
                value="Externo"
                type="select"
                items={sources}
                right
              />
            </View>
            <View style={styles.formSubgroup}>
              <Input label="Cantidad" value="13,15 €" type="currency" />
              <Input label="Fecha" value="17-10-2019" right />
            </View>
          </View>
          <View style={styles.formGroup}>
            <Input
              label="Categoria"
              value={12}
              type="select"
              items={categories}
            />
            <Input
              label="Subcategoria"
              value={null}
              type="select"
              items={subcategories}
            />
          </View>
          <Input label="Descripción" value="Compra en Lidl" />
        </View>
        <View style={styles.formButtons}>
          <TouchableOpacity
            onPressOut={() => this.setState({ modalVisible: false })}
            style={{
              backgroundColor: colors.white,
              borderColor: colors[kind],
              borderWidth: 2,
              borderRadius: 16,
              paddingHorizontal: 24,
              paddingVertical: 8,
              alignSelf: "center",
              alignItems: "center",
              width: 104
            }}
          >
            <Text
              normal
              weight="black"
              color={kind}
              style={{ textTransform: "uppercase" }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressOut={() => this.setState({ modalVisible: false })}
            style={{
              backgroundColor: colors[kind],
              borderColor: colors[kind],
              borderWidth: 2,
              borderRadius: 16,
              paddingHorizontal: 24,
              paddingVertical: 8,
              width: 104,
              alignSelf: "center",
              alignItems: "center"
            }}
          >
            <Text
              normal
              weight="black"
              color="white"
              style={{ textTransform: "uppercase" }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  render() {
    return (
      <View>
        <Card style={styles.card}>
          <View style={styles.info}>
            <Text big>Balance</Text>
            <Text biggest>11.243 €</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity
              onPressOut={() =>
                this.setState({
                  modalVisible: true,
                  transaction: { kind: "income" }
                })
              }
              style={styles.action}
            >
              <Image source={icons.income} style={styles.icon} />
              <Text small>Ingreso</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPressOut={() =>
                this.setState({
                  modalVisible: true,
                  transaction: { kind: "movement" }
                })
              }
              style={styles.action}
            >
              <Image source={icons.movement} style={styles.icon} />
              <Text small>Movimiento</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPressOut={() =>
                this.setState({
                  modalVisible: true,
                  transaction: { kind: "expense" }
                })
              }
              style={styles.action}
            >
              <Image source={icons.expense} style={styles.icon} />
              <Text small>Gasto</Text>
            </TouchableOpacity>
          </View>
        </Card>
        {this._renderForm()}
      </View>
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
  icon: { marginBottom: theme.sizes.base / 2 },
  formTitle: { alignSelf: "center", marginBottom: 32 },
  formBody: { marginBottom: 32 },
  formButtons: { flexDirection: "row", justifyContent: "space-between" },
  formGroup: {
    marginBottom: 16
  },
  formSubgroup: {
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
