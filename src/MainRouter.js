import { createStackNavigator } from "react-navigation";
import Splash from "./containers/Splash";
import BottomTabNav from "./BottomTabNav";

export default createStackNavigator({
  WelcomeScreen: {
    screen: Splash,
    navigationOptions: {
      header: null
    }
  },
  MainApp: {
    screen: BottomTabNav,
    navigationOptions: {
      header: null
    }
  }
});
