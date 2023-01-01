import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ProgressBar} from 'react-native-paper';
import {Countdown} from '../component/Countdown';
import {Spaceing} from '../utils/Sizes';
import {RoundedButton} from '../component/RoundedButton';
import {Colors} from '../utils/Colors';

export const Timer = ({focusSubject}) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.2)

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={() => {}}
        />
        <View style={{paddingTop: Spaceing.xxl}}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{paddingTop: Spaceing.sm}}>
        <ProgressBar
          progress={progress}
          color={Colors.lightPink}
          style={{height: Spaceing.sm}}
        />
      </View>
      <View style={styles.buttonwrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonwrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: Spaceing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: Colors.white,
    textAlign: 'center',
  },
});
