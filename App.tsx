import {Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {styles} from './src/themes/appTheme';
import CalculatorScreen from './src/screens/CalculatorScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.bgnd}>
      <StatusBar backgroundColor='black' barStyle='light-content' />
      <CalculatorScreen />
    </SafeAreaView>
  );
}
