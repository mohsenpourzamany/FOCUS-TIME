import {StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {Colors} from './src/utils/Colors';
import Focus from './src/features/Focus';
import {Timer} from './src/features/Timer';
const App = () => {
  const [currentSubject, setCurrentSubject] = useState();
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimeEnd={() => {}}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
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
