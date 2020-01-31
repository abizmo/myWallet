import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../components";
import firebase from "../api/firebase";

const CustomDrawer = props => (
  <View style={styles.container}>
    <Text
      weight="bold"
      style={styles.drawerItems}
      onPress={() =>
        firebase
          .auth()
          .signOut()
          .then(() => props.navigation.navigate("auth"))
      }
    >
      Logout
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  drawerItems: {
    padding: 20,
    marginTop: 5,
    backgroundColor: "#EDEDED",
    textAlign: "center",
    textTransform: "uppercase"
  }
});

export default CustomDrawer;
