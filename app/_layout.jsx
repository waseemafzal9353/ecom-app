import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { View, ActivityIndicator, Text } from "react-native";
import Splash from "../components/SplashScreen";
import OnBoarding from "../components/onBoarding/OnBoarding";
import Login from "./auth/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [appIsReady, setAppIsReady] = useState(false)
    const [viewdOnBoarding, setViewOnBoarding] = useState(true)
  const [loaded, error] = useFonts({
    "roboto-regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Montserrat-EB": require('../assets/fonts/Montserrat.ttf'),
    "Montserrat-SB": require('../assets/fonts/Montserrat-SB.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
      setTimeout(()=>{
        setAppIsReady(true)
    
    }, 2000)
    }

}, [loaded, error]);

  if (!loaded && !error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

if(!appIsReady){
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Splash/>
        </View>
     );
}

const checkOnBoarding = async () => {
  try {
    const value = await AsyncStorage.getItem('@viewedOnboarding')
    if(value !== null ){
      setViewOnBoarding(true)
    }
  } catch(err) {
    console.log(err)
  } 
}

useEffect(()=>{checkOnBoarding()}, [])
return (
  <View style={{ flex: 1 }}>
    {viewdOnBoarding ? <Login/> : <OnBoarding/>}
  </View>
);

}