import React from "react";
import { Text } from "react-native";

import { theme } from "../constants";
const { colors, fonts } = theme;

export default class Typography extends React.Component {
  render() {
    const {
      biggest,
      bigger,
      big,
      normal,
      small,
      smaller,
      weight,
      color,
      style
    } = this.props;

    const textStyles = [
      biggest && fonts.biggest,
      bigger && fonts.bigger,
      big && fonts.big,
      normal && fonts.normal,
      small && fonts.small,
      smaller && fonts.smaller,
      weight ? { fontFamily: weight } : { fontFamily: "regular" },
      color ? { color: colors[color] } : { color: colors["black"] },
      style
    ];

    return <Text style={textStyles}>{this.props.children}</Text>;
  }
}
