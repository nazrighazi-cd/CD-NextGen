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
import Internet from './add-on/Internet';
import ArrowLeft from '../../../../../libs/icons/src/general/Arrowleft';

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
            fontFamily: 'Montserrat-Bold',
          },
        }}
      >
        {/* Theme Cheatsheet */}
        <Stack.Screen name="Cheatsheet" component={Cheatsheet} />
        <Stack.Screen name="AddOn" component={AddOn} />
        <Stack.Screen name="Internet" component={Internet} />

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

export default Home;

