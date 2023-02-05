import {NANO} from 'react-native-nano';
import WelcomeScreenFunctions from './WelcomeLogic';
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
    icon: 'plus',
    mode: 'contained',
    textColor: 'white',
    uppercase: true,
  },
  onClick: 'increaseCountButtonPress',
};
const testIcon = {
  component: NANO.AVATAR_ICON,
  value: 'chevron-right',

  props: {
    style: {
      alignSelf: 'center',
      marginTop: 20,
      marginHorizontal: 20,
    },
    size: 60,
  },
  onClick: 'continuePress',
};

const WelcomeScreen = {
  name: 'Welcome',
  screen: {
    v1: [Heading, SubHeading, countText, increaseCountButton, testIcon],
  },
  logic: WelcomeScreenFunctions,
  style: {flex: 1, justifyContent: 'center'},
  onStart: 'onWelcomeScreenStart',
  onEnd: 'onWelcomeScreenEnd',
};
export default WelcomeScreen;
