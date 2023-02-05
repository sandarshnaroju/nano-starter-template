import {cloneDeep} from 'lodash';

const WelcomeScreenFunctions = {
  continuePress: ({
    navigation,
    uiElements,
    index,
    item,
    completeFlatlistData,
    db,
  }) => {
    // navigation.navigate('');
    console.log('welcome pressed');

    return uiElements;
  },
  increaseCountButtonPress: ({
    navigation,
    uiElements,
    index,
    item,
    completeFlatlistData,
    db,
  }) => {
    const cloned = cloneDeep(uiElements);
    cloned['v1'][2]['value'] = uiElements['v1'][2]['value'] + 1;

    return cloned;
  },
  onWelcomeScreenStart: () => {},
  onWelcomeScreenEnd: () => {},
};

export default WelcomeScreenFunctions;
