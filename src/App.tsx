/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {COLORS} from './constants';
import {StyleSheet} from 'react-native';
import {MainScreen} from './screens';

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: COLORS.LIGHT_BLUE,
  },
});

const App = () => {
  return (
    <SafeAreaProvider style={styles.appContainer}>
      <MainScreen />
    </SafeAreaProvider>
  );
};

export default App;
