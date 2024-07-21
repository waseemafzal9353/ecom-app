import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TopHeader = ({ currentIndex, dataLength }) => {
    const { height, width } = useWindowDimensions();
  const navigation = useNavigation()
    return (
        <View style={[styles.container, { paddingVertical: height * 0.06, width }]}>
            <View style={styles.numberContainer}>
                <Text style={styles.currentIndex}>{currentIndex + 1}</Text>
                <Text style={styles.dataLength}>/{dataLength}</Text>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('login')
            }}>
                <Text style={styles.currentIndex}>Skip</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TopHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',  // Distribute items evenly
        paddingHorizontal: 20,            // Add padding on the sides
    },
    numberContainer: {
        flexDirection: 'row',
    },
    currentIndex: {
        fontFamily: 'Montserrat-SB',
        fontSize: 18,
        color: '#000',
    },
    dataLength: {
        fontFamily: 'Montserrat-SB',
        fontSize: 18,
        color: '#A0A0A1',
    }
});
