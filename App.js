import {StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
import React from 'react';
import {Colors} from './src/utils/Colors';
import Focus from './src/features/Focus';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Focus />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkPink,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingLeft: 30,
  },
  text: {
    color: Colors.white,
  },
});
