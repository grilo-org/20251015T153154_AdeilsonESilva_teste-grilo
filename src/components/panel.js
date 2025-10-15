import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Panel = props => {
  return (
    <View style={styles.countersOperations}>
      <Text style={styles.blockTitle}>{props.title}</Text>
      <View style={styles.blockContainer}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  countersOperations: {
    flex: 1,
  },
  blockTitle: {
    marginLeft: 30,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  blockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});

export default Panel;
