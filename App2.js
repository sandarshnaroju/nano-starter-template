/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NanoApp} from 'react-native-nano';
import {enableScreens} from 'react-native-screens';
enableScreens();
const text = {
  component: 'text',
  value: 1,
  name: 'count',
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
  onPress: ({setUi, getUi}) => {
    const textObj = getUi('count');
    textObj.value = textObj.value + 1;
    setUi('count', textObj);
  },
};

const screen = {
  name: 'CounterApp',
  screen: {
    v1: [text, button],
  },
  style: {justifyContent: 'center', flex: 1, backgroundColor: 'white'},
};

const AllScreens = [screen];
const App = () => {
  return <NanoApp screens={AllScreens} />;
};

export default App;

