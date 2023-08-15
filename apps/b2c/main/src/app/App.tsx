/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Federated } from '@callstack/repack/client';
import {
  NavigationContainer,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import theme from '../themes/theme';

const Stack = createNativeStackNavigator();
let ReloadScreen: () => JSX.Element;

export const App = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  useEffect(() => {
    const importSharedMFE = async () => {
      const reloadModule = await Federated.importModule('reload', './App');
      ReloadScreen = reloadModule.default;
      setIsReady(true);
    };

    importSharedMFE();
  }, []);

  if (!isReady) {
    return <Text>Loading host app...</Text>;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer fallback={<Text>Loading...</Text>}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Host} />
          <Stack.Screen name="Reload" component={ReloadScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

const Host = () => {
  // const {bear, increaseBear} = useZustandStoreRemote();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView>
      <Button
        title="Go to Reload"
        onPress={() => {
          navigation.navigate('Reload');
        }}
      ></Button>
    </SafeAreaView>
  );
};

export default App;
