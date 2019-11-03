import React from "react";
import { Picker, StyleSheet, TextInput, View } from "react-native";

import Text from "./Text";
import { colors } from "../constants/theme";

const Input = props => {
  const labelStyle = [props.right && { alignSelf: "flex-end" }, styles.label];
  const valueStyle = [props.right && { alignSelf: "flex-end" }, styles.value];

  let input;

  switch (props.type) {
    case "select":
      input = (
        <Picker selectedValue={props.value}>
          {props.items.map(item => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      );
      break;
    case "date":
      input = <Text style={valueStyle}>{props.value}</Text>;
      break;
    case "currency":
      input = <TextInput keyboardType="number-pad" value={props.value} />;
      break;
    default:
      input = <TextInput value={props.value} />;
      break;
  }
  return (
    <View>
      <Text smaller color={colors.darkerGrey} weight="bold" style={labelStyle}>
        {props.label}
      </Text>
      {input}
    </View>
  );
};

const styles = StyleSheet.create({
  label: { textTransform: "uppercase" },
  value: {}
});

export default Input;
