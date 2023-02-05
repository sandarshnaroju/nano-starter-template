/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {RNNano} from 'react-native-nano';
import AllScreens from './src/screens';
import {enableScreens} from 'react-native-screens';
enableScreens();
const App = () => {
  return <RNNano screens={AllScreens} />;
};

export default App;
