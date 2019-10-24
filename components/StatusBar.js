import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

const CustomStatusBar = ({ backgroundColor, dark }) => {
  const styleStatusBar = [
    styles.statusBar,
    backgroundColor && { backgroundColor }
  ];

  const barStyle = dark ? "dark-content" : "light-content";

  return (
    <View style={styleStatusBar}>
      <StatusBar barStyle={barStyle} translucent />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#FFFFFF",
    height: Constants.statusBarHeight,
    elevation: 2
  }
});

export default CustomStatusBar;
