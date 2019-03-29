/**
 * @format
 */
import React from 'react';
import {AppRegistry, Text, View} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { Button, ThemeProvider } from 'react-native-elements';

// class AppContainer extends React.Component {
//   handleNavigationChange(prevState, newState, action){
//     console.log('.........',prevState, newState, action);
//   }
//   render() {
//     return (
//       <App
//         onNavigationStateChange={handleNavigationChange}
//         uriPrefix="/app"
//       />
//     );
//   }
// }

AppRegistry.registerComponent(appName, () => App);
