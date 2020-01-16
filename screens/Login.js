import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const handleLogin = navigation => navigation.navigate("main");

export default Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={() => handleLogin(navigation)}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
