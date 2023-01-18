import {cloneDeep} from 'lodash';

const WelcomeScreenFunctions = {
  textpress: (navigation, elements, index, item, completelistData) => {
    console.log('helllooo');

    // const cloned = cloneDeep(elements);

    return elements;
  },
  increaseCountButtonPress: (
    navigation,
    elements,
    index,
    item,
    completelistData,
  ) => {
    console.log('button', elements['v1'][2]['value']);
    const cloned = cloneDeep(elements);
    cloned['v1'][2]['value'] = elements['v1'][2]['value'] + 1;
    return cloned;
  },
};

export default WelcomeScreenFunctions;
