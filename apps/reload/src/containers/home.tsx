import * as React from 'react';
// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Theme
import theme from '../../../../libs/themes/theme';
// Pages
import Cheatsheet from './Cheatsheet';
import Icons from '../assets/containers/pages/Icons';
import MainList from '../containers/main-list';
import ReloadMyself from '../containers/reload-myself/reload-myself';
import EWallet from '../containers/reload-myself/ewallet';
import OpenLink from '../containers/reload-myself/open-link';
import SuccessReceipt from '../containers/reload-myself/success-receipt';
import ReloadOthers from '../containers/reload-others/reload-others';
import SelectCard from '../containers/reload-others/select-card';
import AddCard from '../containers/reload-others/add-card';
import Banks from '../containers/reload-others/select-banks';
import ReloadPin from '../containers/reload-pin/reload-pin';
import ReloadViaPin from '../containers/reload-pin/reload-via-pin';
import AutoReloadLimit from '../containers/auto-reload-limit/auto-reload-limit';
import AutoReloadCalendar from '../containers/auto-reload-calendar/auto-reload-calendar';
import TransactionHistory from '../containers/transaction-history/transaction-history';
import TransactionHistoryDetails from '../containers/transaction-history/transaction-history-details';
import SelectCards from '../containers/auto-reload-limit/select-cards';
import AutoReloadActive from '../containers/auto-reload-management/auto-reload-active';
// Native Base
import { NativeBaseProvider } from 'native-base';

const Stack = createNativeStackNavigator();

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const Home = () => {
  return (
    <NativeBaseProvider theme={theme} config={config}>
      <Stack.Navigator
        initialRouteName="Main List"
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
          },
          // headerLeft: ({ canGoBack, onPress }) =>
          //   canGoBack && <ArrowLeft color="#000000" onPress={onPress} />,
        }}
      >
        {/* Styling Cheatsheet */}
        <Stack.Screen name="Cheatsheet" component={Cheatsheet} />
        <Stack.Screen name="Icons" component={Icons} />

        {/* Pages */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main List"
          component={MainList}
        />
        <Stack.Screen
          options={{ title: 'Reload' }}
          name="Reload Myself"
          component={ReloadMyself}
        />
        <Stack.Screen name="Select eWallet" component={EWallet} />
        <Stack.Screen name="Partners" component={OpenLink} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Receipt"
          component={SuccessReceipt}
        />
        <Stack.Screen
          options={{ title: 'Reload' }}
          name="Reload Others"
          component={ReloadOthers}
        />
        <Stack.Screen name="Select Card" component={SelectCard} />
        <Stack.Screen name="Add Card" component={AddCard} />
        <Stack.Screen name="Select Banks" component={Banks} />
        <Stack.Screen
          options={{ title: 'Reload' }}
          name="Reload Pin"
          component={ReloadPin}
        />
        <Stack.Screen name="Reload Via Pin" component={ReloadViaPin} />
        <Stack.Screen
          options={{ title: 'Auto Reload' }}
          name="Auto Reload Limit"
          component={AutoReloadLimit}
        />
        <Stack.Screen
          options={{ title: 'Select Card' }}
          name="Select Cards"
          component={SelectCards}
        />
        <Stack.Screen
          options={{ title: 'Auto Reload' }}
          name="Auto Reload Calendar"
          component={AutoReloadCalendar}
        />
        <Stack.Screen
          name="Transaction History"
          component={TransactionHistory}
        />
        <Stack.Screen
          options={{ title: 'Notifications' }}
          name="Transaction History Details"
          component={TransactionHistoryDetails}
        />
        <Stack.Screen
          options={{ title: 'Auto Reload' }}
          name="Auto Reload Active"
          component={AutoReloadActive}
        />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export default Home;
