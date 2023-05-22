import React from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { ScreenLogin, ScreenCadastrar, ScreenPhoto, ScreenCamera } from "../screens"
import { TabNavigation } from "./tab.navigation"
import { DrawerNavigation } from "./drawer.navigation"

type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined
  Tab: undefined
  Drawer: undefined
  Photo: undefined
  CameraTake: undefined
  CameraShow: {photo: string}
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}
export function LoginNavigation() {
  const Stack = createStackNavigator<LoginStackParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Cadastrar" component={ScreenCadastrar} />
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen name="CameraTake" component={ScreenCamera} />
      <Stack.Screen name="CameraShow" component={ScreenCamera} />
      <Stack.Screen name="Photo" component={ScreenPhoto} />
    </Stack.Navigator>
  );
}