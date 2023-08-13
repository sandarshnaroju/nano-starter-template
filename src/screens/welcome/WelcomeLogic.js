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
  },
  increaseCountButtonPress: ({
    navigation,
    uiElements,
    index,
    item,
    completeFlatlistData,
    db,
    getUi,
    setUi,
  }) => {
    const counterText = getUi('counterText');
    counterText['value'] = counterText['value'] + 1;
    setUi('counterText', counterText);
  },
  onWelcomeScreenStart: ({navigation, uiElements, db}) => {},
  onWelcomeScreenEnd: ({navigation, uiElements, db}) => {},
};
