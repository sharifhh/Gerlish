import {useEffect, useState} from 'react';
import {Exercise} from '../components';
import firestore from '@react-native-firebase/firestore';

export const useFirestoreExercises = () => {
  const [loading, setLoading] = useState(true);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentExerciseId, setCurrentExerciseId] = useState<number>();
  useEffect(() => {
    return firestore()
      .collection<Exercise>('exercises')
      .onSnapshot(collectionSnapshot => {
        if (collectionSnapshot?.docs) {
          setLoading(false);
          const exercisesSnapshot = collectionSnapshot.docs.map(docSnapshot =>
            docSnapshot.data(),
          );
          setExercises(exercisesSnapshot);
          console.log(JSON.stringify(exercisesSnapshot));
          setCurrentExerciseId(0);
        }
      });
  }, []);
  return {loading, exercises, currentExerciseId, setCurrentExerciseId};
};
