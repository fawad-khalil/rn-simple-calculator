import { COLORS } from '../../constants';

export const buttonsConfig = {
  AC: {
    text: 'AC',
    width: '75%',
    backgroundColor: COLORS.DANGER,
    marginRight: 'auto',
    paddingLeft: '13%',
  },
  divide: {
    text: '÷',
    width: '25%',
    backgroundColor: COLORS.LIGHT_PURPLE,
    name: 'divide',
  },
  seven: {
    text: 7,
    width: '25%',
    backgroundColor: COLORS.DARK_PURPLE,
  },
  eight: {
    text: 8,
    width: '25%',
    backgroundColor: COLORS.DARK_PURPLE,
  },
  nine: {
    text: 9,
    width: '25%',
    backgroundColor: COLORS.DARK_PURPLE,
  },
  multiply: {
    text: 'x',
    width: '25%',
    backgroundColor: COLORS.LIGHT_PURPLE,
    name: 'multiply',
  },
  four: {
    text: 4,
    width: '25%',
    backgroundColor: COLORS.DARK_PURPLE,
  },
  five: {
    text: 5,
    width: '25%',
    backgroundColor: COLORS.DARK_PURPLE,
  },
  six: {
    text: 6,
    width: '25%',
    backgroundColor: COLORS.DARK_PURPLE,
  },
  minus: {
    text: '-',
    width: '25%',
    backgroundColor: COLORS.LIGHT_PURPLE,
    name: 'minus',
  },
  one: {
    text: 1,
    width: '25%',
    backgroundColor: COLORS.DARK_PURPLE,
  },
  two: {
    text: 2,
    width: '25%',
    backgroundColor: COLORS.DARK_PURPLE,
  },
  three: {
    text: 3,
    width: '25%',
    backgroundColor: COLORS.DARK_PURPLE,
  },
  plus: {
    text: '+',
    width: '25%',
    backgroundColor: COLORS.LIGHT_PURPLE,
    name: 'plus',
  },
  zero: {
    text: 0,
    width: '50%',
    backgroundColor: COLORS.DARK_PURPLE,
  },
  decimal: {
    text: '.',
    width: '25%',
    backgroundColor: COLORS.DARK_PURPLE,
  },
  equal: {
    text: '=',
    width: '25%',
    backgroundColor: COLORS.LIGHT_PURPLE,
    name: 'equal',
  },
};

export const operatorNameToOperatorDictionary = {
  [buttonsConfig.multiply.name]: 'x',
  [buttonsConfig.divide.name]: '÷',
  [buttonsConfig.minus.name]: '-',
  [buttonsConfig.plus.name]: '+',
};
