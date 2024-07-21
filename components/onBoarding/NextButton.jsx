import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const NextButton = ({ scrollTo, currentIndex, dataLength }) => {
  return (
    <TouchableOpacity
      onPress={scrollTo}
      style={styles.buttonContainer}
    >
      <Text style={styles.button}>
        {currentIndex < dataLength - 1 ? 'Next' : 'Get Started'}
      </Text>
    </TouchableOpacity>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontFamily: 'Montserrat-SB',
    fontSize: 18,
    color: '#F83758',
  },
});
