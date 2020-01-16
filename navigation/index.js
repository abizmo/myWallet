import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "../screens/Login";
import MainStack from "./Main";

export default createAppContainer(
  createSwitchNavigator(
    {
      auth: LoginScreen,
      main: MainStack
    },
    {
      initialRouteName: "auth"
    }
  )
);
