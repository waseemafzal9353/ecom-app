import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Previous = ({ scrollTo }) => {
  return (
    <TouchableOpacity
      onPress={scrollTo}
      style={styles.buttonContainer}
    >
      <Text style={styles.button}>Prev</Text>
    </TouchableOpacity>
  );
};

export default Previous;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontFamily: 'Montserrat-SB',
    fontSize: 18,
    color: '#C4C4C4',
  },
});
