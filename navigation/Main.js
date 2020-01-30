import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import HomeScreen from "../screens/Home";
import CustomDrawer from "../components/CustomDrawer";

const DashboardScreen = createStackNavigator(
  {
    dashboard: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerShown: false
      })
    }
  },
  {
    initialRouteName: "dashboard"
  }
);

export default createDrawerNavigator(
  {
    home: {
      screen: DashboardScreen
    }
  },
  {
    contentComponent: CustomDrawer
  }
);
