import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
// import {Colors} from '../utils/Colors';
import {TextInput} from 'react-native-paper';

const Focus = () => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          onChangeText={value => {
            console.log(value);
          }}
          label="What would u like to write"
        />
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputcontainer: {
    flex: 1,
    padding: 30,
    justifyContent: 'top',
  },
});
