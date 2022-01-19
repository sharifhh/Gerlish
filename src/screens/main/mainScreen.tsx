import React, {useCallback} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Exercise} from '../../components';
import {useFirestoreExercises} from '../../hooks';
import {COLORS} from '../../constants';
import {styles} from './styles';

export const MainScreen: React.FC = () => {
  const {loading, currentExerciseId, exercises, setCurrentExerciseId} =
    useFirestoreExercises();
  const nextExercise = useCallback(() => {
    setCurrentExerciseId(oldValue => ((oldValue || 0) + 1) % exercises.length);
  }, [exercises.length, setCurrentExerciseId]);
  return (
    <>
      {!loading && currentExerciseId !== undefined ? (
        <View style={styles.container}>
          <Exercise
            key={currentExerciseId}
            exercise={exercises[currentExerciseId]}
            nextExercise={nextExercise}
          />
        </View>
      ) : (
        <ActivityIndicator
          size="large"
          color={COLORS.RED}
          style={StyleSheet.absoluteFillObject}
        />
      )}
    </>
  );
};
