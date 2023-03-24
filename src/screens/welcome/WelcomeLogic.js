export const WelcomeScreenFunctions = {
  continuePress: ({
    navigation,
    uiElements,
    index,
    item,
    completeFlatlistData,
    db,
  }) => {
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
    uiElements['v1'][2]['value'] = uiElements['v1'][2]['value'] + 1;

    return uiElements;
  },
  onWelcomeScreenStart: ({navigation, uiElements, db}) => {
    return uiElements;
  },
  onWelcomeScreenEnd: ({navigation, uiElements, db}) => {
    return uiElements;
  },
};
