import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const Header = props => (
  <View style={styles.container}>
    <Text style={styles.headerText}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001c47',
    margin: 10,
    justifyContent: 'flex-end',
    height: height * 0.1,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default Header;
