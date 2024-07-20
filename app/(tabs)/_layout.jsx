import { Tabs } from 'expo-router';
import React from 'react';


export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen
      name='home'/>
       <Tabs.Screen
      name='wishlist'/>
       <Tabs.Screen
      name='cart'/>
        <Tabs.Screen
      name='search'/>
        <Tabs.Screen
      name='settings'/>
      
    </Tabs>
  );
}
