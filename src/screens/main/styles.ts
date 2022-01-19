import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '75%',
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 70,
    backgroundColor: COLORS.GREY,
    width: '99.8%',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
