import NANO from 'react-native-nano/Constants';
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
    },
    mode: 'elevated',
    buttonColor: '#0066a7',
    textColor: 'white',
    uppercase: true,
  },
  onClick: 'increaseCountButtonPress',
};
const counterInstructionText = {
  component: NANO.TEXT,
  value: 'Click the above button to increase the count',

  props: {
    style: {
      fontSize: 18,

      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginHorizontal: 20,
      textAlign: 'center',
    },
  },
  onClick: 'textpress',
};
const WelcomeScreen = {
  name: 'Welcome',
  screen: {
    v1: [
      Heading,
      SubHeading,
      countText,
      increaseCountButton,
      counterInstructionText,
    ],
  },
  logic: WelcomeScreenFunctions,
  style: {justifyContent: 'center', flex: 1},
};
export default WelcomeScreen;
