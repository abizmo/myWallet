import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "../constants";

const { width } = Dimensions.get("window");

export default class extends React.Component {
  render() {
    const { style } = this.props;
    const headerStyle = [styles.header, style];
    return (
      <View style={headerStyle}>
        <TouchableOpacity onPressOut={() => console.log("Menu")}>
          <Ionicons name="md-menu" size={32} color="black" />
        </TouchableOpacity>
        <Image source={require("../assets/images/Perfil.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 52,
    width: width - theme.sizes.base * 6
  }
});
