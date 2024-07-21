import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';

const Splash = () => {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/images/logo.png')} 
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
}

export default Splash;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Adjust as needed
    height: 200, // Adjust as needed
    resizeMode: 'contain',
  },
});
