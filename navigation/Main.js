import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/Home";

export default createStackNavigator(
  {
    home: HomeScreen
  },
  {
    initialRouteName: "home"
  }
);
