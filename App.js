import {StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {Colors} from './src/utils/Colors';
import Focus from './src/features/Focus';
import {Timer} from './src/features/Timer';
import {FocusHistory} from './src/features/FocusHistory';

const App = () => {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={subject => {
            setHistory([...history, subject]);
          }}
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
