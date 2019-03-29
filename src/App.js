import Home from './views/Home';
import Details from './views/Details';
import { createAppContainer, createStackNavigator, createBottomTabNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Details: {
    screen: Details,
  },
}, {
    initialRouteName: 'Home',
});
const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Details: Details,
});
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
