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
      600: '#475467',
      700: '#344054',
    },
    celcomBlue: {
      500: '#009DE0',
    },
    primary: {
      5: '#E8EFFD',
      10: '#D0DFFA',
      25: '#A1C0F6',
      300: '#4481ED',
      600: '#1561E8',
      700: '#114EBA',
    },
    success: {
      25: '#F6FEF9',
      50: '#ECFDF3',
      100: '#D1FADF',
      300: '#6CE9A6',
      500: '#12B76A',
      700: '#027A48',
    },
    error: {
      50: '#FEF3F2',
      100: '#FEE4E2',
      600: '#D92D20',
    },
    yellow: {
      500: '#FFE600',
    },
    pink: {
      50: '#FFCCE4',
      600: '#CC005F',
      700: '#990047',
    },
    indigo: {
      50: '#EEF4FF',
      700: '#3538CD',
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
    Alert: {
      defaultProps: {
        rounded: '12px',
        padding: '16px',
        paddingLeft: '0px',
        _text: { fontSize: '14px' },
      },
      variants: {
        info: {
          bg: 'primary.5',
          borderColor: 'primary.300',
          _text: { color: 'primary.700' },
          borderWidth: 1,
        },
        success: {
          bg: 'success.25',
          borderColor: 'success.300',
          _text: { color: 'success.700' },
          borderWidth: 1,
        },
      },
    },
    Avatar: {
      defaultProps: {
        variant: 'primary',
      },
      variants: {
        primary: {
          bg: 'white',
          borderColor: 'gray.200',
          borderWidth: 1,
          rounded: '10px',
        },
        info: {
          bg: 'primary.10',
          borderColor: 'primary.5',
          borderWidth: 6,
          rounded: 'full',
        },
        error: {
          bg: 'error.100',
          borderColor: 'error.50',
          borderWidth: 6,
          rounded: 'full',
        },
        success: {
          bg: 'success.100',
          borderColor: 'success.50',
          borderWidth: 6,
          rounded: 'full',
        },
        rounded: {
          bg: 'gray.50',
          rounded: '16px',
          shadow: '2',
        },
        circle: {
          bg: 'gray.100',
          rounded: 'full',
        },
      },
    },
    Badge: {
      defaultProps: {
        variant: 'default',
        size: 'sm',
        rounded: 'full',
        _text: { fontWeight: 'normal' },
      },
      sizes: {
        sm: {
          _text: { fontSize: '12px' },
        },
        md: {
          _text: { fontSize: '14px' },
          paddingLeft: '12px',
          paddingRight: '12px',
        },
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
        celcomBlue: {
          bg: 'celcomBlue.500',
          _text: { color: 'white' },
        },
        gray: {
          bg: 'gray.100',
          _text: { color: 'black' },
        },
        indigo: {
          bg: 'indigo.50',
          _text: { color: 'indigo.700' },
        },
        pink: {
          bg: 'pink.600',
          _text: { color: 'white' },
        },
        yellow: {
          bg: 'yellow.500',
          _text: { color: 'black' },
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
        size: 'lg',
      },
      baseStyle: {
        rounded: 'full',
        paddingLeft: '50px',
        paddingRight: '50px',
      },
      sizes: {
        sm: {
          _text: { fontSize: '12px' },
        },
        md: {
          _text: { fontSize: '14px' },
        },
        lg: {
          _text: { fontSize: '16px' },
        },
      },
      variants: {
        default: {
          bg: 'primary.600',
          _text: { color: 'white' },
          _pressed: {
            bg: 'primary.600',
          },
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
        destructive: {
          bg: 'error.600',
          _text: { color: 'white' },
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
        pill: {
          paddingLeft: '16px',
          paddingRight: '16px',
          _text: { color: 'gray.500' },
        },
        pillActive: {
          bg: 'primary.10',
          paddingLeft: '16px',
          paddingRight: '16px',
          borderRadius: '20px',
          _text: { color: 'primary.700' },
        },
        pillOutline: {
          paddingLeft: '12px',
          paddingRight: '12px',
          _text: { color: 'gray.700' },
          borderColor: 'gray.300',
          borderWidth: 1,
        },
        pillOutlineActive: {
          paddingLeft: '12px',
          paddingRight: '12px',
          borderRadius: '20px',
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
        size: 'md',
        borderRadius: '8px',
        fontSize: '14px',
        placeholderTextColor: 'gray.500',
        _disabled: {
          bg: 'gray.300',
          placeholderTextColor: 'gray.700',
        },
        _focus: {
          bg: 'white',
          placeholderTextColor: 'transparent',
          borderColor: 'gray.300',
        },
        _android: {
          paddingTop: '10px',
          paddingBottom: '10px',
        },
      },
      sizes: {
        sm: { padding: '12px', paddingTop: '12px', paddingBottom: '12px' },
        md: { padding: '12px', paddingTop: '18px', paddingBottom: '18px' },
      },
    },
    Modal: {
      defaultProps: {
        _backdrop: {
          bg: 'gray.700',
          opacity: '80',
        },
        contentSize: {
          width: '100%',
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
