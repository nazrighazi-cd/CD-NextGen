import { extendTheme } from 'native-base';

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat-Regular',
    body: 'Lato-Regular',
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
          fontSize: '32px',
          fontFamily: 'heading',
        },
        h2: {
          fontSize: '28px',
          fontFamily: 'heading',
        },
        h3: {
          fontSize: '24px',
          fontFamily: 'heading',
        },
        h4: {
          fontSize: '20px',
          fontFamily: 'heading',
        },
        h5: {
          fontSize: '18px',
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
        h8: {
          fontSize: '12px',
          fontFamily: 'heading',
        },
        body1: {
          fontSize: '16px',
          fontFamily: 'body',
        },
        body: {
          fontSize: '14px',
          fontFamily: 'body',
        },
        body2: {
          fontSize: '12px',
          fontFamily: 'body',
        },
        label: {
          fontSize: '10px',
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
        header: {
          paddingTop: '16px',
          paddingBottom: '16px',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        },
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
        variant: 'default',
      },
      baseStyle: {
        rounded: 'full',
        paddingLeft: '50px',
        paddingRight: '50px',
      },
      variants: {
        default: {
          bg: 'primary.600',
          _text: { color: 'white' },
          _pressed: {
            bg: 'primary.600',
          },
        },
        tab: {
          paddingLeft: '8px',
          paddingRight: '8px',
          borderColor: 'gray.300',
          borderWidth: 1,
        },
        tabActive: {
          bg: 'gray.50',
          paddingLeft: '8px',
          paddingRight: '8px',
          borderColor: 'gray.300',
          borderWidth: 1,
        },
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
        padding: '10px',
        borderRadius: '8px',
        borderWidth: 1,
        borderColor: 'gray.300',
        _icon: {
          color: '#98A2B3',
          width: '24px',
          height: '24px',
        },
      },
    },
    Input: {
      defaultProps: {
        bg: 'white',
        borderRadius: '8px',
        padding: '12px',
        paddingTop: '18px',
        paddingBottom: '18px',
        fontSize: '14px',
        placeholderTextColor: 'gray.500',
        _focus: {
          bg: 'white',
          placeholderTextColor: 'white',
          borderColor: 'gray.300',
          paddingTop: '24px',
          paddingBottom: '12px',
        },
      },
    },
    Modal: {
      defaultProps: {
        _backdrop: {
          bg: 'gray.700',
          opacity: '80',
        },
      },
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

export default theme;
