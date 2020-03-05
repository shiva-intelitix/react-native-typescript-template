/**
 * This is the typescript template for Agritrac which contains all the package dependencies and fixes required to bootstrap the React Native App.
 * Use this template to make any quick unit changes/testing different library integrations without disturbing the main codebase.
 * Linting and typescript configurations adapted from the recommended standards based on the react-native-community template listed below.
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeContext} from './src/theme';
import {theme} from './src/theme';
import {HomeScreen} from './src/screens';

const RootStack = createStackNavigator();
const App = () => {
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <NavigationContainer>
          <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Home" component={HomeScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
