import * as React from 'react';
// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Theme
import theme from '../../../../../libs/themes/theme';
// Native Base
import { NativeBaseProvider } from 'native-base';
// Pages
import Cheatsheet from './Cheatsheet';
import AddOn from './add-on/AddOn';
import DiscoverAddOn from './add-on/DiscoverAddOn';
import Checkout from './Checkout/Checkout';
import Payment from './Payment/Payment';
import OrderSummary from './OrderSummary/OrderSummary';

import ArrowLeft from '../../../../../libs/icons/src/general/Arrowleft';
import Close from '../../../../../libs/icons/src/general/Close';

const Stack = createNativeStackNavigator();

import { Pressable } from 'native-base';
const Home = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Stack.Navigator
        initialRouteName="AddOn"
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#FFF',
          },
          headerStyle: {
            backgroundColor: '#001870',
          },
        }}
      >
        {/* Theme Cheatsheet */}
        <Stack.Screen name="Cheatsheet" component={Cheatsheet} />
        <Stack.Screen name="AddOn" component={AddOn}   options={{ title: 'ADD-ONS' }}/>
        <Stack.Screen name="DiscoverAddOn" component={DiscoverAddOn} options={({ navigation, route }) => ({
          title: route.params.title,
          headerLeft: ({ canGoBack }) => canGoBack && backArrow(navigation),
          headerRight: () => exitIcon(navigation),
        })} />
        <Stack.Screen name="Checkout" component={Checkout} options={({ navigation, route }) => ({
          headerLeft: ({ canGoBack }) => canGoBack && backArrow(navigation),
          headerRight: () => exitIcon(navigation),
        })}
        />
        <Stack.Screen name="Payment" component={Payment} options={({ navigation, route }) => ({
          headerLeft: ({ canGoBack }) => canGoBack && backArrow(navigation),
          headerRight: () => exitIcon(navigation),
        })} />
        <Stack.Screen name="Order Summary" component={OrderSummary}
          options={({ navigation, route }) => ({
            headerLeft: ({ canGoBack }) => canGoBack && backArrow(navigation),
            headerRight: () => exitIcon(navigation),
          })} />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

const backArrow = (navigation) => {
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <ArrowLeft color="#FFF" />
    </Pressable>
  );
};

const exitIcon = (navigation) => {
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Close color="#FFF" />
    </Pressable>
  );
};

export default Home;

