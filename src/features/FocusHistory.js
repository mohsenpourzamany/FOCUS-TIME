import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Colors} from '../utils/Colors';
import {FontSize, Spaceing} from '../utils/Sizes';

export const FocusHistory = ({history}) => {
  if (!history || !history.length) {
    return <Text style={styles.title}>We haven`t focused on anything yet</Text>;
  }

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spaceing.md,
    flex: 1,
  },
  item: {
    fontSize: FontSize.md,
    color: Colors.white,
    paddingTop: Spaceing.sm,
  },
  title: {
    color: Colors.white,
    fontSize: FontSize.md,
    fontWeight: 'bold',
    paddingLeft: 30,
  },
});
