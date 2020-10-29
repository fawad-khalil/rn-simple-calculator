import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  topContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.THEME_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingLeft: 10,
  },
  historyButtonContainer: { width: '100%', height: '20%', alignItems: 'flex-end', justifyContent: 'flex-end' },
  historyButtonContent: { fontSize: 20, color: COLORS.LINK_BUTTON },
  button: {
    height: '100%',
  },
  buttonContent: {
    fontSize: 30,
    color: COLORS.WHITE,
  },

  resultContainer: { flex: 1, justifyContent: 'center' },
  resultText: { color: COLORS.WHITE, fontSize: 60 },
  calculatorButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '70%',
    flexWrap: 'wrap',
  },

  calculatorButtonContainer: {
    height: '20%',
    borderWidth: 0.25,
    borderColor: COLORS.LIGHT_PURPLE,
  },
});

export default styles;
