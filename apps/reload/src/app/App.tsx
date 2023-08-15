import * as React from 'react';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// NativeBase
import { NativeBaseProvider } from 'native-base';
// Theme
import theme from '../themes/theme';
// Pages
import Home from '../containers/home';
// Icons

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,

            // headerLeft: ({ canGoBack, onPress }) =>
            //   canGoBack && <ArrowLeft color="#000000" onPress={onPress} />,
          }}
        >
          {/* Styling Cheatsheet */}
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
