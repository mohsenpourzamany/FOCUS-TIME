import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
// import {Colors} from '../utils/Colors';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../component/RoundedButton';
import {Spaceing} from '../utils/Sizes';

const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.inputtext}
          onChangeText={setSubject}
          label="What would u like to write"
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={Spaceing.xxxl}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {},
  inputtext: {
    flex: 1,
    marginRight: Spaceing.md,
  },
  button: {
    justifyContent: 'center',
  },
  inputcontainer: {
    padding: 30,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
