import * as React from 'react';
import { LogBox } from 'react-native';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// NativeBase
import { NativeBaseProvider } from 'native-base';
// Theme
import theme from '../../../../../libs/themes/theme';
// Pages
import Home from '../containers/home';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
]);

export default function App() {
  return (
    <NativeBaseProvider isSSR={false} theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            // headerLeft: ({ canGoBack, onPress }) =>
            //   canGoBack && <ArrowLeft color="#000000" onPress={onPress} />,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}