import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultText: {
    color: COLORS.WHITE,
    fontSize: 28,
  },
  hint: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
  },
  underline: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  answerContainer: {
    backgroundColor: COLORS.WHITE,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
