import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Line} from '../line';
import {styles} from './styles';

interface ExerciseProps {
  exercise: Exercise;
  nextExercise: () => void;
}

enum ExerciseStatus {
  IN_PROGRESS,
  CORRECT,
  WRONG,
}

export const Exercise: React.FC<ExerciseProps> = ({
  exercise: {questionLine, answerLine, answers, correctAnswerId},
  nextExercise,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer>();
  const [status, setStatus] = useState(ExerciseStatus.IN_PROGRESS);

  useEffect(() => {
    setStatus(ExerciseStatus.IN_PROGRESS);
  }, [selectedAnswer]);

  const correctAnswer = useMemo(
    () => answers.find(answer => answer.id === correctAnswerId)!,
    [answers, correctAnswerId],
  );

  const renderAnswers = useCallback(
    (allDisabled: boolean) =>
      answers.map(answer => {
        const currentStyles: StyleProp<ViewStyle> = [styles.answerTouchable];
        const currentTextContainerStyle: StyleProp<ViewStyle> = [];
        let disabled = false;
        if (selectedAnswer?.id === answer.id) {
          currentStyles.push(styles.selectedAnswerTouchable);
          currentTextContainerStyle.push(styles.selectedAnswerTextContainer);
          disabled = true;
        }
        if (allDisabled) {
          currentStyles.push(styles.disabledButton);
          disabled = true;
        }
        return (
          <TouchableOpacity
            disabled={disabled}
            key={answer.id}
            onPress={() => setSelectedAnswer(answer)}
            style={currentStyles}>
            <View style={currentTextContainerStyle}>
              <Text>{answer.text}</Text>
            </View>
          </TouchableOpacity>
        );
      }),
    [answers, selectedAnswer],
  );

  const checkSubmitAnswer = useCallback(() => {
    if (status !== ExerciseStatus.IN_PROGRESS) {
      nextExercise();
    }
    if (selectedAnswer?.id === correctAnswer.id) {
      setStatus(ExerciseStatus.CORRECT);
    } else {
      setStatus(ExerciseStatus.WRONG);
    }
  }, [correctAnswer.id, nextExercise, selectedAnswer?.id, status]);

  const renderButton = useCallback(() => {
    const currentStyle: StyleProp<ViewStyle> = [styles.buttonContainer];
    if (selectedAnswer && status === ExerciseStatus.IN_PROGRESS) {
      currentStyle.push(styles.checkAnswerButton);
    }
    const stylesPerStatus: Record<ExerciseStatus, any> = {
      [ExerciseStatus.IN_PROGRESS]: undefined,
      [ExerciseStatus.CORRECT]: {
        button: styles.checkAnswerResultButton,
        text: styles.correctAnswerButton,
      },
      [ExerciseStatus.WRONG]: {
        button: styles.checkAnswerResultButton,
        text: styles.wrongAnswerButton,
      },
    };
    currentStyle.push(stylesPerStatus[status]?.button);
    return (
      <TouchableOpacity
        disabled={!selectedAnswer}
        style={currentStyle}
        onPress={checkSubmitAnswer}>
        <Text style={[styles.buttonText, stylesPerStatus[status]?.text]}>
          {status !== ExerciseStatus.IN_PROGRESS || !selectedAnswer
            ? 'Continue'
            : 'Check answer'}
        </Text>
      </TouchableOpacity>
    );
  }, [selectedAnswer, checkSubmitAnswer, status]);

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Fill in the missing word</Text>
      </View>
      <View style={styles.questionLineContainer}>
        <Line line={questionLine} />
      </View>
      <View style={styles.answerLineContainer}>
        <Line line={answerLine} isAnswerLine answer={selectedAnswer} />
      </View>
      <View style={styles.answersContainer}>
        {renderAnswers(status !== ExerciseStatus.IN_PROGRESS)}
      </View>
      {renderButton()}
    </>
  );
};
