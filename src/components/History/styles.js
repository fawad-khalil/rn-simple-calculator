import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  topScrollView: {
    height: '100%',
  },
  topViewContainer: {
    display: 'flex',
    flex: 1,
    height: '100%',
    backgroundColor: COLORS.THEME_BACKGROUND,
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingLeft: 10,
  },
  expressionContainer: { alignItems: 'flex-end', marginTop: 15 },
  expressionText: { color: COLORS.WHITE, fontSize: 20 },
  clearButton: {
    width: '100%',
    height: 60,
    backgroundColor: COLORS.DANGER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButtonContent: { color: COLORS.WHITE, fontSize: 20 },
});
