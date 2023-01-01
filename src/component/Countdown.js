import React, {useState, useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';

import {FontSize, Spaceing} from '../utils/Sizes';
import {Colors} from '../utils/Colors';

const minutesToMillis = min => min * 1000 * 60;
const formatTime = time => (time < 10 ? `0${time}` : time);
export const Countdown = ({minutes = 0.1, isPaused, onProgress, onEnd}) => {
  const interval = React.useRef(null);

  const [millis, setMillis] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const countDown = () => {
    setMillis(time => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd();
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
  }, [millis, minutes, onProgress]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) {
        clearInterval(interval.current);
      }
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [countDown, isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.xxxl,
    fontWeight: 'bold',
    color: Colors.white,
    padding: Spaceing.lg,
    backgroundColor: Colors.lightPink,
    width: 250,
    height: 100,
    paddingLeft: Spaceing.xxxl,
  },
});
