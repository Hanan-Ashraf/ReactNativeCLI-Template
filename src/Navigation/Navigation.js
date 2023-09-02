import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Auth Screens
import SignUp from '../screens/SignUp/Index';
import LogIn from '../screens/LogIn/Index';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='AuthStackNavigator'>
        <Stack.Screen name='AuthStackNavigator' component={AuthStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Auth = createNativeStackNavigator();
const AuthStackNavigator = () => {
  return (
    <Auth.Navigator initialRouteName='LogIn' screenOptions={{headerShown:false}} >
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="LogIn" component={LogIn} />

    </Auth.Navigator>
  );
};
