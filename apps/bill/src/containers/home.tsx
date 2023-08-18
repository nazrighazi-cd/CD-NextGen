import * as React from 'react';
// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Theme
import theme from '../../../../libs/themes/theme';
// Native Base
import { NativeBaseProvider } from 'native-base';
// Pages
import MainList from './main-list';
import { PayMyself } from './pay-myself/pay-myself';
import { PayOthers } from './pay-others/pay-others';
import BillDetails from './bill-details/bill-details';
import EditTotal from './pay-myself/edit-total-payment';
import MyselfBillDetails from './pay-myself/myself-bill-details';
import SelectWallet from './pay-myself/select-ewallet';
import PartnerLink from './pay-myself/partner-link';
import SuccessReceipt from './pay-myself/success-receipt';

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
        <Stack.Screen
          options={{ title: 'Pay For Others' }}
          name="Pay Others"
          component={PayOthers}
        />
        <Stack.Screen
          options={{ title: 'Edit Total Payment' }}
          name="Edit Total Payment"
          component={EditTotal}
        />
        <Stack.Screen
          options={{ title: 'Bill Details' }}
          name="Myself Bill Details"
          component={MyselfBillDetails}
        />
        <Stack.Screen
          options={{ title: 'Select Wallet' }}
          name="Select Wallet"
          component={SelectWallet}
        />
        <Stack.Screen
          options={{ title: 'Partners' }}
          name="Partners"
          component={PartnerLink}
        />
        <Stack.Screen
          options={{ title: 'Receipt' }}
          name="Receipt"
          component={SuccessReceipt}
        />
        <Stack.Screen
          options={{ title: 'Bill Details' }}
          name="Bill Details"
          component={BillDetails}
        />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export default Home;
