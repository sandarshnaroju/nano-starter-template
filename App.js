/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NanoApp} from 'react-native-nano';
import {enableScreens} from 'react-native-screens';
import AllScreens from './src/screens';
enableScreens();

const App = () => {
  return <NanoApp screens={AllScreens} />;
};

export default App;
