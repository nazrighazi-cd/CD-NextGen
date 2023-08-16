import * as React from 'react';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// NativeBase
import { NativeBaseProvider, Text } from 'native-base';
// Theme
import theme from '../../../../libs/themes/theme';
// Pages
import Home from '../containers/home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}