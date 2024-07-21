import React, { useRef, useState } from 'react';
import { Animated, FlatList, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import onBoardingData from '../../data/onBoarding';
import OnBoardingItem from './OnBoardingItem';
import Paginators from './Paginators';
import NextButton from './NextButton';
import Previous from './Previous';
import TopHeader from './TopHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnBoarding = () => {
  const dataLength = onBoardingData.length
  const {width} = useWindowDimensions()
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0]?.index || 0);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    const scrollTo = async () => {
      if(currentIndex < onBoardingData.length - 1) {
        slidesRef.current.scrollToIndex({
          index: currentIndex + 1
        })
      }else{
        try {
          await AsyncStorage.setItem('@viewedOnboarding', 'true')
        } catch (error) {
          console.log(error)
        }
      }
    }

    const scrollToBack = () => {
      if(currentIndex != 0) {
        slidesRef.current.scrollToIndex({
          index: currentIndex - 1
        })
      }
    }
    return (
        <View style={styles.container}>
          <TopHeader currentIndex={currentIndex} dataLength={dataLength}/>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={onBoardingData}
                    renderItem={({ item }) => <OnBoardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
           <View style={[styles.bottomContainer, { width }]}>
            {currentIndex > 0 && (<Previous scrollTo={scrollToBack}/>)}
           <Paginators data={onBoardingData} scrollX={scrollX}/>
           <NextButton scrollTo={scrollTo} currentIndex={currentIndex}  dataLength={dataLength}/>
           </View>
        </View>
    );
};

export default OnBoarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between', // Center horizontally
      alignItems: 'center',     // Center vertically,
      paddingHorizontal: 20
    }
});
