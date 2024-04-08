/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NanoApp} from 'react-native-nano';
import {enableScreens} from 'react-native-screens';
import {init} from 'rn-nano-sync';
enableScreens();

const App = () => {
  return (
    <NanoApp
      appStart={({moduleParams}) => {
        init(moduleParams['navigation']);
      }}
    />
  );
};

export default App;
