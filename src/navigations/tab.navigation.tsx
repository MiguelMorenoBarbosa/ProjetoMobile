import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenAcelerometro, ScreenCamera, ScreenLocation, ScreenPerfil } from "../screens"
import { colors } from '../styles/colors';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import { Acelerometro } from '../screens/Acelerometro';

type TabParamList = {
  Perfil: undefined
  Camera: undefined
  Location: undefined
  Acelerometro: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
  navigation: TabScreenNavigationProp
}
export function TabNavigation() {
  const Tab = createBottomTabNavigator<TabParamList>();
  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerStyle: {
          backgroundColor: colors.secondary
        },
        headerTintColor: colors.white,
        tabBarActiveBackgroundColor: colors.primary, 
        tabBarActiveTintColor: colors.white
        }}>
      <Tab.Screen name="Perfil" component={ScreenPerfil} 
        options={{
          tabBarIcon: () => (
            <Ionicons name='person' color={colors.black} size={24} />
          )
        }}
      />
        <Tab.Screen name="Camera" component={ScreenCamera} 
        options={{
          tabBarIcon: () => (
            <Ionicons name='camera' color={colors.black} size={24} />
          )
        }}
      />
      <Tab.Screen name='Location' component={ScreenLocation} 
        options={{
          tabBarIcon: () => (
          <FontAwesome name="map-marker" size={24} color="black" />
          )
        }}
      />
      <Tab.Screen name='Acelerometro' component={ScreenAcelerometro} 
        options={{
          tabBarIcon: () => (
            <AntDesign name="car" size={24} color="black" />
          )
        }}
      />
    </Tab.Navigator>
  );
}