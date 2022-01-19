import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  headerContainer: {marginBottom: 40},
  header: {fontSize: 16, color: COLORS.WHITE},
  questionLineContainer: {
    marginBottom: 70,
  },
  answerLineContainer: {
    marginBottom: 60,
  },
  answersContainer: {
    width: '70%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerTouchable: {
    backgroundColor: COLORS.WHITE,
    padding: 20,
    borderRadius: 10,
    marginEnd: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  selectedAnswerTouchable: {
    backgroundColor: COLORS.LIGHT_GREY,
    shadowOpacity: 0,
    elevation: 0,
  },
  selectedAnswerTextContainer: {
    opacity: 0,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 70,
    backgroundColor: COLORS.LIGHT_GREY,
    width: '80%',
    padding: 25,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textTransform: 'uppercase',
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  checkAnswerButton: {
    backgroundColor: COLORS.LIGHT_BLUE,
  },
  checkAnswerResultButton: {
    backgroundColor: COLORS.WHITE,
  },
  correctAnswerButton: {
    color: COLORS.LIGHT_BLUE,
  },
  wrongAnswerButton: {
    color: COLORS.RED,
  },
});
