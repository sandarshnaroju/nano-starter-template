import {NANO} from 'react-native-nano';
import HomeScreenFunctions from './HomeLogic';
const Heading = {
  component: NANO.TEXT,
  value: 'Home to Nano',

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
    mode: 'contained',
    textColor: 'white',
    icon: 'plus',
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
const testIcon = {
  component: NANO.AVATAR_ICON,
  value: 'chevron-right',

  props: {
    style: {
      alignSelf: 'center',
      marginTop: 20,
      marginHorizontal: 20,
    },
  },
  onClick: 'oncontinuepress',
};

const HomeScreen = {
  name: 'Home',
  screen: {
    v1: [
      Heading,
      SubHeading,
      countText,
      increaseCountButton,
      counterInstructionText,
      testIcon,
    ],
  },
  logic: HomeScreenFunctions,
  style: {justifyContent: 'center', flex: 1},
};
export default HomeScreen;
