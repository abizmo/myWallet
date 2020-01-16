import React from "react";
import * as Font from "expo-font";
import { ActivityIndicator, View } from "react-native";

import Navigation from "./navigation";

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    try {
      await Font.loadAsync({
        black: require("./assets/fonts/Lato-Black.ttf"),
        bold: require("./assets/fonts/Lato-Bold.ttf"),
        regular: require("./assets/fonts/Lato-Regular.ttf")
      });
      this.setState({ fontLoaded: true });
    } catch (e) {
      console.err(e);
    }
  }

  render() {
    if (this.state.fontLoaded) return <Navigation />;
    return (
      <View>
        <ActivityIndicator size="large" color="#53714B" />
      </View>
    );
  }
}
