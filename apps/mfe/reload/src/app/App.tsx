import * as React from 'react';
import {} from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//NativeBase
import { NativeBaseProvider, extendTheme } from 'native-base';

// Pages
import Cheatsheet from '../assets/containers/pages/Cheatsheet';
import Icons from '../assets/containers/pages/Icons';
import MainList from '../containers/main-list';
import ReloadWallet from '../containers/reload-myself/reload-wallet';
import EWallet from '../containers/reload-myself/ewallet';
import OpenLink from '../containers/reload-myself/open-link';
import SuccessReceipt from '../containers/reload-myself/success-receipt';
import ReloadOthers from '../containers/reload-others/reload-others';
import SelectCard from '../containers/reload-others/select-card';
import AddCard from '../containers/reload-others/add-card';
import Banks from '../containers/reload-others/select-banks';
import ReloadPin from '../containers/reload-pin/reload-pin';
import ReloadViaPin from '../containers/reload-pin/reload-via-pin';

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Lato',
  },
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      50: '#F9FAFB',
      100: '#F2F4F7',
      200: '#EAECF0',
      300: '#D0D5DD',
      400: '#98A2B3',
      500: '#667085',
      700: '#344054',
    },
    primary: {
      5: '#E8EFFD',
      25: '#A1C0F6',
      600: '#1561E8',
    },
    success: {
      500: '#12B76A',
    },
    yellow: {
      500: '#FFE600',
    },
    pink: {
      50: '#FFCCE4',
      700: '#990047',
    },
  },
  components: {
    Text: {
      defaultProps: {
        variant: 'body',
      },
      variants: {
        h1: {
          fontSize: '48px',
          fontFamily: 'heading',
        },
        h2: {
          fontSize: '32px',
          fontFamily: 'heading',
        },
        h3: {
          fontSize: '28px',
          fontFamily: 'heading',
        },
        h4: {
          fontSize: '24px',
          fontFamily: 'heading',
        },
        h5: {
          fontSize: '20px',
          fontFamily: 'heading',
        },
        h6: {
          fontSize: '16px',
          fontFamily: 'heading',
        },
        h7: {
          fontSize: '14px',
          fontFamily: 'heading',
        },
        body: {
          fontSize: '14px',
          fontFamily: 'body',
        },
        label: {
          fontSize: '12px',
          fontFamily: 'body',
        },
      },
    },
    Badge: {
      defaultProps: {
        rounded: 'full',
        variant: 'default',
        _text: { fontSize: '10px' },
      },
      variants: {
        default: {
          bg: 'primary.600',
          _text: { color: 'white' },
        },
        outline: {
          borderColor: 'primary.600',
          _text: { color: 'primary.600' },
        },
        success: {
          bg: 'success.500',
          _text: { color: 'white' },
        },
        info: {
          bg: 'primary.600',
          _text: { color: 'yellow.500' },
        },
        popular: {
          bg: 'yellow.500',
          _text: { color: 'primary.600' },
        },
        blue: {
          bg: 'primary.5',
          _text: { color: 'primary.600' },
        },
        pink: {
          bg: 'pink.50',
          _text: { color: 'pink.700' },
        },
      },
    },
    Box: {
      variants: {
        shadow: {
          bg: 'gray.50',
          padding: '16px',
          shadow: '2',
          borderRadius: '16px',
        },
        border: {
          padding: '16px',
          borderRadius: '10px',
          borderWidth: 1,
          borderColor: 'gray.300',
        },
        selection: {
          width: '50%',
          padding: '16px',
          borderRadius: '10px',
          borderWidth: 1,
          borderColor: 'gray.300',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        iconRounded: {
          bg: 'gray.200',
          padding: '16px',
          borderRadius: '16px',
        },
        iconCircle: {
          bg: 'gray.100',
          padding: '16px',
          rounded: 'full',
        },
        listing: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderColor: 'gray.200',
          paddingTop: '16px',
          paddingBottom: '16px',
        },
      },
    },
    Button: {
      defaultProps: {
        _text: { fontSize: '16px' },
        rounded: 'full',
        paddingLeft: '50px',
        paddingRight: '50px',
      },
      variants: {
        link: {},
        secondaryGray: {
          bg: 'white',
          _text: { color: 'gray.700' },
          borderColor: 'gray.300',
          borderWidth: 1,
        },
        secondaryColor: {
          bg: 'white',
          _text: { color: 'primary.600' },
          borderColor: 'primary.600',
          borderWidth: 1,
        },
      },
    },
    IconButton: {
      defaultProps: {
        padding: '12px',
        borderRadius: '8px',
        borderWidth: 1,
        borderColor: 'gray.300',
        _icon: {
          color: 'gray.400',
        },
      },
    },
    Input: {
      defaultProps: {
        bg: 'white',
        borderRadius: '8px',
        padding: '16px',
        fontSize: '15px',
      },
    },
    Modal: {
      defaultProps: {},
      variants: {
        bottom: {
          justifyContent: 'flex-end',
        },
      },
    },
    ModalContent: {
      defaultProps: {
        padding: '6',
        variant: 'default',
      },
      variants: {
        default: {
          borderRadius: '8px',
          width: '95%',
        },
        bottom: {
          borderTopRadius: '24px',
          borderBottomRadius: '0px',
          width: '100%',
          justifyContent: 'flex-end',
        },
      },
    },
    Radio: {
      defaultProps: {
        size: 'sm',
        _text: { fontSize: '16px' },
        bg: 'primary.600',
        _checked: {
          _icon: {
            color: `white`,
          },
        },
      },
    },
    Switch: {
      defaultProps: {
        size: 'sm',
      },
    },
  },
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main List">
          {/* Styling Cheatsheet */}
          <Stack.Screen name="Cheatsheet" component={Cheatsheet} />
          <Stack.Screen name="Icons" component={Icons} />

          {/* Pages */}
          <Stack.Screen
            options={{ headerShown: false }}
            name="Main List"
            component={MainList}
          />
          <Stack.Screen name="Reload Wallet" component={ReloadWallet} />
          <Stack.Screen name="Select eWallet" component={EWallet} />
          <Stack.Screen name="Partners" component={OpenLink} />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Receipt"
            component={SuccessReceipt}
          />
          <Stack.Screen name="Reload Others" component={ReloadOthers} />
          <Stack.Screen name="Select Card" component={SelectCard} />
          <Stack.Screen name="Add Card" component={AddCard} />
          <Stack.Screen name="Select Banks" component={Banks} />
          <Stack.Screen name="Reload Pin" component={ReloadPin} />
          <Stack.Screen name="Reload Via Pin" component={ReloadViaPin} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
