import { createStackNavigator } from "react-navigation";
import Splash from './containers/Splash'

export default createStackNavigator({
	WelcomeScreen: {
		screen: Splash,
		 navigationOptions: {
      header: null
    }
	}
});