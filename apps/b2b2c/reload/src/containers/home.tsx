import * as React from 'react';
// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Theme
import theme from '../../../../../libs/themes/theme';
// Native Base
import { NativeBaseProvider } from 'native-base';
// Pages
import Cheatsheet from './Cheatsheet';
import Reload from './Reload/Reload';
import Checkout from './Checkout/Checkout';
import Payment from './Payment/Payment';
import OrderSummary from './OrderSummary/OrderSummary';
const Stack = createNativeStackNavigator();


const Home = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Stack.Navigator
        initialRouteName="Reload"
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
          },
          headerShadowVisible: false
        }}
      >
        {/* Theme Cheatsheet */}
        <Stack.Screen name="Cheatsheet" component={Cheatsheet} />
        <Stack.Screen name="Reload" component={Reload} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Order Summary" component={OrderSummary} />


      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export default Home;
