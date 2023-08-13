import {NANO} from 'react-native-nano';
import {WelcomeScreenFunctions} from './WelcomeLogic';
const Heading = {
  component: NANO.TEXT,
  value: 'Welcome to Nano',

  props: {
    style: {
      fontSize: 34,

      alignSelf: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
    },
  },
  onClick: 'textpress',
};
const SubHeading = {
  component: NANO.TEXT,
  value: 'Building apps just became easier and quicker',

  props: {
    style: {
      fontSize: 20,

      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginHorizontal: 20,
      textAlign: 'center',
    },
  },
  onClick: 'textpress',
};
const countText = {
  component: NANO.TEXT,
  value: 1,
  name: 'counterText',

  props: {
    style: {
      fontSize: 30,

      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginHorizontal: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  },
  onClick: 'textpress',
};
const increaseCountButton = {
  component: NANO.BUTTON,
  value: 'increase ',

  props: {
    style: {
      alignSelf: 'center',
      marginTop: 20,
      marginHorizontal: 20,
      borderRadius: 8,
      backgroundColor: '#0066a7',
    },
    mode: 'contained',
    textColor: 'white',
    uppercase: true,
  },
  onClick: 'increaseCountButtonPress',
};

const WelcomeScreen = {
  name: 'Welcome',
  screen: {
    v1: [Heading, SubHeading, countText, increaseCountButton],
  },
  logic: WelcomeScreenFunctions,
  style: {flex: 1, justifyContent: 'center'},
  onStart: 'onWelcomeScreenStart',
  onEnd: 'onWelcomeScreenEnd',
};
export default WelcomeScreen;
