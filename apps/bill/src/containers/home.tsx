import * as React from 'react';
// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Theme
import theme from '../../../../libs/themes/theme';
// Pages
import MainList from './main-list';
import { PayMyself } from './pay-myself/pay-myself';
// Native Base
import { NativeBaseProvider } from 'native-base';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Stack.Navigator
        initialRouteName="Main List"
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
          },
        }}
      >
        {/* Pages */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main List"
          component={MainList}
        />
        <Stack.Screen
          options={{ title: 'Pay Bill' }}
          name="Pay Myself"
          component={PayMyself}
        />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export default Home;
