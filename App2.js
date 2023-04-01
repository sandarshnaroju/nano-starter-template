/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {RNNano} from 'react-native-nano';
import {enableScreens} from 'react-native-screens';
enableScreens();
const text = {
  component: 'text',
  value: 1,
  animation: {
    animation: 'bounce',
  },
  props: {
    style: {
      fontSize: 30,
      alignSelf: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      marginBottom: 50,
    },
  },
};

const button = {
  component: 'button',
  value: 'Click to count',
  props: {
    style: {
      alignSelf: 'center',
      justifyContent: 'center',
    },
    textColor: 'white',
    buttonColor: 'purple',
  },
  onClick: ({navigation, uiElements}) => {
    uiElements['v1'][0].value = uiElements['v1'][0].value + 1;
    return uiElements;
  },
};

const screen = {
  name: 'CounterApp',
  screen: {
    v1: [text, button],
  },
  style: {justifyContent: 'center', flex: 1, backgroundColor: 'white'},
  logic: null,
};

const AllScreens = [screen];
const App = () => {
  return <RNNano screens={AllScreens} />;
};

export default App;
