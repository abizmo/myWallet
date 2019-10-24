import React from "react";
import { StyleSheet, View } from "react-native";

export default class Card extends React.Component {
  render() {
    const { color, style } = this.props;
    const cardStyle = [
      styles.container,
      color
        ? { backgroundColor: color, borderColor: color }
        : { backgroundColor: "#FCFCFC", borderColor: "#EDEDED" },
      style
    ];
    return <View style={cardStyle}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    elevation: 2
  }
});
